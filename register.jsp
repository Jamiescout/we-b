<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>迅捷电商</title>
    <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath }/css/style.css" />
    <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath }/css/public.css" />
</head>
<body>
<!--头部-->
<header class="publicHeader">
    <h1>迅捷电商系统</h1>
    <div class="publicHeaderR">
        <a href="${pageContext.request.contextPath }/logout.do">返回</a>
    </div>
</header>
<!--主体内容-->
<section class="publicBody">
    <input type="hidden" id="path" name="path" value="${pageContext.request.contextPath }"/>
    <input type="hidden" id="referer" name="referer" value="<%=request.getHeader("Referer")%>"/>

    <div class="right">
        <div class="providerAdd">
            <form id="userRegister" name="userRegister" action="${pageContext.request.contextPath}/register.do" method="post">
                <input type="hidden" name="method" value="register">
                <div>
                    <label for="userCode">账号：</label>
                    <input type="text" name="userCode" id="userCode">
                    <font color="red"></font>
                </div>
                <div>
                    <label for="userName">昵称：</label>
                    <input type="text" name="userName" id="userName" value="">
                    <font color="red"></font>
                </div>
                <div>
                    <label for="password">密码：</label>
                    <input type="password" name="password" id="password">
                    <font color="red"></font>
                </div>
                <div>
                    <label for="rpassword">确认密码：</label>
                    <input type="password" name="rpassword" id="rpassword">
                    <font color="red"></font>
                </div>
                <div>
                    <label >用户性别：</label>
                    <select name="gender" id="gender">
                        <option value="1" selected="selected">男</option>
                        <option value="2">女</option>
                    </select>
                </div>
                <div>
                    <label for="birthday">出生日期：</label>
                    <input type="text" Class="Wdate" id="birthday" name="birthday"
                           readonly="readonly" onclick="WdatePicker();">
                    <font color="red"></font>
                </div>
                <div>
                    <label for="phone">用户电话：</label>
                    <input type="text" name="phone" id="phone" value="">
                    <font color="red"></font>
                </div>
                <div>
                    <label for="address">用户地址：</label>
                    <input name="address" id="address"  value="">
                    <font color="red"></font>
                </div>
                <div>
                    <label for="email">邮箱：</label>
                    <input type="text" name="email" id="email">
                    <font color="red"></font>
                </div>
                <div class="providerAddBtn">
                    <input type="submit" value="注册" name="register" id="register" class="input-button">
                </div>
            </form>
        </div>
    </div>
</section>

<footer class="footer">迅捷电商系统</footer>
<script type="text/javascript" src="${pageContext.request.contextPath }/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/js/common.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/calendar/WdatePicker.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/js/register.js" ></script>
</body>
</html>