package rahaplaneerija.model;


///import javax.servlet.jsp.tagext.* ;
import javax.servlet.jsp.* ;
import java.io.* ;
import java.util.Set;
//import java.persistence.*;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



//@Entity
//@Table(name="Klient")
public class Klient {

	public Klient() {
		// TODO Auto-generated constructor stub
		//@Id
		//@GeneratedValue(Strategi=GenerationType.AUTO)
		private int ID;
		public int getID() {
			return ID; 
			}
		public void setID(int ID)
		{
			this.ID = ID; 
		}

		//@Column (name="uname")
		private String uname;
		
		public String getUname() {
			return uname; 
			}
		public void setUname(String uname)
		{
			this.uname = uname; 
		}

		//@Column (name="psw")
		private String psw;
		public String getPsw() 
		{
			return psw;
		}
		public void setPsw(String psw)
		{ 
			this.psw = psw;
		}
		
		//@Column (name="nimi")
		private String nimi;
		
		public String getNimi()
		{
			return nimi;
		}
		public void setNimi(String nimi)
		{ 
			this.nimi = nimi;
		}

		///@Column (name="per_nimi")
		private String per_nimi;
		
		public String getPer_nimi() {
			return per_nimi; 
			}
		public void setPer_nimi(String per_nimi)
		{
			this.per_nimi = per_nimi; 
		}
		
		//@Column (name="adress")
		private String adress;
		
		public String getAdress() {
			return adress; 
			}
		public void setAdress(String adress)
		{
			this.adress = adress; 
		}

		//@Column (name="telefon")
		private String telefon;
		
		public String getTelefon() {
			return telefon; 
			}
		public void setTelefon(String telefon)
		{
			this.telefon = telefon; 
		}
		
		//@Column (name="role")
		private String role;
		
		public String getRole() {
			return role; 
			}
		public void setRole(String role)
		{
			this.role = role; 
		}

		//@Column (name="infoID")
		private String infoID;
		
		public String getInfoID() {
			return  infoID; 
			}
		public void setInfoID(String  infoID)
		{
			this.infoID = infoID; 
		}
		
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
