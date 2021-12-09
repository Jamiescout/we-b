
function deleteGoods(obj){
	$.ajax({
		type:"GET",
		url:path+"/jsp/goods.do",
		data:{method:"del_car",id:obj.attr("goodsid")},
		dataType:"json",
		success:function(data){
			if(data.Result === "true"){//删除成功 自动刷新购物车页面
				window.location.href=path+"/jsp/goods.do?method=car_query";
			}
		},
		error:function(data){
			;
		}
	});
}

function buy_all(){
	$.ajax({
		type:"GET",
		url:path+"/jsp/goods.do",
		data:{method:"buy_car"},
		dataType:"json",
		success:function(data){
			if(data.result === "true"){//购买成功 跳到info页面
				$.ajax({
					type:"GET",
					url:path+"/jsp/goods.do",
					data:{method:"clear_car"},
					dataType:"json",
					success:function(data){
						if(data.Result === "true"){//清空成功
							window.location.href=path+"/jsp/info.jsp";
						}
					},
					error:function(data){
						;
					}
				});
			}
			else{
				changeDLGContent("下单失败!商品库存不足或已下架");
				openYesOrNoDLG();
			}
		},
		error:function(data){
			;
		}
	});
}

function clear_car(){
	$.ajax({
		type:"GET",
		url:path+"/jsp/goods.do",
		data:{method:"clear_car"},
		dataType:"json",
		success:function(data){
			if(data.Result === "true"){//清空成功 刷新购物车页面
				window.location.href=path+"/jsp/goods.do?method=car_query";
			}
		},
		error:function(data){
			;
		}
	});
}

function update_count(obj){
	$.ajax({
		type:"GET",
		url:path+"/jsp/goods.do",
		data:{method:"update_count",val:obj.attr('value'),id:obj.attr('goodsid')},
		dataType:"json",
		success:function(data){
			if(data.Result === "true"){
				$.ajax({
					type:"GET",
					url:path+"/jsp/goods.do",
					data:{method:"update_all"},
					dataType:"json",
					success:function(data){
						if(data.result === "true"){
							document.getElementById('all').innerHTML=data.all_price;
						}
						else{}
					},
					error:function(data){}
				});
			}
			else if(data.Result==="false"){
				changeDLGContent("商品数量修改失败!");
				openYesOrNoDLG();
			}
			else{//修改的数目<=0 需要刷新页面
				window.location.href=path+"/jsp/goods.do?method=car_query";
			}
		},
		error:function(data){}
	});
}

function changeDLGContent(contentStr){
	var p = $(".removeMain").find("p");
	p.html(contentStr);
}
function openYesOrNoDLG(){
	$('.zhezhao').css('display', 'block');
	$('#removeUse').fadeIn();
}
function cancleBtn(){
	$('.zhezhao').css('display', 'none');
	$('#removeUse').fadeOut();
}

$(function(){
	$(".viewGoods").on("click",function(){
		var obj = $(this);
		window.location.href=path+"/jsp/goods.do?method=view&id="+ obj.attr("goodsid");
	});

	$(".deleteGoods").on("click",function(){
		var obj = $(this);
		deleteGoods(obj);
	});

	$("#buybtn").click(function (){
		buy_all();
	})

	$("#clearbtn").click(function (){
		clear_car();
	})

	$(".count").on("blur",function (){
		var obj=$(this);
		update_count(obj);
	})

	$("#yes").click(function (){
		cancleBtn();
	})

});