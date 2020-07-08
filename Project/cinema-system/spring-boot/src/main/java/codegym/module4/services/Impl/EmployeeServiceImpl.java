package codegym.module4.services.Impl;

import codegym.module4.entities.Employee;
import codegym.module4.repositories.EmployeeRepo;
import codegym.module4.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService
{
    @Autowired
    private EmployeeRepo employeeRepo;
    @Override
    public List<Employee> findAll()
    {
        return employeeRepo.findAll();
    }
}
