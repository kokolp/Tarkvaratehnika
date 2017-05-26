<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ page import="java.io.* ,java.util.* ,java.sql.* "%>
<%@ page import="javax.servlet.http.* ,javax.servlet.* " %>
<%@ page session="true"%>
<!--<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>-->
<!--<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>-->
<!--<%@ taglib prefix="sql" uri="http://java.sun.com /jsp/jstl/sql" %>-->


<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
<!--For the web site to work on all devices and screen resolutions -->
<meta name="viewport" content="width=device-width, initial-scale=1">

<script src="reg.js"></script>
<script src="login.js"></script>

<link rel="stylesheet" type="text/css" href="styles.css">

<title>Rahaplaneerija</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
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
                <form action="LoginProcess" align="right" onsubmit="checkUser()" method="post">
                    <div class="input-group">
                      <label><b>Kasutajanimi</b></label>
                      <input id="uname" type="text" placeholder="Sisestage kasutajanimi" onblur="checkUser()" name="uname"  required/>
                    </div>
                    <div class="input-group">
                      <label><b>Parool</b></label>
                      <input id="psw" type="password" onblur="checkUser()" placeholder="Sisestage parool" name="psw" required />
                    </div>
                    <button id="sisse" name="sisse" type="submit"  onclick="checkUser()">Logi sisse</button>
                    <div class="input-group">
                      <label>
                        <input id="check" name="check" type="checkbox" value="1"  />
                          Jдta mind meelde
                      </label>
                    </div>
                    <div class="input-group">
                      <span class="psw">Unustasid <a href="newPass.jsp">parooli?</a></span>
                    <span class=""><a id="registreeri" href="reg.html">Registreeri</a></span>
					</div>
                </form>
              </div>
            </div>
        </div>
    </div>

<div class="container">
    <div class="content_main">
        <p align=center><br><br>
      <font color="red">  Olete registreerinud <%= session.getAttribute("email")%></font><br>
<form name="reg" action="Registration" method="post" >



<table>

<tr>
<td>Nimi</td>
<td>
<input id="usernimi" type="text" name="usernimi" onblur="uNim()" required /></td><td><p id="umi"></p>
</td>
</tr>

<tr>
<td>Perekonnanimi</td>
<td>
<input id="userperekonnanimi" type="text" name="userperekonnanimi" onblur="UsPer()" required/></td><td><p id="upn"></p>
</td>
</tr>

<tr>
<td> Adress</td>
<td>
<input id="useradress" type="text" name="useradress" onblur="Adr()" required/></td><td><p id="adr"></p>
</td>
</tr>

<tr>
<td> Telefon (+372)</td>
<td>
<input id="usertelefon" type="text" name="usertelefon" onblur="Tel()"required/></td><td><p id="ut"></p>
</td>
</tr>
<tr>
<td>E-mail</td>
<td>
<input id="uemail" type="text" name="uemail" onblur="Email()" required/></td><td><p id="uem"></p>
</td>
</tr>



<tr>
<td>Parool:</td>
<td>
<input id="userpassword_1" type="password" name="userpassword_1" onblur="Pass()" required/></td><td><p id="upsw"></p>
</td>
</tr>

<tr><td>
<input type="checkbox" name="Agreement" id="Agreement" value="1" class="checkbox f-left"  required/>

      <p>*Loen ja nõustun teenuse tingimused.<a href="tingimused.php"><br> </a></p>


<input type="submit"  name="button_reg" value="Saada andmed" onclick="Registr()"  />
</td>
</tr>
</table>
</form>



    </div>
    </div>
</body>
</html>