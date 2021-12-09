var userObj;

//点击删除按钮弹出删除框
function deleteName(obj){
	$.ajax({
		type:"GET",
		url:path+"/jsp/goods.do",
		data:{method:"del",id:obj.attr("goodsid")},
		dataType:"json",
		success:function(data){
			if(data.delResult === "true"){//删除成功 自动刷新
				cancleBtn();
				window.location.href=path+"/jsp/goods.do?method=query";
			}else if(data.delResult === "false"){//删除失败
				changeDLGContent("删除商品"+obj.attr("goodsname")+"失败");
			}
		},
		error:function(data){
			changeDLGContent("删除失败");
		}
	});
}

function add_car(obj){
	$.ajax({
		type:"GET",
		url:path+"/jsp/goods.do",
		data:{method:"add_car",id:obj.attr("goodsid")},
		dataType:"json",
		success:function(data){
			if(data.Result === "true"){//添加成功 自动刷新
				cancleBtn();
				openDLG();
			}else if(data.Result === "false"){//添加失败
				changeDLGContent("添加商品"+obj.attr("goodsname")+"失败");
			}
		},
		error:function(data){
			changeDLGContent("添加失败");
		}
	});
}

function openDLG(){
	$('.zhezhao_').css('display', 'block');
	$('#reportUse').fadeIn();
}

function openYesOrNoDLG(){
	$('.zhezhao').css('display', 'block');
	$('#removeUse').fadeIn();
}

function cancleBtn(){
	$('.zhezhao').css('display', 'none');
	$('#removeUse').fadeOut();
}
function ackBtn(){
	$('.zhezhao_').css('display', 'none');
	$('#reportUse').fadeOut();
}
function changeDLGContent(contentStr){
	var p = $(".removeMain").find("p");
	p.html(contentStr);
}

$(function(){
	$(".viewGoods").on("click",function(){
		var obj = $(this);
		window.location.href=path+"/jsp/goods.do?method=view&id="+ obj.attr("goodsid");
	});
	
	$(".modifyGoods").on("click",function(){
		var obj = $(this);
		window.location.href=path+"/jsp/goods.do?method=pre_modify&id="+ obj.attr("goodsid");
	});

	$(".addGoods").on("click",function(){
		userObj = $(this);
		changeDLGContent("确定要添加商品【"+userObj.attr("name")+"】到购物车吗？");
		openYesOrNoDLG();
	});

	$('#no').click(function () {
		cancleBtn();
	});
	
	$('#yes').click(function () {
		deleteName(userObj);
	});

	$('#y').click(function () {
		add_car(userObj);
	});

	$('#x').click(function () {
		ackBtn();
	});

	$(".deleteGoods").on("click",function(){
		userObj = $(this);
		changeDLGContent("确定要删除商品【"+userObj.attr("name")+"】吗？");
		openYesOrNoDLG();
	});

});