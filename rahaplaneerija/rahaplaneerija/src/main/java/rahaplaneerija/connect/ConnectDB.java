package rahaplaneerija.connect;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
public class ConnectDB {

	public ConnectDB() {
		// TODO Auto-generated constructor stub
	}

	public static void main(String[] args) throws Exception{
		Class.forName("org.mariadb.jdbc.Driver");
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/test", "root", "root");
		PreparedStatement statement = con.prepareStatement("SELECT * FROM info");
		ResultSet result =statement.executeQuery();
		while(result.next())
		{
			System.out.println(result.getString(1)+"  "+ result.getString(2)+"  "+ result.getString(3)+"  "+ result.getString(4)+"  "+ result.getString(5)+" "+ result.getString(6));
		}

	}

}
