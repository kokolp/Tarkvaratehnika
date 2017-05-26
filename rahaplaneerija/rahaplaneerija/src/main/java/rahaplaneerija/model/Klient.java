package rahaplaneerija.model;


import java.util.concurrent.atomic.AtomicLong;

import javax.annotation.Generated;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;

@EntityScan

//@Table(name="klient")
public class Klient  {
	 private static final long serialVersionUID = 1L;
        @Autowired
		@Id
		@Generated(value = { "" })
		int ID;
         String email;
         String password;
    	 String nimi;
    	 String per_nimi;
    	 String adress;
    	 String telefon;
    	 String role;
    	@Autowired
		//@OneToOne()
    	 Info info;
		private String infoID;
    	private static AtomicLong COUNTER = new AtomicLong(0L);	
    	
    	@PersistenceConstructor
        public Klient(String string, String string2, String string3, String string4, String string5, String string6) {
           
        }
    	 @Override
    	    public String toString() {
    	        return String.format("Klient[ID=%d, nimi='%s', per_nimi='%s']", ID, nimi, per_nimi);
    	    }
    	 
	//public Klient() {
		// TODO Auto-generated constructor stub
	//}
		
		int getID() 
		 {
			return this.ID; 
		 }
		public void setID(int ID)
		{
			this.ID = ID; 
		}

		//@Column (name="uname")
		
		
		public String getEmail() {
			return email; 
			}
		@Autowired
		public void setUname(String email)
		{
			this.email = email; 
		}

		//@Column (name="psw")
		
		public String getPassword() 
		{
			return password;
		}
		public void setPassword(String password)
		{ 
			this.password = password;
		}
		
		//@Column (name="nimi")
	
		
		public String getNimi()
		{
			return nimi;
		}
		public void setNimi(String nimi)
		{ 
			this.nimi = nimi;
		}

		///@Column (name="per_nimi")
		
		
		public String getPer_nimi() {
			return per_nimi; 
			}
		public void setPer_nimi(String per_nimi)
		{
			this.per_nimi = per_nimi; 
		}
		
		//@Column (name="adress")
	
		
		public String getAdress() {
			return adress; 
			}
		public void setAdress(String adress)
		{
			this.adress = adress; 
		}

		//@Column (name="telefon")
		
		
		public String getTelefon() {
			return telefon; 
			}
		public void setTelefon(String telefon)
		{
			this.telefon = telefon; 
		}
		
		//@Column (name="role")
		
		
		public String getRole() {
			return role; 
			}
		public void setRole ( String role)
		{
			this.role = role; 
		}

		//@Column (name="infoID")
		
		
		public String getInfoID() {
			return  infoID; 
			}
		
		public void setInfoID(String  infoID)
		{
			this.infoID = infoID; 
		}
		public void setInfo(Info info2) {
			// TODO Auto-generated method stub
			
		}
	
	
	
	//@Override
	
	//public static void main(String[] args) {
		
	   
	       // return "Klient{" +
	           //     ", uname='" + uname + '\'' +
	            //    ", psw=" + psw +
	            //    '}';
	  //  }
	
	}

