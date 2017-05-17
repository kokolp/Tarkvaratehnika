package com.example;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebController {

	@RequestMapping(value = { "/"})
	public String home() {
		return "home";
	}

	@RequestMapping(value = { "/login" })
	public String login() {
		return "login";
	}
	@RequestMapping(value = { "/reg" })
	public String reg() {
		return "reg";
	}
	@RequestMapping(value = { "/newpass" })
	public String newPass() {
		return "newPass";
	}
	@RequestMapping(value = { "/tingimused" })
	public String tingimused() {
		return "tingimused";
	}
	@RequestMapping(value = { "/meist" })
	public String meist() {
		return "meist";
	}
	@RequestMapping(value = { "/saastmisekalkulaator" })
	public String saastmisekalkulaator() {
		return "saastmisekalkulaator";
	}
	@RequestMapping(value = { "/saved" })
	public String saved() {
		return "saved";
	}
	@RequestMapping(value = { "/omaAndmed" })
	public String omaAndmed() {
		return "omaAndmed";
	}


}
