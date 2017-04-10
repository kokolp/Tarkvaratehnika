<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ page import="java.io.* ,java.util.* ,java.sql.* "%>
<%@ page import="javax.servlet.http.* ,javax.servlet.* " %>
<%@ page session="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<%
String str = request.getParameter("uname");
Session.setAttribute("uname", str);

 %>
<!--redirect kliendulehel <a href="kliendileht.jsp"></a>-->
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
<div class="header">
        
        <div class="container">
            
            <div class="logo">
                <h1><a href="avaleht.html">Rahaplaneerija</a></h1>
            </div>
            
            <div class="nav">
                <ul>
                    <li><a href="avaleht.html">Pealeht</a></li>
                    <li><a href="saastmisekalkulaator.html">S??stmise kalkulaator</a></li>
                    <li><a href="laenukalkulaator.html">Laenukalkulaator</a></li>
                    <li><a href="meist.html">Meist</a></li>
                </ul>
            </div>
            
             <div class="row">
              <div class="container_login">
                <form action="Start" align="right"  method="post">
                    <div >
                      <label><b>Kasutajanimi</b></label>
                      <input id="uname" type="text" placeholder="Sisestage kasutajanimi" onblur="checkUser()" name="uname" required /><br>
                    
                      <label><b>Parool</b></label>
                      <input id="psw" type="password" onblur="checkUser()" placeholder="Sisestage parool" name="psw" required /><br>
                    
                    
                    
                      <input id="check" name="check" type="checkbox" value="1"  />J?ta mind meelde<br>
                         
                      
                    <button id="sisse" name="sisse" type="submit"  onclick="checkUser()">Logi sisse</button><br>
                    
                      <span class="psw">Unustasid <a href="newPass.jsp">parooli?</a></span>
                    <span class=""><a id="registreeri" href="reg.jsp">Registreeri</a></span>
					</div>
                </form>
              </div>
            </div>
        </div>
    </div>
    
    


    <div class="container">
    <div class="content_main">
        
      
       
    </div>
  
    </div>
   
</body>
</html>