var goodsname = null;
var count = null;
var address = null;
var info = null;
var price=null;
var saletime=null;
var saveBtn = null;
var backBtn = null;

$(function(){
	price=$("#price");
	goodsname=$("#goodsname")
	count=$("#count")
	saveBtn = $("#save");
	backBtn = $("#back");
	address=$("#address");
	saletime=$("#saletime");
	info=$("#info");

	goodsname.on("focus",function(){
		validateTip(goodsname.next(),{"color":"#666666"},"* 商品名必须是1到15的字符",false);
	}).on("blur",function(){
		if(goodsname.val() != null && goodsname.val().length > 1
				&& goodsname.val().length < 15){
			validateTip(goodsname.next(),{"color":"green"},imgYes,true);
		}else{
			validateTip(goodsname.next(),{"color":"red"},imgNo+" 输入不合规范，请重新输入",false);
		}
		
	});

	count.on("focus",function(){
		validateTip(count.next(),{"color":"#666666"},"* 商品上架的数量",false);
	}).on("blur",function(){
		if(count.val() != null){
			validateTip(count.next(),{"color":"green"},imgYes,true);
		}else{
			validateTip(count.next(),{"color":"red"},imgNo + " 请输入商品数量",false);
		}
	});

	price.on("focus",function(){
		validateTip(price.next(),{"color":"#666666"},"* 商品单价",false);
	}).on("blur",function(){
		if(price.val() != null){
			validateTip(price.next(),{"color":"green"},imgYes,true);
		}else{
			validateTip(price.next(),{"color":"red"},imgNo + " 请输入商品单价",false);
		}
	});

	info.on("focus",function(){
		validateTip(info.next(),{"color":"#666666"},"* 商品描述必须是长度1到50的字符",false);
	}).on("blur",function(){
		if(info.val() != null && info.val().length > 1 && info.val().length < 50){
			validateTip(info.next(),{"color":"green"},imgYes,true);
		}else{
			validateTip(info.next(),{"color":"red"},imgNo + " 输入不合规范，请重新输入",false);
		}
	});

	address.on("focus",function(){
		validateTip(address.next(),{"color":"#666666"},"* 发货地址必须是长度1到30的字符",false);
	}).on("blur",function(){
		if(address.val() != null && address.val().length > 1 && address.val().length < 30){
			validateTip(address.next(),{"color":"green"},imgYes,true);
		}else{
			validateTip(address.next(),{"color":"red"},imgNo+" 输入不合规范，请重新输入",false);
		}
	});

	saletime.on("focus",function(){
		validateTip(saletime.next(),{"color":"#666666"},"* 点击输入框 选择日期",false);
	}).on("blur",function(){
		if(saletime.val() != null && saletime.val() !== ""){
			validateTip(saletime.next(),{"color":"green"},imgYes,true);
		}else{
			validateTip(saletime.next(),{"color":"red"},imgNo + " 选择的日期不正确,请重新输入",false);
		}
	});
	
	saveBtn.on("click",function(){
		goodsname.blur();
		count.blur();
		info.blur();
		saletime.blur();
		address.blur();
		price.blur();
		if(goodsname.attr("validateStatus") === "true" && count.attr("validateStatus") === "true"
			&& info.attr("validateStatus") === "true" && saletime.attr("validateStatus") === "true"
			&& address.attr("validateStatus")==="true" && price.attr("validateStatus")==="true"){
			if(confirm("是否确认要提交数据？")){
				$("#goodsForm").submit();
			}
		}
	});
	
	backBtn.on("click",function(){
		if(referer !== undefined
			&& null != referer 
			&& "" !== referer
			&& "null" !== referer
			&& referer.length > 4){
		 window.location.href = referer;
		}else{
			history.back(-1);
		}
	});
});