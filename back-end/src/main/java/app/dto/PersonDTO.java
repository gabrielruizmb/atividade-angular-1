package app.dto;

import app.entity.Person;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record PersonDTO (
    Long id, 

    @NotBlank 
    @Size(min = 2, max = 50)
    String name, 

    @NotNull
    @Max(200)
    Integer age
    ) {

    public Person convertToEntity() {
        return new Person(id, name, age);
    }
}
