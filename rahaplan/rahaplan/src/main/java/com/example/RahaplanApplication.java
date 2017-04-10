package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;

@SpringBootApplication
public class RahaplanApplication {

	public static void main(String[] args) {
		SpringApplication.run(RahaplanApplication.class, args);
	}
	
	
	//@Autowired
	
 @Autowired
public void ConfigureGlobal(AuthenticationManagerBuilder auth) throws Exception{
		
		auth.inMemoryAuthentication().withUser("user").password("password").roles("user");
	}

}
