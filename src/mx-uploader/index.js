define("mx-uploader/index",["magix","$","../mx-runner/index"],(e,t,n)=>{var r=e("magix"),i=e("$"),a=e("../mx-runner/index");r.applyStyle("_Q","._fI{position:relative;overflow:hidden}._fJ{left:0;top:0;bottom:0;right:0;width:100%;height:100%;opacity:0;cursor:pointer;font-size:100px;filter:alpha(opacity=0)}._fK,._fJ{position:absolute}._fK{left:-999999px}");var o=r.Base.extend({destroy:function(){this.__dm=1}}),p=o.extend({__gl:function(e,t,n,o){var p=e.form,s=this,d=r.guid("up");if(!p){i("body").append('<div id="'+d+'_temp" class="_fK"><form target="'+d+'"></form></div>');(p=i("#"+d+"_temp").find("form")).append(e),p=p[0]}var f=0,l=2e3;if(e.files){l=0;for(var c=0;c<e.files.length;c++)l+=e.files[c].size;(l/=1e3)<2e3&&(l=2e3)}var m=1e3/l,u=function(){f<1&&(o(f),f+=m+20*Math.random()*m)};a.__bg(100,u),i('<iframe name="'+d+'" id="'+d+'" style="display:none;"></iframe>').insertAfter(p).on("load",function(e){if(a.__bh(u),!s.__dm){o(1);var t=e.target,r=i(t.contentWindow.document.body);r.find("script").remove();var p=i.trim(r.text());i(t).remove(),i("#"+d+"_temp").remove();try{n(null,new Function("return "+p)())}catch(e){n(e)}}}).on("error",function(e){a.__bh(u),s.__dm||(i("#"+d+"_temp").remove(),n(e))}),p.target=d,p.action=t.get("action"),p.method="POST",p.enctype="multipart/form-data",p.submit()}}),s=o.extend({__gl:function(e,t,n,r){for(var i=new FormData,a=this,o=e.files,p=0;p<o.length;p++)i.append(t.get("name"),o[p]);var s=new XMLHttpRequest;s.open("post",t.get("action"),!0),s.onload=function(){if(!a.__dm)try{n(null,new Function("return "+s.responseText)())}catch(e){n(e)}},s.onerror=function(e){a.__dm||(e.message="network error",n(e))},s.upload.onprogress=function(e){e.lengthComputable?r(e.loaded/e.total):r(0)},s.send(i)}});n.exports=r.View.extend({init:function(e){this.updater.set({name:e.name||"file",action:e.action||"",multiple:e.multiple,accept:e.accept});var t;t=window.FormData?s:p,this.capture("__gm",new t)},render:function(){var e="file_"+this.id,t=i("#"+e);t.length&&t.remove();var n=this.updater.get();i("#"+this.id).append(this.wrapEvent('<input id="'+e+'" type="file" class="_fJ" mx-change="__gn()" name="'+n.name+'" />')).addClass("_fI"),t=i("#"+e),n.multiple&&t.attr("multiple","multiple"),n.accept&&t.prop("accept",n.accept)},"__gn<change>":function(e){var t=i("#"+this.id),n=e.eventTarget.files,r=i.Event("start",{files:n});if(t.trigger(r),r.isDefaultPrevented())this.render();else{this.capture("__gm").__gl(e.target,this.updater,function(e,r){e?t.trigger({type:"error",error:e}):t.trigger({type:"success",files:n,response:r})},function(e){t.trigger({type:"progress",percent:e})}),this.render()}}})});