package rahaplaneerija;
import java.io.IOException;

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
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	
	//response.setContentType("text/html");

    //PrintWriter out = response.getWriter();
    //String title = "Using GET Method to Read Form Data";
		
    //String docType = "<!doctype html public \"-//w3c//dtd html 4.0 " +
      // "transitional//en\">\n";
			
    //out.println(docType + "<html>\n" + "<head><title>" + title + "</title></head>\n" + "<body bgcolor=\"#f0f0f0\">\n" +"<h1 align=\"center\">" + title + "</h1>\n" + "<ul>\n" + "  <li><b>First Name</b>: "
      // + request.getParameter("uuspsw") + "\n" + "</body></html>");
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
		
		//String uuspsw = request.getParameter("uuspsw"); 
		// String newpass = "uuspsw";
		  //newpass = ShuffleString.shuffle(newpass);
       //try{
    	 // Object con;
		//Statement  value= con.createStatment();
    	  //ResultSet value; 
    	   //int i=value.execute("UPDATE klient SET password= newpass WHERE email=uuspsw");
    	   //con.commit();
    	   //Newpassvalue.close();
    	   //System.out.println("Sellel emaili saadetud uus parool");
    	   
       //}
       //catch(Exception e){
    	 // System.err.println("Proovige uuesti.");
    	   //System.err.println(e);
    	   
    	   //throw e;
      // }
		
		
		
		//response.sendRedirect("newPass.html");
		
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	@Override
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
