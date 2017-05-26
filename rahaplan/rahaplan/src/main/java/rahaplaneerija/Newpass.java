package rahaplaneerija;
import rahaplaneerija.model.Klient;
import rahaplaneerija.model.KliendInfo;
import java.io.IOException;
import java.sql.ResultSet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Newpass
 */
@WebServlet("/Newpass")
public class Newpass extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Newpass() {
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
		
		String uuspsw = request.getParameter("uuspsw"); 
		 String newpass = "uuspsw";
		//  newpass = ShuffleString.shuffle(newpass);
       try{
    	  Object con;
		//Statement  value= con.createStatment();
    	  ResultSet value; 
    	   //int i=value.execute("UPDATE Klient SET userpassword_1= newpass WHERE uemail=uuspsw");
    	  // con.commit();
    	 //  value.close();
    	   System.out.println("Sellel emaili saadetud uus parool");
    	   
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
