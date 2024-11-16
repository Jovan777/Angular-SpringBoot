package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.LoginResponse;
import com.example.demo.models.User;
import com.example.demo.services.UserService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/auth")
public class UserController 
{

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest loginRequest){
        User user = userService.findByKorisnickoIme(loginRequest.getKorisnickoIme());
        if(user != null){
            if(user.getLozinka().equals(loginRequest.getLozinka()) && user.getTip().equals(loginRequest.getTip())){
                return new LoginResponse(true, "Uspesno ste se ulogovali", user);
            }
            System.out.println("Dohvacen user : " + user);
        }
        return new LoginResponse(false, "Neuspesno logovanje", null);
    }
}
