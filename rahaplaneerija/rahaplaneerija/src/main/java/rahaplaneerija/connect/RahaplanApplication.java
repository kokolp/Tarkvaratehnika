package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.ErrorMvcAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import sun.applet.Main;

@SpringBootApplication(exclude = ErrorMvcAutoConfiguration.class )
public class RahaplanApplication {
	
	 protected SpringApplicationBuilder configure (SpringApplicationBuilder builder) {
	        return builder.sources(RahaplanApplication.class);
	    }


	public static void main(String[] args) {
		SpringApplication.run(RahaplanApplication.class, args);
		
	}
	
	 
	
	
}
