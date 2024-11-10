package com.example.service_booking_system.services.authentication;

import org.springframework.stereotype.Service;
import com.example.service_booking_system.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.service_booking_system.dto.SignupRequestDTO;
import com.example.service_booking_system.entity.User;
import com.example.service_booking_system.enums.UserRole;
import com.example.service_booking_system.dto.UserDto;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;  

    public UserDto signUpClient(SignupRequestDTO signupRequestDTO){
        User user = new User();

        user.setName(signupRequestDTO.getName());
        user.setLastname(signupRequestDTO.getLastname());
        user.setEmail(signupRequestDTO.getEmail());
        user.setPassword(signupRequestDTO.getPassword());
        user.setPhone(signupRequestDTO.getPhone());
  
        user.setRole(UserRole.CLIENT);

        return userRepository.save(user).getDto();


    }

    public Boolean presentByEmail(String email){
        return userRepository.findByEmail(email) != null;
    }

    public UserDto signUpCompany(SignupRequestDTO signupRequestDTO){
        User user = new User();

        user.setName(signupRequestDTO.getName());
        user.setEmail(signupRequestDTO.getEmail());
        user.setPassword(signupRequestDTO.getPassword());
        user.setPhone(signupRequestDTO.getPhone());
  
        user.setRole(UserRole.COMPANY);

        return userRepository.save(user).getDto();


    }


}
