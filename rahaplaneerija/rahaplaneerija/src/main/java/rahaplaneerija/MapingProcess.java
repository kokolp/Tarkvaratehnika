package rahaplaneerija;

import rahaplaneerija.model.Klient;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MapingProcess implements KlientServices {

	public MapingProcess() {
		
		private Map<String,Klient> andmedKlient;
		
		
		public Map<String,Klient> getAndmedKlient() {
			return andmedKlient;
			}
		public void setAndmedKlient(Map<String,Klient> andmedKlient) {
			this.andmedKlient = andmedKlient;
			}
		
		
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
