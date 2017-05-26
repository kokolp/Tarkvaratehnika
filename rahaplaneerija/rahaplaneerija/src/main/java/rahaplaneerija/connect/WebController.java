package com.example;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import rahaplaneerija.Reg;

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
	
	   @GetMapping("/reg")
	    public String regForm(Model model) {
	        model.addAttribute("reg", new Reg());
	        return "reg";
	    }

	    @PostMapping("/reg")
	    public String regSubmit(@ModelAttribute Reg reg) {
	        return "result";
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
	@RequestMapping(value = { "/raport" })
	public String raport() {
		return "raport";
	}
	@RequestMapping(value = { "/omaAndmed" })
	public String omaAndmed() {
		return "omaAndmed";
	}


}