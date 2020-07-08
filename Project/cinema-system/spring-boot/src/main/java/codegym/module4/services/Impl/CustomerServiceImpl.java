package codegym.module4.services.Impl;

import codegym.module4.entities.Customer;
import codegym.module4.repositories.CustomerRepo;
import codegym.module4.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService
{
    @Autowired
    private CustomerRepo customerRepo;


    public CustomerServiceImpl(CustomerRepo customerRepo) {
        this.customerRepo = customerRepo;
    }


    @Override
    public List<Customer> findAll()
    {
        return customerRepo.findAll();
    }


    @Override
    public Customer save(Customer customer)
    {
        return customerRepo.save(customer);
    }

    @Override
    public Customer findById(int id){
        return customerRepo.findById(id).orElse(null);
    }

    @Override
    public Customer findCustomerById(int id) {
        return customerRepo.findById(id).get();
    }

    @Override
    public Customer findByIdL(int id) {
        return this.customerRepo.findByIdL(id);
    }

    @Override
    public List<Customer> findAllCustomer() {
        return customerRepo.findAll();
    }

    @Override
    public Customer saveCustomer(Customer customer) {
        return customerRepo.save(customer);

    }

    @Override
    public void deleteCustomer(Customer customer) {
        customerRepo.delete(customer);
    }
}
