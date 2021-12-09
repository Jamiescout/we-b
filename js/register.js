var userCode = null;
var goodsname = null;
var password = null;
var rpassword = null;
var phone = null;
var birthday = null;
var registerBTN = null;
var email =null;
var address =null;

$(function (){
  userCode = $("#userCode");
  goodsname = $("#userName");
  password = $("#password");
  rpassword = $("#rpassword");
  registerBTN = $("#register");
  phone = $("#phone");
  birthday = $("#birthday");
  email=$("#email");
  address=$("#address");

  userCode.next().html("*");
  goodsname.next().html("*");
  password.next().html("*");
  rpassword.next().html("*");
  phone.next().html("*");
  birthday.next().html("*");
  email.next().html("*")
  address.next().html("*");

  userCode.bind("blur",function(){
    //ajax验证--userCode是否已存在
    //user.do?method=ucexist&userCode=*
    $.ajax({
      type:"GET",//请求类型
      url:path+"/register.do",//请求的url
      data:{method:"ucexist",userCode:userCode.val()},//请求参数
      dataType:"json",//ajax接口（请求url）返回的数据类型
      success:function(data){//data：返回数据（json对象）
        if(data.userCode == "exist"){//账号已存在，错误提示
          validateTip(userCode.next(),{"color":"red"},imgNo+ " 该用户账号已存在",false);
        }else if(data.userCode.length<6){
          validateTip(userCode.next(),{"color":"red"},imgNo+ " 用户账号长度必须大于5",false);
        }
        else{//账号可用，正确提示
          validateTip(userCode.next(),{"color":"green"},imgYes+" 该账号可以使用",true);
        }
      },
      error:function(data){//当访问时候，404，500 等非200的错误状态码
        validateTip(userCode.next(),{"color":"red"},imgNo+" 您访问的页面不存在",false);
      }
    });
  }).bind("focus",function(){
    //显示友情提示
    validateTip(userCode.next(),{"color":"#666666"},"* 您登录系统的账号",false);
  }).focus();

  goodsname.bind("focus",function(){
    validateTip(goodsname.next(),{"color":"#666666"},"* 用户名长度必须是大于1小于10的字符",false);
  }).bind("blur",function(){
    if(goodsname.val() != null && goodsname.val().length > 1
        && goodsname.val().length < 10){
      validateTip(goodsname.next(),{"color":"green"},imgYes,true);
    }else{
      validateTip(goodsname.next(),{"color":"red"},imgNo+" 用户名不合规范，请重新输入",false);
    }
  });

  password.on("focus",function(){
    validateTip(password.next(),{"color":"#666666"},"* 密码长度必须大于6且小于20",false);
  }).on("blur",function(){
    if(password.val() != null && password.val().length >= 6
        && password.val().length < 20 ){
      validateTip(password.next(),{"color":"green"},imgYes,true);
    }else{
      validateTip(password.next(),{"color":"red"},imgNo + " 密码输入不合规范，请重新输入",false);
    }
  });

  rpassword.on("focus",function(){
    validateTip(rpassword.next(),{"color":"#666666"},"* 输入的密码与上面不一致",false);
  }).on("blur",function(){
    if(rpassword.val() != null && rpassword.val().length >= 6
        && rpassword.val().length < 20 && password.val() == rpassword.val()){
      validateTip(rpassword.next(),{"color":"green"},imgYes,true);
    }else{
      validateTip(rpassword.next(),{"color":"red"},imgNo + " 两次密码输入不一致，请重新输入",false);
    }
  });

  birthday.bind("focus",function(){
    validateTip(birthday.next(),{"color":"#666666"},"* 点击输入框，选择日期",false);
  }).bind("blur",function(){
    if(birthday.val() != null && birthday.val() != ""){
      validateTip(birthday.next(),{"color":"green"},imgYes,true);
    }else{
      validateTip(birthday.next(),{"color":"red"},imgNo + " 选择的日期不正确,请重新输入",false);
    }
  });

  phone.bind("focus",function(){
    validateTip(phone.next(),{"color":"#666666"},"* 请输入手机号",false);
  }).bind("blur",function(){
    var patrn=/^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
    if(phone.val().match(patrn)){
      validateTip(phone.next(),{"color":"green"},imgYes,true);
    }else{
      validateTip(phone.next(),{"color":"red"},imgNo + " 您输入的手机号格式不正确",false);
    }
  });

  address.bind("focus",function(){
    validateTip(address.next(),{"color":"#666666"},"* 地址长度必须小于30",false);
  }).bind("blur",function(){
    if(address.val() != null && address.val().length >= 0
        && address.val().length < 30 ){
      validateTip(address.next(),{"color":"green"},imgYes,true);
    }else{
      validateTip(address.next(),{"color":"red"},imgNo + " 地址不合规范，请重新输入",false);
    }
  });

  email.bind("focus",function(){
    validateTip(email.next(),{"color":"#666666"},"* 请输入邮箱",false);
  }).bind("blur",function(){
    if(email.val().match("[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+")){
      validateTip(email.next(),{"color":"green"},imgYes,true);
    }else{
      validateTip(email.next(),{"color":"red"},imgNo + " 您输入的邮箱格式不正确",false);
    }
  });

  registerBTN.bind("click",function(){
    if(userCode.attr("validateStatus") != "true"){
      userCode.blur();
    }else if(goodsname.attr("validateStatus") != "true"){
      goodsname.blur();
    }else if(password.attr("validateStatus") != "true"){
      password.blur();
    }else if(rpassword.attr("validateStatus") != "true"){
      rpassword.blur();
    }else if(birthday.attr("validateStatus") != "true"){
      birthday.blur();
    }else if(phone.attr("validateStatus") != "true"){
      phone.blur();
    }else if(email.attr("validateStatus")!="true"){
      email.blur();
    } else if(address.attr("validateStatus")!="true"){
      address.blur();
    }
    else{
      if(confirm("是否确认注册？")){
        $("#userRegister").submit();
      }
    }
  });

})
