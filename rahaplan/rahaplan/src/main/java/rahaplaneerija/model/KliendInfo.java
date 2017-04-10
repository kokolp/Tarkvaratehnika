package rahaplaneerija.model;




import static java.lang.annotation.RetentionPolicy.RUNTIME;

//import javax.servlet.jsp.tagext.* ;
//import javax.servlet.jsp.* ;
import java.io.* ;
import java.util.Set;
import java.io.IOException;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.fasterxml.classmate.GenericType;

import javax.annotation.Generated;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.springframework.beans.factory.annotation.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;



@EntityScan
//@Table(name="Info")
public class KliendInfo {

	

	public KliendInfo() {
		//@Id
		@GeneratedValue(Strategi=GenerationType.AUTO)
	
		Long Id;
		
		//@Column (name="InfoID")
		String InfoID;

		//@Column (name="InfoCategory")
		String InfoCategory;
		
		//@Column (name="InfoNimi")
		String InfoNimi;

		//@Column (name="EeldatavSumm")
		String EeldatavSumm;
		
		//@Column (name="TegelikSumm")
		String TegelikSumm;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
