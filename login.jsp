<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>迅捷电商 - 系统登陆</title>
    <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath }/css/style.css" />
    <script type="text/javascript" charset="UTF-8"></script>
</head>
<body class="login_bg">
<section class="loginBox">
    <header class="loginHeader">
        <h1>迅捷电商系统</h1>
    </header>
    <section class="loginCont">
        <form class="loginForm" action="${pageContext.request.contextPath }/login.do"  name="actionForm" id="actionForm"  method="post" >
            <div class="info">${error}</div>
            <div class="inputbox">
                <label for="userCode">账号：</label>
                <input type="text" class="input-text" id="userCode" name="userCode" placeholder="请输入账号" required/>
            </div>
            <div class="inputbox">
                <label for="userPassword">密码：</label>
                <input type="password" id="userPassword" name="userPassword" placeholder="请输入密码" required/>
            </div>
            <div class="subBtn">
                <input type="submit" value="登录"/>
                <input type="reset" value="重置"/>
            </div>
            <a href="register.jsp" style="position: absolute;left: 920px;top: 410px">立即注册</a>
        </form>
    </section>
</section>
</body>
</html>
