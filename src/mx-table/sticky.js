define("mx-table/sticky",["magix","$"],(t,i,_)=>{var f=t("magix"),s=t("$");_.exports=f.View.extend({init:function(t){var i=this;i.__fc=s("#header").height()||50;var _=s("#"+i.id).parents("_ca"),f=s("#inmain");_.length||f.length||(f=s(window),i.__fc=0);var h=_.parent(),n=function(){i.__fd(h)},e=function(){i.__fd(f)};i.on("destroy",function(){h.off("scroll",n),f.off("scroll",e)}),h.on("scroll",n),f.on("scroll",e),i.__fB=h,i.__fC=_,i.__fe=f,i.__fD=t.zIndex},__fh:function(){var t=s("#"+this.id).find("table"),i=t.find("thead"),_=i.find("tr").last(),f=t.find("tbody>tr").eq(0),h="ph_"+this.id,n=s("#"+h),e=_.find("th"),o=f.find("td");o.length&&o.length==e.length&&(n.length||(n=s("<caption />").insertBefore(i).attr("id",h)),i.css({marginLeft:-1,border:"1px solid "+t.css("border-top-color"),position:"absolute",background:"#fff",zIndex:this.__fD||1})),this.__fE="abs",this.__ff=n,this.__h=t,this.__fg=i,this.__fF=f,this.__fG=o,this.__fH=e},__fl:function(){var t=s.now();if(!this.__fi||this.__fi+3e3<t){this.__fi=t;var i=this.__h,_=void 0,f=void 0;_=this.__fC.length?i.position().top+parseInt(this.__fC.css("top"),10):this.__fc?i.offset().top+this.__fe.scrollTop()-this.__fc:i.offset().top,f=i.height();var h=i.find("tfoot"),n=0;return h.length&&(n=h.height()),this.__fj={min:_,max:_+f-this.__fk-n}}return this.__fj},render:function(){this.__fh(),this.__fI(),this.__fm(),this.__fd(this.__fB)},__fm:function(){var t=this.__fg,i=this.__ff,_=t.height();_!=this.__fk&&("abs"==this.__fE&&t.css({marginTop:-_}),i.css("height",_),this.__fk=_)},__fI:function(){this.__fg.width(this.__fF.width()-1);var t,i=this.__fG,_=this.__fH;i.length>0&&i.length==_.length&&(i.each(function(i,f){f=s(f);var h=(t=s(_[i])).attr("width");h?(t.removeAttr("width"),f.attr("width",h)):(h=t.attr("style"))&&(t.removeAttr("style"),f.attr("style",h))}),i.each(function(i,f){f=s(f);(t=s(_[i])).children("div").length||t.wrapInner("<div/>"),t.children("div").width(f.width())}))},__fd:function(t){t||(t=this.__fe);var i=t.scrollTop(),_=this.__fl();if(i>_.min&&i<_.max){if("fixed"!=this.__fE){var f=this.__fB;this.__fE="fixed",this.__fg.css({position:"fixed",top:f&&f.length?0:this.__fc,marginTop:"auto"})}}else"abs"!=this.__fE&&(this.__fE="abs",this.__fg.css({marginTop:-this.__fk,position:"absolute",top:"auto"}))},"$win<resize>":function(){this.__fI(),this.__fm()},"$doc<htmlchanged,navslidend>":function(t){var i=this;(f.inside(t.node,i.id)||t.vId==i.owner.pId||"navslidend"==t.type)&&(clearTimeout(i.__fA),i.__fA=setTimeout(function(){i.__fh(),i.__fI(),i.__fm(),delete i.__fi,i.__fd(i.__fB)},0))}})});