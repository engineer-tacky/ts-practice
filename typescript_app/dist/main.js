(()=>{var t,e;function a(e){t.innerHTML=e}function o(){var t=e.value;d.add({message:t,date:new Date}),d.save(),d.load(),a(d.getHtml())}function n(){d.data=[],d.save(),d.load(),e.value="",a(d.getHtml())}var d=new(function(){function t(){this.data=[]}return t.prototype.add=function(t){this.data.unshift(t)},t.prototype.save=function(){localStorage.setItem("memo_data",JSON.stringify(this.data))},t.prototype.load=function(){var t=JSON.parse(localStorage.getItem("memo_data"));this.data=t||[]},t.prototype.getHtml=function(){for(var t="<thead><th>memo</th><th>date</th></thead><tbody>",e=0,a=this.data;e<a.length;e++){var o=a[e];t+="<tr><td>"+o.message+"</td><td>"+o.date.toLocaleString()+"</td></tr>"}return t+"</tbody>"},t}());window.addEventListener("load",(function(){t=document.querySelector("#table"),e=document.querySelector("#message"),document.querySelector("#btn").addEventListener("click",o),document.querySelector("#initial").addEventListener("click",n),d.load(),a(d.getHtml())}))})();