package app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import app.entity.Person;

public interface PersonRepository extends JpaRepository<Person, Long> {

}
