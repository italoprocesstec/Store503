var g1="5",g2="5",g3="5",g4="5";jQuery.noConflict(),jQuery(function(e){e.widget("custom.autocomplete",e.ui.autocomplete,{_renderMenu:function(a,r){var t=this,l="";e.each(r,function(e,r){r.category!=l&&(a.append("<li class='ui-autocomplete-category'><span class='as-categoria'>"+r.category+"</span></li>"),l=r.category),t._renderItem(a,r)})}}),e("#autocomplete-toolbar").autocomplete({select:function(a,r){if(r.item.q)return e("#autocomplete-form-toolbar").submit(),!1;if(r.item.c){var t=r.item.id;return window.location.href="/prod,idloja,"+FC$.IDLoja+",idproduto,"+t,!1}if(r.item.u)return window.location.href=r.item.u.replace("&amp;","&"),!1;if(r.item.s){var l=r.item.id;return window.location.href="/news,idloja,"+FC$.IDLoja+",idnoticia,"+l,!1}},focus:function(a,r){return e("input#autocomplete-toolbar").val(r.item.label.replace("&quot;",'"').replace("&apos;","'").replace("&amp;","&").replace("&lt;","<").replace("&gt;",">").replace("&#192;","À").replace("&#193;","Á").replace("&#194;","Â").replace("&#195;","Ã").replace("&#196;","Ä").replace("&#197;","Å").replace("&#198;","Æ").replace("&#199;","Ç").replace("&#200;","È").replace("&#201;","É").replace("&#202;","Ê").replace("&#203;","Ë").replace("&#204;","Ì").replace("&#205;","Í").replace("&#206;","Î").replace("&#207;","Ï").replace("&#208;","Ð").replace("&#209;","Ñ").replace("&#210;","Ò").replace("&#211;","Ó").replace("&#212;","Ô").replace("&#213;","Õ").replace("&#214;","Ö").replace("&#216;","Ø").replace("&#217;","Ù").replace("&#218;","Ú").replace("&#219;","Û").replace("&#220;","Ü").replace("&#221;","Ý").replace("&#222;","Þ").replace("&#223;","ß").replace("&#224;","à").replace("&#225;","á").replace("&#226;","â").replace("&#227;","ã").replace("&#228;","ä").replace("&#229;","å").replace("&#230;","æ").replace("&#231;","ç").replace("&#232;","è").replace("&#233;","é").replace("&#234;","ê").replace("&#235;","ë").replace("&#236;","ì").replace("&#237;","í").replace("&#238;","î").replace("&#239;","ï").replace("&#240;","ð").replace("&#241;","ñ").replace("&#242;","ò").replace("&#243;","ó").replace("&#244;","ô").replace("&#245;","õ").replace("&#246;","ö").replace("&#248;","ø").replace("&#249;","ù").replace("&#250;","ú").replace("&#251;","û").replace("&#252;","ü").replace("&#253;","ý").replace("&#254;","þ").replace("&#255;","ÿ")),!1},source:function(a,r){e.ajax({url:"/autosuggest.asp?idloja="+FC$.IDLoja+"&format=1&q="+a.term+"&g1="+g1+"&g2="+g2+"&g3="+g3+"&g4="+g4,dataType:"json",type:"GET",success:function(a){var t=a.SearchTerms,l=a.Products,p=a.RelatedPages,c=a.News;t=e.isArray(t)?t:[],l=e.isArray(l)?l:[],p=e.isArray(p)?p:[],c=e.isArray(c)?c:[];var o=[].concat(t,l,p,c);r(e.map(o,function(e){return{category:e.category,t:e.label,q:e.q,nm:e.label,id:e.id,c:e.c,im:e.im,op:e.op,fp:e.fp,v:e.v,p:e.label,u:e.u,id:e.id,t:e.label,s:e.s,d:e.d,label:e.label}}))},error:function(e,a,r){}})},minLength:3}).data("autocomplete")._renderItem=function(a,r){if(e("li.active:even").css("background-color","#f6f6f6"),r.q){var t="";t=r.q>1?"s":"&nbsp;&nbsp;";var l=r.label.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+e.ui.autocomplete.escapeRegex(this.term)+")(?![^<>]*>)(?![^&;]+;)","gi"),"<strong>$1</strong>");return e("<li class='active'></li>").data("item.autocomplete",r).append("<a><table width='100%'><tr><td width='90%' id='as-nome-termos'><span>"+l+"</span></td><td align='right' id='as-qtd-termos'><span>"+r.q+"&nbsp;Produto"+t+"&nbsp;</span></td></tr></table></a>").appendTo(a)}if(r.c){0==r.fp?valor="Consulte-nos":valor=FormatPrice(r.fp,FC$.Currency),r.fp!=r.op?sSale="<span style='background-color:#65984d;color:#ffffff;padding:3px;' class='SearchSaleFC'>&nbsp;"+sF$.fnFormatNumber((r.op-r.fp)/r.op*100)+"%&nbsp;off&nbsp;</span>&nbsp;&nbsp;":sSale="";var p=r.label.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+e.ui.autocomplete.escapeRegex(this.term)+")(?![^<>]*>)(?![^&;]+;)","gi"),"<strong>$1</strong>");return e("<li class='active prods-itens'></li>").data("item.autocomplete",r).append("<a><table width='100%'><tr height='75px'><td align=center class='SearchIMGFC'><span><img src='"+FC$.PathPrd+r.im+"' id='as-img-prod' style='vertical-align:middle;'></span></td><td width='55%'><div id='as-nomecat-prod'><span id='as-nome-prod'>"+p+"</span><br/><span id='as-cat-prod'>"+r.c+"</span></div></td><td width=25 class='as-sale'>"+sSale+"</td><td align='right' id='as-valor-prod' nowrap='nowrap'><span>"+valor+"</span></td></tr></table></a>").appendTo(a)}if(r.u){var c=r.label.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+e.ui.autocomplete.escapeRegex(this.term)+")(?![^<>]*>)(?![^&;]+;)","gi"),"<strong>$1</strong>");return e("<li class='active'></li>").data("item.autocomplete",r).append("<a><table width='100%'><tr valign='0'><td id='as-nome-pag'><a href='"+r.u+"'>"+c+"</td></tr></table></a>").appendTo(a)}if(r.s){var l=r.label.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+e.ui.autocomplete.escapeRegex(this.term)+")(?![^<>]*>)(?![^&;]+;)","gi"),"<strong>$1</strong>");return e("<li class='active'></li>").data("item.autocomplete",r).append("<a><table width='100%'><tr valign='0'><td width='65%' id='as-nome-not'>"+l+"</td><td align='right' id='as-data-not'>"+r.d+"</td></tr></table></a>").appendTo(a)}}});