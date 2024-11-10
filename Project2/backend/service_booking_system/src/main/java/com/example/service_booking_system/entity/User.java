package com.example.service_booking_system.entity;
import jakarta.persistence.*;
import lombok.Data;
import com.example.service_booking_system.enums.UserRole;
import com.example.service_booking_system.dto.UserDto;

@Entity
@Table(name = "user")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;

    private String password;

    private String name;

    private String lastname;

    private String phone;

    private UserRole role;

    
    public UserDto getDto(){
        UserDto userDto = new UserDto();
        userDto.setId(this.id);
        userDto.setEmail(this.email);
        userDto.setPassword(this.password);
        userDto.setName(this.name);
        userDto.setLastname(this.lastname);
        userDto.setPhone(this.phone);
        userDto.setRole(this.role);
        return userDto;

    }

}

