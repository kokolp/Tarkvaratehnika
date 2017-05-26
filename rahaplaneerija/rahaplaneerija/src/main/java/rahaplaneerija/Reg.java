package rahaplaneerija;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class Reg {

	public static void main(String[] args,String email, String password_1, String nimi, String pernimi, String adress,String telefon) throws Exception
	{
		Class.forName("org.mariadb.jdbc.Driver");
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/test", "root", "root");
		PreparedStatement statement = con.prepareStatement("INSERT INTO klient (email,password,nimi,per_nimi,adress,telefon) VALUES(?,?,?,?,?,?)");
		
		//Statement.result(1,email);
		//Statement.setString(2,password_1);
		//Statement.setString(3,nimi);
		//Statement.setString(4,pernimi);
		//Statement.setString(5,adress);
		//Statement.setString(6,telefon);
		
		//Statement.executeUpdate();

		ResultSet result =statement.executeQuery();
		while(result.next())
		{
			System.out.println(result.getString(1)+"  "+ result.getString(2)+"  "+ result.getString(3)+"  "+ result.getString(4)+"  "+ result.getString(5)+" "+ result.getString(6));
		}
	}


}
