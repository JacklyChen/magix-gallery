define("mx-table/isticky",["magix","$"],(i,t,_)=>{"use strict";t.__esModule=!0;var s=i("magix"),f=i("$");_.exports=s.View.extend({init:function(){var i=this;i.__fc=f("#header").height()||50;var t=f("#inmain");t.length||(t=f(window),i.__fc=0);var _=function(){i.__fd(t)};i.on("destroy",function(){t.off("scroll",_)}),t.on("scroll",_),i.__fe=t},__fh:function(){var i=f("#"+this.id),t=i.find("thead"),_="ph_"+this.id,s=f("#"+_);s.length||(s=f("<caption />").insertBefore(t).attr("id",_)),t.css({position:"absolute",zIndex:1}),this.__ff=s,this.__h=i,this.__fg=t},__fl:function(){var i=f.now();if(!this.__fi||this.__fi+3e3<i){this.__fi=i;var t=this.__h,_=void 0,s=void 0;_=this.__fc?t.offset().top+this.__fe.scrollTop()-this.__fc:t.offset().top,s=t.height();var n=t.find("tfoot"),h=0;return n.length&&(h=n.height()),this.__fj={min:_,max:_+s-this.__fk-h}}return this.__fj},render:function(){var i=this;i.__fh(),i.__fm(),setTimeout(i.wrapAsync(function(){i.__fd(i.__fe)}),0)},__fm:function(){var i=this.__fg,t=this.__ff,_=i.height();_!=this.__fk&&(i.css({marginTop:-_}),t.css("height",_),this.__fk=_)},__fd:function(i){var t=i.scrollTop(),_=this.__fl(),s=this.__fn;t>_.min&&t<_.max?(this.__fn="s",this.__fg.css({top:t-_.min,marginTop:"auto"})):"i"!=s&&(this.__fn="i",this.__fg.css({marginTop:-this.__fk,position:"absolute",top:"auto"}))}})});