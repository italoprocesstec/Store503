// Layout //

//### Guarda em variável a página atual
var sPag=document.location.href.toUpperCase();

function AtivaLinkMenu1(){ 
  var sActive="";
  if(sPag.indexOf('CADASTRO.ASP')>=0)sActive="LinkCadastro";
  else if(sPag.indexOf('NEWSLETTER.ASP')>=0)sActive="LinkNewsletter";
  else if(sPag.indexOf('TRACK.ASP')>=0)sActive="LinkTrack";
  else if(sPag.indexOf('INDIQUE.ASP')>=0)sActive="LinkIndique";
  if(sActive!="")document.getElementById(sActive).className="FundoMenu1_On";
}

function OnMouseOutMenu1(ItemMenu){
  if(ItemMenu.className=='FundoMenu1_Hover')ItemMenu.className="FundoMenu1_Off";
}
function OnMouseOverMenu1(ItemMenu){
  if(ItemMenu.className=='FundoMenu1_Off')ItemMenu.className="FundoMenu1_Hover";
}

function AtivaLinkMenu2(){ 
  var sActive="";
  if(sPag.indexOf('HOME.ASP')>=0)sActive="LinkHome";
  else if(sPag.indexOf('CATEGORIAS.ASP')>=0)sActive="LinkCat";
  else if(sPag.indexOf('PROMOCAO')>=0)sActive="LinkProm";
  else if(sPag.indexOf('LANCAMENTO')>=0)sActive="LinkLanc";
  else if(sPag.indexOf('FALECONOSCO.ASP')>=0)sActive="LinkContato2";
  else if(sPag.indexOf('ADDPRODUTO.ASP')>=0 || sPag.indexOf('ADDMULT.ASP')>=0)sActive="LinkPedido";
  else if(sPag.indexOf('AJUDA.ASP')>=0)sActive="LinkAjuda";
  if(sActive!="")document.getElementById(sActive).className="FundoMenu2_On";
}

function OnMouseOutMenu2(ItemMenu){
  if(ItemMenu.className=='FundoMenu2_Hover')ItemMenu.className="FundoMenu2_Off";
}
function OnMouseOverMenu2(ItemMenu){
  if(ItemMenu.className=='FundoMenu2_Off')ItemMenu.className="FundoMenu2_Hover";
}

function AtivaLinkRodape(){ 
  var sActive="";
  if(sPag.indexOf('HOME.ASP')>=0)sActive="LinkRodHome";
  else if(sPag.indexOf('CATEGORIAS.ASP')>=0)sActive="LinkRodCat";
  else if(sPag.indexOf('PROMOCAO')>=0)sActive="LinkRodProm";
  else if(sPag.indexOf('LANCAMENTO')>=0)sActive="LinkRodLanc";
  else if(sPag.indexOf('ADDPRODUTO.ASP')>=0 || sPag.indexOf('ADDMULT.ASP')>=0)sActive="LinkRodPedido";
  else if(sPag.indexOf('AJUDA.ASP')>=0 && sPag.indexOf("ENTREGA")>=0)sActive="LinkRodEntrega";
  else if(sPag.indexOf('AJUDA.ASP')>=0 && sPag.indexOf("SEGURAN")>=0)sActive="LinkRodSeg";
  else if(sPag.indexOf('BUSCAAVANCADA.ASP')>=0)sActive="LinkRodBusca";
  else if(sPag.indexOf('/NEWS')>=0)sActive="LinkRodNoticias";
  else if(sPag.indexOf('AJUDA.ASP')>=0)sActive="LinkRodAjuda";
  if(sActive!="")document.getElementById(sActive).className="RodapeMenuAtual";
}

var oBaseTop=document.getElementsByTagName('base')[0];
if(oBaseTop)var IsBaseTop=(oBaseTop.target=='_top');
else var IsBaseTop=false;


//### função para link no topo
function LinkTop(sTitle,sPage,sParam,sStyle){
  sPageM=sPage.toUpperCase();
  if(sPageM=='CADASTRO' || sPageM=='TRACK'){sURL='https://www.rumo.com.br/sistema/';}else{sURL='';}
  if(sPageM=='CADASTRO' || sPageM=='TRACK' || IsBaseTop){sTarget='top';}else {sTarget='window';}
  if(sPagAtual.indexOf(sPageM+'.ASP')>=0 && sPagAtual.indexOf(sParam.toUpperCase())>=0){
    document.write('<table width=100% class='+sStyle+'_On align=center OnClick='+sTarget+'.location.href="'+sURL+sPage+'.asp?IDLoja='+IDLoja+sParam+'" cellspacing=0 cellpadding=0><tr><td align=center>'+sTitle+'</td></tr></table>');}
   else{
    document.write('<table width=100% class='+sStyle+'_Off align=center OnMouseOut=this.className="'+sStyle+'_Off" OnMouseOver=this.className="'+sStyle+'_Hover" OnClick='+sTarget+'.location.href="'+sURL+sPage+'.asp?IDLoja='+IDLoja+sParam+'" cellspacing=0 cellpadding=0><tr><td align=center>'+sTitle+'</td></tr></table>');}
}

//### função para link no rodapé
function LinkPag(sTitle,sPage,sParam,sStyle){ 
  sPageM=sPage.toUpperCase();
  if(sPageM=='CADASTRO' || sPageM=='TRACK'){sURL='https://www.rumo.com.br/sistema/';}else {sURL='';}
  if(sPageM=='CADASTRO' || sPageM=='TRACK' || IsBaseTop){sTarget=' target=_top';}else {sTarget='';}
  var str='<a href=';
  str+=sURL+sPage+'.asp?IDLoja='+IDLoja+sParam+' class='+sStyle;
  if(sPagAtual.indexOf(sPageM+'.ASP')>=0 && sPagAtual.indexOf(sParam.toUpperCase())>=0)str +='_On';
  else str +='_Off';
  str+=sTarget+'>'+sTitle+'</a>';
  document.write(str);
}


//### Função que abre janela de chat
function MostraChatP(){
 popup=window.open('ChatLogin.asp?IDLoja='+IDLoja,'Chat','top=20,left=20,height=280,width=390,scrollbars=no,resizable=yes');
 popup.focus();return void(0);}

//### Função que valida a busca  
function VerTexto(oNome){
 if (oNome.Texto.value=='' || oNome.Texto.value.length<2){
   alert('Busca inválida.');
   oNome.Texto.focus();
   return false;}
 else{return true;}
}

//### Função que mostra o máximo de parcela na home e na listagem principal de produtos
function MostraMaxParcela(PrecoProd,MaxParcelas){
  var ComSem;
  if(PrecoProd==0||MaxParcelas==1||Juros.length==0)return;
  if(MaxParcelas==0||MaxParcelas>Juros.length)MaxParcelas=Juros.length;
  if(Juros[MaxParcelas-1]>0)ComSem=""; else ComSem="<font color=#990000> sem juros</font>";
  document.write("ou <b>"+MaxParcelas+"x</b>"+ComSem+" de <b>"+FormatPrecoReais(CalculaParcelaJurosCompostos(PrecoProd,MaxParcelas))+"</b>");
}

//### Função para mostrar valor economizado em produtos em promoção
function MostraEconomia(PrecoProd,PrecoOri){
if(PrecoProd!=PrecoOri)document.write("<br><font color=#6f9e45>Economize <b>"+FormatPrice(PrecoOri-PrecoProd,'R$')+"</b> ("+FormatNum(((PrecoOri-PrecoProd)/PrecoOri)*100)+"%)</font>");
}

function FormatNum(num){
num=num.toString().replace(/\$|\,/g,'');
if(isNaN(num))num="0";
sign=(num==(num=Math.abs(num)));
num=Math.floor(num*100+0.50000000001);
num=Math.floor(num/100).toString();
for(var i=0;i<Math.floor((num.length-(1+i))/3);i++)num=num.substring(0,num.length-(4*i+3))+'.'+num.substring(num.length-(4*i+3));
return ((sign)?'':'-')+num;
}

function MostraFreteGratis(iPeso){
if(iPeso==0)document.write("<img src='"+sCaminhoImages+"btfretegratis.gif'>");
}