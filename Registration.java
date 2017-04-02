package rahaplaneerija;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Registration
 */
@WebServlet("/Registration")
public class Registration extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Registration() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
		
		String usernimi = request.getParameter("usernimi"); 
		String userperekonnanimi = request.getParameter("userperekonnanimi"); 
		String useradress = request.getParameter("useradress"); 
		String usertelefon = request.getParameter("usertelefon"); 
		String uemail = request.getParameter("uemail"); 
		String userpassword_1 = request.getParameter("userpassword_1"); 
		
		
      try{
   	  Statement  value= con.createStatment();
   	  ResultSet value; 
   	   int i=value.execute("INSERT INTO Klient VALUES ('"+usernimi+"','"+userperekonnanimi+"','"+useradress+"','"+usertelefon+"','"+uemail+"','"+userpassword_1+"');");
   	   con.commit();
		
		 value.close();
  	   System.out.println("Olete registreerinud");
  	   
     }
     catch(Exception e){
  	  System.err.println("Proovige uuesti.");
  	   System.err.println(e);
  	   
  	   throw e;
     }
		
		
		
		response.sendRedirect("avaleht.html");
		
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
