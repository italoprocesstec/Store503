jQuery(window).load(function() {

     var $listagem = jQuery('#secao-banner .bannerhome li');

    jQuery.each($listagem, function(){
      $this = jQuery(this);

      var $vazio = $this.html();

      if($vazio === ''){
        $this.remove();
      }
    });

    jQuery("#secao-banner .bannerhome").owlCarousel({

        items : 1,
        autoplay : true,
        stopOnHover : true,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsMobile : [479,1],
        navigation: true,
        pagination: false,
        slideSpeed: 1000,
        autoHeight : true

    });

});

jQuery(document).ready( function(){

    var $listaBanner = jQuery('.bannerfull li');

    if($listaBanner.length){
        jQuery.each($listaBanner, function(){
          $this = jQuery(this);

          var $text = $this.text();

          if($text === ''){
            $this.remove();
          }

        });
    }  

    jQuery('body #conteudo').after(jQuery('body #mais-ofertas'));

    jQuery('#cabecalho #menu-superior .EstListCat10').append(jQuery('#menu-superior .bt-laranja'));
    jQuery('#cabecalho #menu-superior .EstListCat10 .bt-laranja').append(jQuery('#menu-superior .drop-menu'));

    jQuery('#barra-topo #menu-superior .tit-menu').on('click', function(){
        jQuery(this).siblings('#barra-topo #menu-superior .EstListCat10').toggle().closest('div').addClass('open');
    }); 

    jQuery("#newsletter .close").click(function(){
        jQuery("#newsletter").fadeOut();
    });

    jQuery(window).scroll(function () {

        if (jQuery(this).scrollTop() <1500) {
            jQuery('#rodape #newsletter').addClass('news-fixo'); 
        }else {
            jQuery('#rodape #newsletter').removeClass('news-fixo');
        }

        if (jQuery(this).scrollTop() < 1300) {
            jQuery('.FCHome #rodape #newsletter').addClass('news-fixo'); 
        }else {
            jQuery('.FCHome #rodape #newsletter').removeClass('news-fixo');
        } 

    });

    jQuery('body #conteudo').addClass('container');  

    /* catalogo */
    jQuery('.ProductList #TabListaProdutos').after(jQuery('.ProductList .descricao-categoria'));

    /* produto */
    jQuery('.parcelamento h3').on('click', function(){
        jQuery(this).siblings('.parcelamento .lista').toggle().closest('div').addClass('open');
    }); 

    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 500) {
            jQuery('.ProductDet .produto-flutuante').addClass('bt-fixo'); 
        }else {
            jQuery('.ProductDet .produto-flutuante').removeClass('bt-fixo');
        } 
    }); 

    jQuery('.ProductDet .frete #idCEPButton').attr('src','//www.rumo.com.br/lojas/00032024/images/IconNewsletter.png');

    var $body = jQuery('body');
    if ( $body.hasClass("ProductDet") ) {
      jQuery('input[type=text].QTIncMult').val('1');
    }  

    // Quantidade
    var $body = jQuery('body');
    if ( $body.hasClass("FCProduct") ) {
        if(iQtdProds>2){
          var oScript=document.createElement('script');
          oScript.type='text/javascript';
          oScript.async=true;
          oScript.src=FC$.PathHtm+'IncPaginacaoOrder.js';
          var sAddScript=document.getElementsByTagName('script')[0];
          sAddScript.parentNode.insertBefore(oScript,sAddScript);
        }
    }    

    var $body = jQuery('body');
    if ( $body.hasClass("FCProduct") ) {
        jQuery('.FCCartQtyInput').each(function(){
          idQtd =  jQuery(this).attr('id');
          htmMore =  '<div class="moreFCCartQtyInput" dataInput="'+idQtd+'">+</div>';
          htmlLess = '<div class="lessFCCartQtyInput" dataInput="'+idQtd+'">-</div>';
          jQuery(this).parent().append(htmMore + htmlLess);    
        });

        jQuery('.moreFCCartQtyInput').bind('click', function(){
          attrIdQtd = jQuery(this).attr('dataInput');
          idQtdFix = jQuery('#'+attrIdQtd);
          idQtdFix.prop('checked', true);
          addQtd = parseInt(idQtdFix.val()) + 1;
          idQtdFix.val(addQtd);       
        });

        jQuery('.lessFCCartQtyInput').bind('click', function(){
          attrIdQtd = jQuery(this).attr('dataInput');
          idQtdFix = jQuery('#'+attrIdQtd);
          if(idQtdFix.val() > 0){
            addQtd = parseInt(idQtdFix.val()) - 1;
            idQtdFix.val(addQtd);
          }        
        }); 
    }    

    /* carrinho */
    jQuery('.FCCart #FCCartSubtotals').before(jQuery('.FCCart #FCCartCupom'));
    jQuery('.FCCart #FCCartCupom').append(jQuery('.FCCart #FCCartFreightSimulation'));
    jQuery('.FCCart #FCCartCupom #Cupom').attr('placeholder', 'Digite seu cupom de desconto');
    jQuery('#idFreightSimulationFC #idTDFreightSimulationFC tr td tr td #idZip').attr('placeholder', 'Digite seu CEP');
    jQuery('.FCCart #idTabItensFC #FCCartCupom > .FCCartCupomInfo').append(jQuery('.FCCart #idTabItensFC #FCCartCupom > .FCCartCupomValue'));
  
    /* Inserindo valor do pedido */
    jQuery('.FCCart #FCCartSubtotals .FCCartItemsPrice .FCPrice').after('<span class="ValorVista">Total à Vista R$ <b></b></span>');

    function currencyFormat(num) {
        var str = new String(num);
        return str.replace(".", ",").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    };
    
    function roundValue(num) {
        var descimal = 0;
        num = String(num).split('.');
        if (num[1] !== undefined) {
            descimal = num[1].substr(0, 2);
        }
        num = num[0] + '.' + descimal;
        return currencyFormat(num);
    };

    var percentDesc = 0.03;
    var contentPrice = jQuery('.FCCart #FCCartSubtotals .FCCartItemsPrice .FCPriceValue');
    jQueryvalueTotal = contentPrice.find('.FCPriceInt').text() + contentPrice.find('.FCPriceCent').text();
    jQueryvalueTotal = parseFloat(jQueryvalueTotal.replace('.','').replace(',', '.'));
    jQueryvalueDesc = parseFloat(jQueryvalueTotal * percentDesc);
    jQuery('.FCCart #FCCartSubtotals .FCCartItemsPrice .ValorVista b').html(roundValue(jQueryvalueTotal - jQueryvalueDesc));


    //Pagina de produto
    var percentDesc = 0.03;
    var contentPrice = jQuery('.ProductStyleBoxFC #idPriceGridFC b .FCPrice .FCPriceValue');
    jQueryvalueTotal = contentPrice.find('.FCPriceInt').text() + contentPrice.find('.FCPriceCent').text();
    jQueryvalueTotal = parseFloat(jQueryvalueTotal.replace('.','').replace(',', '.'));
    jQueryvalueDesc = parseFloat(jQueryvalueTotal * percentDesc);
    jQuery('.abriga-preco-produto .ProductStyleBoxFC .prod-price .FCPrice').after('<span class="total-desconto">Total à Vista R$ ' +roundValue(jQueryvalueTotal - jQueryvalueDesc)+ '<br/> <span class="porcentagem-desconto">3% de desconto</span></span>');

    /* Responsivo */
    if (jQuery(window).width() < 992){
      
        jQuery('#cabecalho #menu-superior .tit-menu').on('click', function(){
            jQuery(this).siblings('#menu-superior #menu-mobile').toggleClass('aberto');
        });

        jQuery('#menu-superior #menu-mobile #idMenuCat2 ul').closest('li').addClass('com-filho');
        jQuery('#menu-superior #menu-mobile #idMenuCat2 .com-filho > .PathCat0').after($('<span class="click">+</span>'));

        jQuery('#menu-superior #menu-mobile .click').on('click', function(){
            jQuery(this).siblings('#menu-superior #menu-mobile #idMenuCat2 > li > ul').toggleClass('active');
        }); 

        jQuery(".produtos").owlCarousel({

            items : 2,
            autoplay : true,
            stopOnHover : false,
            itemsDesktopSmall : [992,2],
            navigation: false,
            pagination: true,
            slideSpeed: 1000,
            autoHeight : true

        });

    }

    if (jQuery(window).width() < 767){ 

        jQuery('.ProductDet #Descricao').before('<span id="tit-descricao">Descrição Completa</span>')
        jQuery('.ProductDet #tit-descricao').on('click', function(){
            jQuery(this).siblings('.ProductDet #Descricao').toggle().addClass('open');
        });        

        jQuery('.menu-rodape .institucional .tit-rodape').on('click', function(){
            jQuery(this).siblings('.menu-rodape .institucional .rodape-m').toggle().closest('div').addClass('open');
        }); 

        jQuery('.busca > span').on('click', function(){
            jQuery(this).siblings('.busca #autocomplete-form').toggle().closest('div').addClass('open');
        }); 

    }

});