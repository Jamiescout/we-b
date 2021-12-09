<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="utf-8" %>
<html>
<head>
    <meta charset="utf-8">
    <title>信息提示</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/all.css"/>
    <script src="js/_lib.js" type="text/javascript" charset="utf-8"></script>

</head>
<body>
<style>
    .notfind_wrapper{position: relative;}
    .notfind_wrapper span{
        position: absolute;
        top: 200px;
        left: 40%;
        color: #999999;
        font-size: 18px;
    }
    .notfind_wrapper a{
        position: absolute;
        margin-top: 60px;
        top: 200px;
        left: 48%;
        border: 2px solid #94BFF3;
        color: #94BFF3;
        border-radius: 15px;
        padding: 2px 14px;
        font-size: 15px;
    }
</style>

<div id="pb_position"></div>
<div class="container">
    <div class="notfind_wrapper">
        <span>${message}</span>
        <a href="${pageContext.request.contextPath }/login.jsp">返回登陆页面</a>
    </div>
</div>
