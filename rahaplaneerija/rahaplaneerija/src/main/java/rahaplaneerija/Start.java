package rahaplaneerija;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Start extends KlientService{

	 /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			if(request.getParameter("sisse")!=null)super.forward("/LoginProcess",request,response);
			else if(request.getParameter("registreeri")!=null)super.forward("/reg.jsp",request,response);
}


}
