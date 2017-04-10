package rahaplaneerija.model;


//import javax.servlet.jsp.tagext.* ;
import javax.servlet.jsp.* ;
import java.io.* ;
import java.util.Set;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


//@Entity
//@Table(name="Info")
public class KliendInfo {

	public KliendInfo() {
		//@Id
		//@GeneratedValue(Strategi=GenerationType.AUTO)
		private Long Id;
		
		//@Column (name="InfoID")
		private String InfoID;

		//@Column (name="InfoCategory")
		private String InfoCategory;
		
		//@Column (name="InfoNimi")
		private String InfoNimi;

		//@Column (name="EeldatavSumm")
		private String EeldatavSumm;
		
		//@Column (name="TegelikSumm")
		private String TegelikSumm;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
