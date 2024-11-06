package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Customer;
import com.example.demo.service.CustomerService;

import lombok.RequiredArgsConstructor;
import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class CustomerController {
    
    private final CustomerService customerService;

    @PostMapping("/customer")
    public Customer postCustomer(@RequestBody Customer customer){
        return customerService.postCustomer(customer);
    }

    @GetMapping("/customers")
    public List<Customer> getAllCustomers(){
        return customerService.getAllCustomers();
    }

    @GetMapping("/customer/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable Long id){
        Customer customer= customerService.getCustomerById(id);
        if(customer==null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(customer);

    }

    @PutMapping("/customer/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable Long id, @RequestBody Customer customer){
        Customer existingCustomer = customerService.getCustomerById(id);
        if(existingCustomer==null){
            return ResponseEntity.notFound().build();
        }
        existingCustomer.setName(customer.getName());
        existingCustomer.setEmail(customer.getEmail());
        existingCustomer.setPhone(customer.getPhone());

         
        Customer updatedCustomer =  customerService.updateCustomer(existingCustomer);
        return ResponseEntity.ok().body(updatedCustomer);

    }

    @DeleteMapping("/customer/delete/{id}")
    public ResponseEntity<Customer> deleteCustomer(@PathVariable Long id){
        Customer customer = customerService.getCustomerById(id);
        if(customer==null){
            return ResponseEntity.notFound().build();
        }
        customerService.deleteCustomer(id);
        return ResponseEntity.ok().build();
    }

}
