package app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.dto.PersonDTO;
import app.service.PersonService;

@RestController
@RequestMapping("/pessoas")
@CrossOrigin(origins = "http://localhost:4200")
public class PersonController {
	
	@Autowired
	private PersonService personService;
	
	@GetMapping
	private ResponseEntity<List<PersonDTO>> getAll() {
		try {
			return ResponseEntity.ok().body(personService.getAll());
		} catch(Exception exception) {
			return ResponseEntity.badRequest().body(null);
		}
	}
	
	@PostMapping
	private ResponseEntity<String> post(@RequestBody @Validated PersonDTO personDTO){
		try {		
			personService.post(personDTO);
			return ResponseEntity.created(null).body(null);
		} catch (Exception exception) {
			return ResponseEntity.badRequest().body(exception.getMessage());
		}
	}

	@PutMapping("/{id}")
	private ResponseEntity<String> put(
		@PathVariable Long id, 
		@RequestBody @Validated PersonDTO personDTO
	) {
		try {
			personService.put(id, personDTO);
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
		} catch(Exception exception) {
			return ResponseEntity.badRequest().body(exception.getMessage());
		}
	}

	@DeleteMapping("/{id}")
	private ResponseEntity<String> delete(@PathVariable Long id) {
		try {
			personService.delete(id);
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
		} catch(Exception exception) {
			return ResponseEntity.badRequest().body(exception.getMessage());
		}
	}
	
	// @GetMapping("erro")
	// private ResponseEntity<List<PessoaDTO>> exemploErro(){
	// 	return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
	// }

}
