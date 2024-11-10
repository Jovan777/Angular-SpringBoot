package com.example.service_booking_system.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.service_booking_system.dto.SignupRequestDTO;
import com.example.service_booking_system.dto.UserDto;
import com.example.service_booking_system.services.authentication.AuthService;

@RestController
@CrossOrigin(origins = "*")
public class AuthenticationController {

    @Autowired
    private AuthService authService;


    @PostMapping("/client/sign-up")
    public ResponseEntity<?> signUpClient(@RequestBody SignupRequestDTO signupRequestDTO){
        if(authService.presentByEmail(signupRequestDTO.getEmail())){
            return new ResponseEntity<>("Client already exists", HttpStatus.BAD_REQUEST);
        }

        UserDto createdUser = authService.signUpClient(signupRequestDTO);

        return new ResponseEntity<>(createdUser, HttpStatus.OK);
    }


    @PostMapping("/company/sign-up")
    public ResponseEntity<?> signUpCompany(@RequestBody SignupRequestDTO signupRequestDTO){
        if(authService.presentByEmail(signupRequestDTO.getEmail())){
            return new ResponseEntity<>("Company already exists", HttpStatus.BAD_REQUEST);
        }

        UserDto createdUser = authService.signUpCompany(signupRequestDTO);

        return new ResponseEntity<>(createdUser, HttpStatus.OK);
    }

}
