<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ page import="java.io.* ,java.util.* ,java.sql.* "%>
<%@ page import="javax.servlet.http.* ,javax.servlet.* " %>
<%@ page session="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!--<%@ taglib prefix="sql" uri="http://java.sun.com /jsp/jstl/sql" %>-->
<%String value = (String)session.getAttribute("uname");
 %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    
<!--For the web site to work on all devices and screen resolutions -->
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" type="text/css" href="styles.css">

    <title>Rahaplaneerija</title>
   
</head>
<body>


<p>${LoginProcess.uname}</p>
<div class="header">
        
        <div class="container">
            
            <div class="logo">
                <h1><a href="avaleht.html">Rahaplaneerija</a></h1>
            </div>
            
            <div class="nav">
                <ul>
                    <li><a href="avaleht.html">Pealeht</a></li>
                    <li><a href="saastmisekalkulaator.jsp">S??stmise kalkulaator</a></li>
                    <li><a href="laenukalkulaator.html">Laenukalkulaator</a></li>
                    <li><a href="meist.html">Meist</a></li>
                </ul>
            </div>
            
             <div class="row">
              Tere <%= session.getAttribute("uname")%><br>
              <%= value%> <br> Valja-><a href="avaleht.html">Meist</a>
            </div>
        </div>
    </div>
    
    <div class="container">
    <div class="content_main">
     
    </div>
  
    </div>
</body>
</html>