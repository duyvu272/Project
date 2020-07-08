package codegym.module4.controllers;


import codegym.module4.entities.Customer;
import codegym.module4.services.CustomerService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(CustomerController.BASE_URL)
public class CustomerController {


    public static final String BASE_URL = "/api/v1/customers";


    private final CustomerService customerService;


    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }


    @GetMapping
    public List<Customer> getAllUser() {
        return customerService.findAllCustomer();
    }


    @GetMapping("/{id}")
    public Customer getUserByID(@PathVariable int id){
        return customerService.findByIdL(id);
    }


    @PutMapping("/{id}")
    public Customer updateCustomer(@PathVariable int id, @RequestBody Customer customerUpdate){
        Customer customerDetails = customerService.findCustomerById(id);
        customerDetails.setAddress(customerUpdate.getAddress());
        customerDetails.setBirthday(customerUpdate.getBirthday());
        customerDetails.setEmail(customerUpdate.getEmail());
        customerDetails.setFullName(customerUpdate.getFullName());
        customerDetails.setGender(customerUpdate.getGender());
        customerDetails.setIdCard(customerUpdate.getIdCard());
        customerDetails.setPhone(customerUpdate.getPhone());
        customerDetails.setIdCard(customerUpdate.getIdCard());
      return customerService.saveCustomer(customerDetails);

    }

    @PostMapping(path = "/new")
    public Customer newCustomer(@RequestBody Customer customer)
    {
        return customerService.saveCustomer(customer);
    }

    @DeleteMapping(path = "/delete/{id}")
    public void newCustomer(@PathVariable int id)
    {
        Customer customer=customerService.findCustomerById(id);
        customerService.deleteCustomer(customer);
    }


}
