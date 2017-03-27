package rahaplaneerija;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class LoginProcess
 */
@Override
@WebServlet("/LoginProcess")
public class LoginProcess extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
	
	
   public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//doGet(request, response);
	String uname=request.getParameter("uname");
    String psw=request.getParameter("psw");
	
	System.out.println("Tere "+uname);
	System.out.println("Sinu parool: "+psw);
	
	request.getSession().setAttribute("uname", uname);
	request.getSession().setAttribute("psw", psw);
	
	response.sendRedirect("kleindileht.jsp");
	

   
   }

}
