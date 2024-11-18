package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Proizvod;
import com.example.demo.services.ProizvodiService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/proizvodi")
public class ProizvodiController {

    @Autowired
    private ProizvodiService proizvodiService;

    @GetMapping("/all")
    public List<Proizvod> getAll(){
        return proizvodiService.getAll();
    }
    

}
