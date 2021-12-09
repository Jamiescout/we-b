var goodsname = null;
var count=null;
var info=null;
var price=null;
var address=null;
var addBtn = null;
var backBtn = null;
var img=null;

$(function(){
	price=$("#price");
	goodsname = $("#goodsname");
	count = $("#count");
	info = $("#info");
	address = $("#address");
	addBtn = $("#add");
	backBtn = $("#back");
	img=$("#image");

	goodsname.next().html("*");
	count.next().html("*");
	info.next().html("*");
	address.next().html("*");
	price.next().html("*");
	img.next().html("* 仅支持png格式图片,建议尺寸:320*320");
	
	goodsname.bind("focus",function(){
		validateTip(goodsname.next(),{"color":"#666666"},"* 商品名必须是长度1到15的字符",false);
	}).bind("blur",function(){
		if(goodsname.val() != null && goodsname.val().length > 1
				&& goodsname.val().length < 15){
			validateTip(goodsname.next(),{"color":"green"},imgYes,true);
		}else{
			validateTip(goodsname.next(),{"color":"red"},imgNo+" 输入不合规范，请重新输入",false);
		}
	});

	count.bind("focus",function(){
		validateTip(count.next(),{"color":"#666666"},"* 商品上架的数量",false);
	}).bind("blur",function(){
		if(count.val() != null ){
			validateTip(count.next(),{"color":"green"},imgYes,true);
		}else{
			validateTip(count.next(),{"color":"red"},imgNo+" 请输入商品数量",false);
		}
	});

	price.bind("focus",function(){
		validateTip(price.next(),{"color":"#666666"},"* 商品的单价",false);
	}).bind("blur",function(){
		if(price.val() != null ){
			validateTip(price.next(),{"color":"green"},imgYes,true);
		}else{
			validateTip(price.next(),{"color":"red"},imgNo+" 请输入商品单价",false);
		}
	});

	info.bind("focus",function(){
		validateTip(info.next(),{"color":"#666666"},"* 商品描述必须是长度1到50的字符",false);
	}).bind("blur",function(){
		if(info.val() != null && info.val().length > 1 && info.val().length < 50){
			validateTip(info.next(),{"color":"green"},imgYes,true);
		}else{
			validateTip(info.next(),{"color":"red"},imgNo+" 输入不合规范，请重新输入",false);
		}
	});

	address.bind("focus",function(){
		validateTip(address.next(),{"color":"#666666"},"* 发货地址必须是长度1到30的字符",false);
	}).bind("blur",function(){
		if(address.val() != null && address.val().length > 1 && address.val().length < 30){
			validateTip(address.next(),{"color":"green"},imgYes,true);
		}else{
			validateTip(address.next(),{"color":"red"},imgNo+" 输入不合规范，请重新输入",false);
		}
	});
	
	addBtn.bind("click",function(){
		if(goodsname.attr("validateStatus") != "true"){
			goodsname.blur();
		}else if(count.attr("validateStatus") != "true"){
			count.blur();
		}else if(info.attr("validateStatus") != "true"){
			info.blur();
		}else if(address.attr("validateStatus") != "true"){
			address.blur();
		}else if(price.attr("validateStatus") != "true"){
			price.blur();
		}
		else{
			if(confirm("是否确认添加商品")){
				$("#goodsForm").submit();
			}
		}
	});
	
	backBtn.on("click",function(){
		if(referer != undefined && "" != referer && "null" != referer && referer.length > 4){
		 window.location.href = referer;
		}else{
			history.back(-1);
		}
	});
});