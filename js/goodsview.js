var goodsid=document.getElementById('goodsid').getAttribute('value')
var name=document.getElementById('name').getAttribute('value')
var count=document.getElementById('count').getAttribute('value')
var address=document.getElementById('address').getAttribute('value')
var buy_count=document.getElementById('buy_count').getAttribute('value')

$(function(){
	$("#buy").on("click",function(){
		changeDLGContent("确定要购买商品吗？");
		openYesOrNoDLG();
	});

	$("#add_bucket").on("click",function(){
		add_car(document.getElementById("goodsid").getAttribute('value'));
	});

	$('#no').click(function () {
		cancleBtn();
	});

	$('#yes').click(function () {
		buyGoods();
	});
});

//点击购买按钮
function buyGoods(){
	$.ajax({
		type:"GET",
		url:path+"/jsp/goods.do",
		data:{method:"buy",goodsid:goodsid,name:name,count:count,address:address,buy_count:buy_count},
		dataType:"json",
		success:function(data){
			if(data.result === "true"){
				cancleBtn();
				window.location.href=path+"/jsp/info.jsp";
			}else if(data.result === "false"){
				changeDLGContent("库存不足，购买失败");
			}
		},
		error:function(data){
			changeDLGContent("发生未知错误，购买失败");
		}
	});
}

function add_car(id){
	$.ajax({
		type:"GET",
		url:path+"/jsp/goods.do",
		data:{method:"add_car",id:id},
		dataType:"json",
		success:function(data){
			if(data.Result === "true"){
				changeDLGContent_("商品已添加进购物车");
				openYesOrNoDLG_();
			}else if(data.Result === "false"){
				changeDLGContent_("添加商品失败");
				openYesOrNoDLG_();
			}
		},
		error:function(data){
			changeDLGContent("添加失败");
		}
	});
}

function openYesOrNoDLG(){
	$('.zhezhao').css('display', 'block');
	$('#removeUse').fadeIn();
}
function cancleBtn(){
	$('.zhezhao').css('display', 'none');
	$('#removeUse').fadeOut();
}
function changeDLGContent(contentStr){
	var p = $(".removeMain").find("p");
	p.html(contentStr);
}

function openYesOrNoDLG_(){
	$('.zhezhao_').css('display', 'block');
	$('#removeUse_').fadeIn();

	window.setTimeout(function (){
		$('.zhezhao_').css('display', 'none');
		$('#removeUse_').fadeOut();
	},1000)
}
function changeDLGContent_(contentStr){
	var p = $(".removeMain_").find("p");
	p.html(contentStr);
}