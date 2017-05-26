package repository;

import org.springframework.data.repository.CrudRepository;

import rahaplaneerija.model.Info;



	public interface InfoRepository extends CrudRepository<Info, Integer> {
	    Info findByInfoID(String InfoID);

		static Info findOne(String ID) {
			// TODO Auto-generated method stub
			return null;
		}

		

}
