package com.example.service_booking_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.service_booking_system.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

    User findByEmail(String email);

}
