package com.example.service_booking_system.services.authentication;

import com.example.service_booking_system.dto.UserDto;
import com.example.service_booking_system.dto.SignupRequestDTO;

public interface AuthService {
    
    UserDto signUpClient(SignupRequestDTO signupRequestDTO);

    UserDto signUpCompany(SignupRequestDTO signupRequestDTO);


    public Boolean presentByEmail(String email);
    


}
