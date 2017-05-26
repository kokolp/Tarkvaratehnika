package repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import rahaplaneerija.model.Klient;

public interface KlientRepository extends CrudRepository<Klient, Integer> {
    Klient findByNimi(String nimi);

	Optional<Klient> findByEmailAndPassword(String email, String password);
}