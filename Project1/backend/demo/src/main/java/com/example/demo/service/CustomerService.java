package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Customer;
import com.example.demo.repository.CustomerRepository;

import lombok.RequiredArgsConstructor;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerService {
     
    private final CustomerRepository customerRepository;

    public Customer postCustomer(Customer customer){
        return customerRepository.save(customer);
    }


    public List<Customer> getAllCustomers(){
        return customerRepository.findAll();
    }

    public Customer getCustomerById(Long id){
        return customerRepository.findById(id).orElse(null);
    }

    public Customer updateCustomer(Customer customer){
        return customerRepository.save(customer);
    }

    public void deleteCustomer(Long id){
        customerRepository.deleteById(id);
    }

}
