package codegym.module4.services.Impl;

import codegym.module4.entities.Role;
import codegym.module4.repositories.RoleRepo;
import codegym.module4.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class RoleServiceImpl implements RoleService
{
    @Autowired
    private RoleRepo roleRepo;
    @Override
    public List<Role> findAll()
    {
        return roleRepo.findAll();
    }

    @Override
    public Role findById(int id)
    {
        return roleRepo.findById(id).orElse(null);
    }


}
