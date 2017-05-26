package rahaplaneerija.model;


///import javax.servlet.jsp.tagext.* ;
//import javax.servlet.jsp.* ;
import java.io.* ;
import java.util.Set;
//import java.persistence.*;

import java.io.IOException;

import javax.annotation.Generated;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.domain.EntityScan;



@EntityScan
//@Table(name="Klient")
public class Klient {

	public Klient() {
		// TODO Auto-generated constructor stub
		//@ID
		@GeneratedValue(Strategi=GenerationType.AUTO)
		int ID;
		
		int getID() {
			return ID; 
			}
		public void setID(int ID)
		{
			this.ID = ID; 
		}

		//@Column (name="uname")
		String uname;
		
		public String getUname() {
			return uname; 
			}
		@Autowired
		public void setUname(String uname)
		{
			this.uname = uname; 
		}

		//@Column (name="psw")
		String psw;
		public String getPsw() 
		{
			return psw;
		}
		public void setPsw(String psw)
		{ 
			this.psw = psw;
		}
		
		//@Column (name="nimi")
		String nimi;
		
		public String getNimi()
		{
			return nimi;
		}
		public void setNimi(String nimi)
		{ 
			this.nimi = nimi;
		}

		///@Column (name="per_nimi")
		String per_nimi;
		
		public String getPer_nimi() {
			return per_nimi; 
			}
		public void setPer_nimi(String per_nimi)
		{
			this.per_nimi = per_nimi; 
		}
		
		//@Column (name="adress")
		String adress;
		
		public String getAdress() {
			return adress; 
			}
		public void setAdress(String adress)
		{
			this.adress = adress; 
		}

		//@Column (name="telefon")
		String telefon;
		
		public String getTelefon() {
			return telefon; 
			}
		public void setTelefon(String telefon)
		{
			this.telefon = telefon; 
		}
		
		//@Column (name="role")
		String role;
		
		public String getRole() {
			return role; 
			}
		public void setRole ( String role)
		{
			this.role = role; 
		}

		//@Column (name="infoID")
		String infoID;
		
		public String getInfoID() {
			return  infoID; 
			}
		public void setInfoID(String  infoID)
		{
			this.infoID = infoID; 
		}
	
		
	}

	public static void main(String[] args) {

	}

}
