package rahaplaneerija;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import rahaplaneerija.model.Info;
import repository.InfoRepository;
@Service
public class InfoServiceImpl<InfoForm> implements InfoService {
	
	
	private InfoRepository infoRepository;
	private InfoForm   infoForm;
	
	@Autowired
	public InfoServiceImpl(InfoRepository infoRepository,InfoForm   infoForm){
		this.infoRepository=infoRepository;
		this.infoForm=infoForm;
		
		
	}
   //@Override	
  // public List<Info> ListAll() {
    //List<Info> info  = new ArrayList<>();
    //InfoRepository.findAll().forEach(info :: add);
      // return info;
    //}


@Override
public Info getById(String ID) {
	// TODO Auto-generated method stub
	return  InfoRepository.findOne( ID);
}
@Override
public Info getById(int ID) {
	// TODO Auto-generated method stub
	return null;
}
@Override
public java.util.List<Info> getInfo() {
	// TODO Auto-generated method stub
	return null;
}

}
