package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Activity;
import com.example.demo.model.User;
import com.example.demo.repository.ActivityRepository;
import com.example.demo.repository.UserRepository;

@Service
public class ActivityService {


    @Autowired
    private ActivityRepository activityRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Activity> getActivitiesByNastavnik(String nastavnik){
        User korisnik = userRepository.findByKorisnickoImeAndTip(nastavnik, "nastavnik").get();
        if(korisnik == null){
            return null;
        }

        return activityRepository.findByNastavnik(korisnik);
    }

    public List<Activity> getActiveActivities(){
        return activityRepository.findByStatus(1);
    }

    public List<Activity> getInActiveActivities(){
        return activityRepository.findByStatus(0);
    }

    public Activity getActivityById(Long id){
        return activityRepository.findById(id).get();
    }

    public Activity decreaseCapacity(Long id, String sala){
        Optional<Activity>  activity = activityRepository.findById(id);
        if(activity!=null){
            switch (sala) {
                case "Sala1":
                    activity.get().setSala1(activity.get().getSala1()-1);
                    break;
                case "Sala2":
                    activity.get().setSala2(activity.get().getSala2()-1);

                    break;
                case "Sala3":
                    activity.get().setSala3(activity.get().getSala3()-1);
                        break;
            
                default:
                    break;
            }
            return activityRepository.save(activity.get());
        }
        return null;
    }


}
