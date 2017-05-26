package rahaplaneerija;


import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;


public class Kalk{
	
	   //  String date = request.getParameter("date"); 
		//	String liik = request.getParameter("liik"); 
		//	String summa = request.getParameter("summa");
		//	String summa2 = request.getParameter("summa2"); 
		//	String kulutulu = request.getParameter("kulutulu"); 
		//	String infoID = request.getParameter("infoID"); 
	
   public static void main(String[] args, Date date, String liik, int summa, int summa2, String kulutulu) throws Exception {
	 
	   Class.forName("org.mariadb.jdbc.Driver");
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/test", "root", "root");
		PreparedStatement statement = con.prepareStatement("INSERT INTO info (InfoCategory,InfoNimi,EeldatavSumm,TegelikSumm,Date) VALUES(?,?,?,?,?,?)");
		
		//Statement.result(1,infoID);
		statement.setString(1,kulutulu);
		statement.setString(2,liik);
		statement.setInt(3,summa);
		statement.setInt(4,summa2);
		statement.setDate(5,date);
		
		//Statement.executeUpdate();

		ResultSet result =statement.executeQuery();
		while(result.next())
		{
			System.out.println(result.getString(1)+"  "+ result.getString(2)+"  "+ result.getString(3)+"  "+ result.getString(4)+"  "+ result.getString(5)+" "+ result.getString(6));
		}
   }
}