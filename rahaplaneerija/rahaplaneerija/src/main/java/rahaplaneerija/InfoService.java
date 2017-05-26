package rahaplaneerija;

import java.util.List;

import org.springframework.boot.autoconfigure.domain.EntityScan;

import rahaplaneerija.model.Info;

@EntityScan
public interface InfoService {
	InfoService INSTANCE_INFO= new InfoServiceImpl(null, null);
    List<Info> getInfo();
    Info getById(int ID);
	Info getById(String ID);
}
