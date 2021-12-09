<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="utf-8" %>
<html>
<head>
    <meta charset="utf-8">
    <title>该页面不存在-404</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/all.css"/>
    <script src="js/_lib.js" type="text/javascript" charset="utf-8"></script>

</head>
<body>
<style>
    .notfind_wrapper{position: relative;}
    .notfind{ margin: 150px auto 0 auto; display: block;}
    .notfind_wrapper span{
        position: absolute;
        top: 36%;
        left: 42%;
        color: #999999;
        font-size: 18px;
    }
    .notfind_wrapper a{
        position: absolute;
        position: absolute;
        top: 43%;
        left: 47%;
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
        <img class="notfind" src="images/404.png" alt="">
        <span class="">很抱歉，您访问的页面去月球了~~</span>
        <a href="${pageContext.request.contextPath }/login.jsp">返回首页</a>
    </div>
</div>
