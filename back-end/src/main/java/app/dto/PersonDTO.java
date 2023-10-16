package app.dto;

import app.entity.Person;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotBlank;

public record PersonDTO (
    Long id, 

    @NotBlank String name, 

    @Max(200)
    int age
    ) {

    public Person convertToEntity() {
        return new Person(id, name, age);
    }
}
