package rahaplaneerija;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//import groovyjarjarantlr.collections.List;
import rahaplaneerija.model.Klient;

@RestController
@Controller
public class KlientController {
	

	private KlientService klientService;

	public KlientController(KlientService klientService) {
		this.klientService = klientService;
	}
	
	@RequestMapping(value="/users/add", method=RequestMethod.POST,
			consumes = "application/json")
	public Klient addKlient(@RequestBody Klient klient) {
		return klientService.addKlient(klient);
	}
	
	@RequestMapping(value="/users", method=RequestMethod.GET)
	public List<Klient> getAllKlients() {
		return klientService.getAllKlients();
	}
	
	@RequestMapping(value = "/users/{ID}", method=RequestMethod.GET)
	public Klient getKlient(@PathVariable("ID") long ID) {
		return klientService.getKlientByID(ID);
	}

	@RequestMapping(value="/login", method=RequestMethod.POST,
		consumes = "application/json")
	public Klient login(@RequestBody LoginHelper login) {
		System.out.println(login.getEmail()+login.getPassword());
		return klientService.loginKlient(login).orElseThrow(()->new RuntimeException("Sellist kasutajat ei eksisteeri!"));

	}


}
