define("mx-number/index",["magix","$"],(_,t,e)=>{var i=_("magix"),s=_("$");i.applyStyle("_A",'._dX{padding:0;position:relative}._dY{width:100%;border:none;height:100%;padding:6px 9px;background-color:transparent;color:#333;display:block}._dZ,._e_{width:25px;height:50%;position:absolute;right:1px;border:2px solid #fff;border-radius:4px;cursor:pointer}._dZ:hover,._e_:hover{background-color:#f0f0f0}._e_{top:1px}._dZ{bottom:1px}._ea:after{width:0;height:0;position:absolute;top:0;right:0;bottom:0;left:0;border-left:5px solid transparent;border-right:5px solid transparent;content:"";display:block;margin:auto}._dZ:after{border-top:5px solid #ccc}._e_:after{border-bottom:5px solid #ccc}._eb{background-color:#fbfbfb}._eb:hover{border-color:#e6e6e6}._eb ._dZ,._eb ._e_{cursor:not-allowed;border-color:transparent}._eb ._dZ:hover,._eb ._e_:hover{background-color:transparent}._eb ._e_:hover:after{border-bottom-color:#ccc}._eb ._dZ:hover:after{border-top-color:#ccc}'),e.exports=i.View.extend({tmpl:{html:'<input mx-guid="g0" class="_dY" mx-focusin="__dw()" mx-focusout="__dy()" value="<%=$$.value%>" mx-change="__dv()" mx-keydown="__dD()" <%if($$.disabled){%> disabled<%}%> autocomplete="off"><span class="_e_ _ea _aj" mx-click="__ds({i:true})" mx-mousedown="__dC({i:true})" mx-contextmenu="__D()"></span><span class="_dZ _ea _aj" mx-click="__ds()" mx-mousedown="__dC()" mx-contextmenu="__D()"></span>',subs:[{keys:["value","disabled"],path:'input[mx-guid="g0"]',attr:'value="<%=$$.value%>" mx-change="__dv()" mx-keydown="__dD()" <%if($$.disabled){%> disabled<%}%>',attrs:[{n:"value",q:1,p:1},{n:"mx-change"},{n:"mx-keydown"},{n:"disabled",b:1,p:1}]}]},init:function(_){this.assign(_);var t=s("#"+this.id);t.addClass("_ap _dX"),this.__h=t},assign:function(_){this.__cm=+_.value||"",this.__do=+_.step||1,this.__bZ=_.disabled+""=="true",this.__F=i.has(_,"max")?+_.max:Number.MAX_VALUE,this.__E=i.has(_,"min")?+_.min:-Number.MAX_VALUE,this.__dp=+_.ratio||10;var t=this.__do+"",e=t.indexOf(".");return e=e>=0?t.slice(e+1).length:0,this.__dq=e,!0},render:function(){this.__h[this.__bZ?"addClass":"removeClass"]("_eb"),this.updater.digest({value:this.__cm,disabled:this.__bZ}),this.__dr=this.__h.find("input")},val:function(_){if((_=+_)||0===_){var t=this.__F,e=this.__E,i=this.__do;_>t?_=t:_<e&&(_=e),_!==this.__cm&&(_=(_=Math.round(_/i)*i).toFixed(this.__dq),this.__dr.val(_),_=+_,this.__h.prop("value",this.__cm=_).trigger({type:"input",value:_}))}return this.__cm},__ds:function(_,t){var e=this.__cm;""===e&&(e=0);var i=this.__do,s=e;t&&(i*=this.__dp),_?s+=i:s-=i,this.val(s)},__dt:function(){var _=this.__dr[0];_&&(_.focus(),_.selectionStart=_.selectionEnd=_.value.length)},__du:function(){this.__h.addClass("_ar"),i.has(this,"__cd")||(this.__cd=this.__cm)},"__dv<change>":function(_){_.stopPropagation();var t=_.eventTarget,e=t.value;if(""===e)return t.value=this.__cm="",void this.__h.prop("value","");var i=Number(e);(i||0===i)&&this.val(i),i=(i=this.__cm)||0===i?i.toFixed(this.__dq):"",t.value=i},"__dw<focusin>":function(){this.__du()},"__dy<focusout>":function(){this.__dx||(this.__h.removeClass("_ar"),this.__cd!=this.__cm&&this.__h.trigger({type:"change",value:this.__cm}),delete this.__cd)},"__ds<click>":function(_){this.__bZ||this.__dz||(this.__ds(_.params.i,_.shiftKey),this.__dt())},"__dC<mousedown>":function(_){var t=this;t.__bZ||(t.__dx=!0,t.__du(),t.__dA=setTimeout(t.wrapAsync(function(){t.__dB=setInterval(t.wrapAsync(function(){t.__dz=!0,t.__ds(_.params.i),t.__dt()}),50)}),300))},"__dD<keydown>":function(_){if(38==_.keyCode||40==_.keyCode){_.preventDefault();if(!this.__bZ){var t=_.eventTarget.value;if(""===t)this.__cm="";else{var e=Number(t);(e||0===e)&&e!=this.__cm&&(this.__cm=e)}this.__ds(38==_.keyCode,_.shiftKey)}}},"__D<contextmenu>":function(_){_.preventDefault()},"$doc<mouseup>":function(){var _=this;clearTimeout(_.__dA),clearInterval(_.__dB),delete _.__dx,setTimeout(_.wrapAsync(function(){delete _.__dz}),0)}})});