package rahaplaneerija;

import java.util.List;
import java.util.Optional;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;

import rahaplaneerija.model.Info;
import rahaplaneerija.model.Klient;
import repository.KlientRepository;
/**
 * Servlet implementation class KlientService
 */
@WebServlet("/KlientService")
public class KlientService extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	private KlientRepository klientRepository;

	public KlientService(KlientRepository klientRepository) {
		this.klientRepository = klientRepository;
	}

	Klient addKlient(Klient klient) {
		klient.setInfo( new Info());
		return klientRepository.save(klient);
	}

	List<Klient> getAllKlients() {
		return (List<Klient>) klientRepository.findAll();
	}

	Klient getKlientByID(long ID) {
		return klientRepository.findOne((int) ID);
	}

	Optional<Klient> loginKlient(LoginHelper login) {
		return klientRepository.findByEmailAndPassword(login.getEmail(), login.getPassword());
	}

	

}
