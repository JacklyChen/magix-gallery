define("mx-pagination/index",["magix","$","mx-dropdown/index"],(e,i,a)=>{e("mx-dropdown/index");var t=e("magix"),s=e("$"),p=[10,20,30,40,50,100];t.applyStyle("_B","._ec{color:#999}._ed{font-size:0}._ee,._ef{font-size:14px}._ef{margin:0 3px;text-decoration:none;border-radius:4px;text-align:center;min-width:35px;height:28px;line-height:28px;display:block}._eg{font-size:12px;top:-1px}._eh ._ef{color:#fff;background-color:#f96447}._ei ._ef,._ei ._ef:hover{color:#999;background:transparent;cursor:not-allowed}._ej{-webkit-transform:scaleX(-1);transform:scaleX(-1)}"),a.exports=t.View.extend({tmpl:{html:'<div mx-guid="g0" class="_ai _ec">1</div>',subs:[{keys:["simplify","mini"],path:'div[mx-guid="g0"]',tmpl:'<%if(!$$.simplify&&!$$.mini){%><span>当前第<b mx-guid="g1">2</b>条，共<b mx-guid="g2">3</b>条，每页展现</span><div mx-guid="g3" style="width:70px" class="_t _h" mx-change="__dG()" mx-view="mx-dropdown/index?list=<%@$$.sizes%>&selected=<%@$$.size%>"></div><span>条</span><%}%><ul mx-guid="g4" class="_ai _ac _ed">5</ul>',s:"1"},{keys:["startSpace","offsetStart","offsetEnd","endSpace"],path:'b[mx-guid="g1"]',tmpl:"<%for(var _=$$.startSpace;_--;){%>&nbsp;&nbsp;<%}%><%=$$.offsetStart%> - <%=$$.offsetEnd%><%for(var a=$$.endSpace;a--;){%>&nbsp;&nbsp;<%}%>",s:"2"},{keys:["total"],path:'b[mx-guid="g2"]',tmpl:"<%=$$.total%>",s:"3"},{keys:["sizes","size"],path:'div[mx-guid="g3"]',pKeys:["simplify","mini"],attr:'mx-view="mx-dropdown/index?list=<%@$$.sizes%>&selected=<%@$$.size%>"',attrs:[{n:"mx-view",v:1}]},{keys:["start","end","page","pages"],path:'ul[mx-guid="g4"]',pKeys:["simplify","mini"],tmpl:'<li class="_ac<%if($$.page==1){%> _ei<%}%>"><a class="_ef __ _eg" href="#" mx-click="<%if($$.page>1){%>__dF({page:<%=$$.page-1%>})<%}else{%>__D()<%}%>" title="&lt;">&#xe61e;</a></li><%if($$.mini){%><li mx-guid="g7" class="_ac _ee">8</li><%}else{if($$.start>1){%><li class="_ac"><a class="_ef" href="#" mx-click="__dF({page:1})" title="1">1</a></li><%}if($$.start>2){%><li class="_ei _ac"><a class="_ef" href="#" mx-click="__D()" title="...">...</a></li><%}for(var c=$$.start;c<=$$.end;c++){%><li class="_ac<%if(c==$$.page){%> _eh<%}%>"><a class="_ef" href="#" mx-click="__dF({page:<%=c%>})" title="<%=c%>"><%=c%></a></li><%}if($$.end+2<=$$.pages){%><li class="_ac _ei"><a class="_ef" href="#" mx-click="__D()" title="...">...</a></li><%}if($$.end<$$.pages){%><li class="_ac"><a mx-guid="g8" class="_ef" href="#" mx-click="__dF({page:<%=$$.pages%>})" title="<%=$$.pages%>">9</a></li><%}}%><li class="_ac<%if($$.page==$$.pages){%> _ei<%}%>"><a class="_ef __ _eg _ej" href="#" mx-click="<%if($$.page<$$.pages){%>__dF({page:<%=$$.page+1%>})<%}else{%>__D()<%}%>" title="&gt;">&#xe61e;</a></li>',s:"5"},{keys:["pageSpace"],path:'li[mx-guid="g7"]',pKeys:["simplify","mini","start","end","page","pages"],tmpl:"<%for(var b=$$.pageSpace;b--;){%>&nbsp;&nbsp;<%}%><%=$$.page%> / <%=$$.pages%>",s:"8"},{keys:["pages"],path:'a[mx-guid="g8"]',tmpl:"<%=$$.pages%>",s:"9",attr:'mx-click="__dF({page:<%=$$.pages%>})" title="<%=$$.pages%>"',attrs:[{n:"mx-click"},{n:"title",p:1}]}]},init:function(e){this.updater.set({sizes:p}),this.assign(e)},assign:function(e){var i=0|e.total||0,a=e.size||20,t=e.page||1;return this.updater.set({step:e.step||7,simplify:e.simplify+""=="true",mini:e.mini+""=="true",page:t,total:i,size:a}),!0},render:function(){var e=this.__dE();this.updater.digest(e)},__dE:function(){var e=this.updater.get(),i=0|e.page,a=Math.ceil((e.total||1)/e.size);i>a&&(i=a);var t,s=0|e.step,p=s/2|0,l=Math.max(1,i-p),n=Math.min(a,l+s-1);(l=Math.max(1,n-s+1))<=2&&n+(t=3-l)<a&&(n+=t),n+2>a&&l-(t=2-(a-n))>1&&(l-=t),3==l&&(l-=1),n+2==a&&(n+=1);var g=(i-1)*e.size+1,c=Math.min(e.total,i*e.size);return{pages:a,offsetStart:g,offsetEnd:c,startSpace:(e.total+"").length-(g+"").length,endSpace:(e.total+"").length-(c+"").length,pageSpace:(a+"").length-(i+"").length,page:i,start:l,end:n}},__u:function(){var e=s("#"+this.id),i=this.updater.get();e.trigger({type:"change",page:i.page,size:i.size})},"__dF<click>":function(e){e.preventDefault();this.updater.set(e.params),this.render(),this.__u()},"__dG<change>":function(e){e.stopPropagation();this.updater.set({page:1,size:e.item}),this.render(),this.__u()},"__D<click>":function(e){e.preventDefault()}})});