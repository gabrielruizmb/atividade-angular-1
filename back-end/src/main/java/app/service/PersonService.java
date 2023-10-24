package app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import app.dto.PersonDTO;
import app.entity.Person;
import app.repository.PersonRepository;

@Service
public class PersonService {

	@Autowired
	private PersonRepository personRepository;
	
	public void post(PersonDTO personDTO) {
		personRepository.save(personDTO.convertToEntity());
	}

	public void put(Long id, PersonDTO personDTO) {
		Assert.isTrue(
			personRepository.existsById(id) && id == personDTO.id(), 
			"Usuário não encontrado."
		);
		personRepository.save(personDTO.convertToEntity());
	}

	public void delete(Long id) {
		Assert.isTrue(
			personRepository.existsById(id), 
			"Usuário não encontrado"
		);
		personRepository.deleteById(id);
	}

	public List<PersonDTO> getAll() {
		List<PersonDTO> personDTOs = new ArrayList<>();
		List<Person> dbPersons = personRepository.findAll();
		
		for(Person dbPerson : dbPersons) {
			personDTOs.add(dbPerson.convertToDTO());
		}
		return personDTOs;
	}
}
