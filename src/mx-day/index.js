define("mx-day/index",["magix","$","mx-dropdown/index","./month"],(e,a,t)=>{e("mx-dropdown/index"),e("./month");var s=e("magix"),_=e("$");s.applyStyle("_j","._bI{padding:0;height:38.4px}._bJ{border:none}._bK{border-right:1px solid #e6e6e6}");var i=function(e,a){var t=a[e];if(!t){t=[];for(var s=12;s--;)t[s]="";a[e]=t}return t},d=[{key:"MON",day:"一"},{key:"TUE",day:"二"},{key:"WED",day:"三"},{key:"THU",day:"四"},{key:"FRI",day:"五"},{key:"SAT",day:"六"},{key:"SUN",day:"日"}];t.exports=s.View.extend({tmpl:{html:'<table class="_W"><thead><tr><th class="_bI _a_" width="120">周期设置</th><th mx-guid="g0" class="_bI _Z" colspan="31">1</th></tr><tr><th class="_bI _a_"><div mx-guid="g1" mx-change="__as()" style="width:100px" class="_g _s" mx-view="mx-dropdown/index?list=<%@$$.years%>&selected=<%!$eu($$.selectedYear)%>"></div></th><th colspan="31" class="_bI"><table class="_W _X"><tbody><tr><%for(var a=1;a<32;a++){%><td class="_bI _a_ _bJ<%if(a<30){%> _bK<%}%>"><%=(\'0\'+a).slice(-2)%></td><%}%></tr></tbody></table></th></tr></thead><tbody mx-guid="g3">4</tbody></table>',subs:[{keys:["weeks","viewId"],path:'th[mx-guid="g0"]',tmpl:'<%for(var _=0;_<$$.weeks.length;_++){%><label class="_h _t"><input mx-change="__au({key:\'<%=$eq($$.weeks[_].key)%>\'})" id="<%=$$.viewId%>_<%=$$.weeks[_].key%>" type="checkbox" class="_as">每周<%=$$.weeks[_].day%></label><%}%>',s:"1"},{keys:["years","selectedYear"],path:'div[mx-guid="g1"]',attr:'mx-view="mx-dropdown/index?list=<%@$$.years%>&selected=<%!$eu($$.selectedYear)%>"',attrs:[{n:"mx-view",v:1}]},{keys:["viewId","selectedYear","days"],path:'tbody[mx-guid="g3"]',tmpl:'<%for(var b=0;b<12;b++){%><tr><td class="_bI _ad _a_" mx-click="__ax({m:<%!b%>})"><%=(\'0\'+(b+1)).slice(-2)%></td><td class="_bI" colspan="31" id="months_<%=b%>_<%=$$.viewId%>" mx-change="__aw({m:<%!b%>})" mx-sync="__aw({m:<%!b%>})" mx-view="mx-day/month?year=<%!$eu($$.selectedYear)%>&month=<%!$eu(b)%>&selected=<%!$eu($$.days[b])%>"></td></tr><%}%>',s:"4"}]},init:function(e){this.assign(e);var a=_("#"+this.id);this.__h=a},assign:function(e){return this.__an=e.years,this.__ao=e.selectedYear||e.years[0],this.__ap=function(e){e=e||{};for(var a in e){var t=e[a];(t=((t=t||"")+"").split(",")).length>12&&(t=t.slice(0,12));for(var s=0;s<12;s++)t[s]||(t[s]="");e[a]=t}return e}(e.selectedDays),!0},render:function(){var e=this.__ao,a=i(e,this.__ap);this.updater.digest({viewId:this.id,weeks:d,years:this.__an,selectedYear:e,days:a})},__ar:function(){for(var e={},a=d.length;a--;)e[d[a].key]=1;this.__h.find('[mx-view*="mx-day/month"]').each(function(a,t){for(var s=t.vframe.invoke("__aq"),_=s.length;_--;)delete e[s[_]]});for(a=d.length;a--;){var t=d[a].key;_("#"+this.id+"_"+t).prop("checked",!!e[t])}},"__as<change>":function(e){e.stopPropagation();var a=i(e.value,this.__ap);this.updater.digest({days:a,selectedYear:this.__ao=e.value})},__u:function(){var e=this.__ap;this.__h.val(e).trigger({type:"change",days:e})},"__au<change>":function(e){e.stopPropagation();this.__h.find('[mx-view*="mx-day/month"]').each(function(a,t){var s=t.vframe;s&&s.invoke("__at",[e.params.key,e.eventTarget.checked])}),this.__u()},"__aw<change,sync>":function(e){e.stopPropagation();var a=this;i(a.__ao,a.__ap)[e.params.m]=e.days,e.ignoreSync||(clearTimeout(a.__av),a.__av=setTimeout(function(){a.__ar()},20)),"change"==e.type&&a.__u()},"__ax<click>":function(e){var a=e.params.m,t=_("#months_"+a+"_"+this.id),s=i(this.__ao,this.__ap)[a];s=new Array(s.length+1).join(s.indexOf("0")>-1?"1":0),t.invokeView("__p",[s]),this.__u()}})});