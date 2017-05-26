package rahaplaneerija;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

public class InfoController {
	
	
	private static final String String = null;
	private InfoService infoService;
	//private InfoForm infoForm;
	
	@Autowired
	public void setInfoService(InfoService infoService)
	{
		this.infoService=infoService;
	}
	@RequestMapping("/home")
	public String redirToList(){
		return "redirect:/home";
	}
	//@RequestMapping("/saved")
	//public String edit(@PathVariable String ID, Model model){
		
		
		//Info info =infoService.getById(String valueOf:ID);
		// infoForm= infoForm.convert(info);
//	}
	
	

	public InfoController() {
		
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
