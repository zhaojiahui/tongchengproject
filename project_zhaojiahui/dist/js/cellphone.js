define(["jquery"],function(c){return{createText:function(i){c(".phone").css({background:"#118855",color:"#fff"}),c(".c-tab div").click(function(){c(".c-tab div").css({background:"",color:"#000"}),c(this).css({background:"#118855",color:"#fff"})}),c(".all").click(function(){c(this).html(c('<img src="https://p.ssl.qhimg.com/t011f3f34c070585d54.jpg"><span style="font-size:12px;color:#000;">苹果 15年 MacBook Air</span>'))}),c(".c-cellphone-ico").show(),c(".phone").click(function(){c(".c-cellphone-ico").show(),c(".pcs").hide()}),c(".pc").click(function(){c(".pcs").show(),c(".c-cellphone-ico").hide()}),c(".icoClick1").nextAll(c("span")).hide(),c(".icoClick1").click(function(){c(".icoClick1").nextAll(c("span")).show()}),c(".icoClick2").click(function(){c(".icoClick1").nextAll(c("span")).hide()}),c.get("json/eval.json",function(i){function o(){for(var o in i)c(".eval").append(c('<div class="c-gray"><div class="odiv"><img src="'+i[o].imgSrc+'"><h5>'+i[o].evalName+'</h5></div><div class="odiv mid">'+i[o].pName+'</div><div class="odiv mid"><span class="star"></span>'+i[o].score+"</div><div>"+i[o].lang+"</div></div>"))}o(),c(".c-eval").click(function(){o()})})}}});