package com.example.service_booking_system.services.jwt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.example.service_booking_system.entity.User;
import com.example.service_booking_system.repository.UserRepository;
import java.util.ArrayList;

public class UserDetailsServiceImpl implements UserDetailsService{

    @Autowired
    private UserRepository userRepository; // Inject your UserRepository

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Fetch user from the database (adjust as per your UserRepository)
        User user = userRepository.findByEmail(username);

        if (user == null) {
            throw new UsernameNotFoundException("User not found with email: " + username);
        }

        // Convert your User entity to Spring Security's UserDetails
        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                new ArrayList<>() // You can populate authorities here if you have roles
        );
    }

}
