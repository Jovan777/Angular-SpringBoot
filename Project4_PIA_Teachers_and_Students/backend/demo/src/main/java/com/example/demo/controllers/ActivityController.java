package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.KorisnikRequest;
import com.example.demo.model.Activity;

import com.example.demo.service.ActivityService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/activities")
public class ActivityController {

    @Autowired
    private ActivityService activityService;

    @GetMapping("/active")
    public List<Activity> getActiveActivities() {
        return activityService.getActiveActivities();
    }

    @GetMapping("/inactive")
    public List<Activity> getInActiveActivities() {
        return activityService.getInActiveActivities();
    }

    @GetMapping("/nastavnik")
    public List<Activity> getNastavnikActivities(@RequestBody KorisnikRequest korisnikRequest) {
        System.out.println("Korisnicko ime : " + korisnikRequest.getKorisnickoIme());
        return activityService.getActivitiesByNastavnik(korisnikRequest.getKorisnickoIme());
    }

    @GetMapping("/activity")
    public Activity getActivityById(@RequestParam Long id){
        return activityService.getActivityById(id);
    }



}
