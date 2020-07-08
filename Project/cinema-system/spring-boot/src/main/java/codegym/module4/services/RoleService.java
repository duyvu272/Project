package codegym.module4.services;

import codegym.module4.entities.Role;

import java.util.List;

public interface RoleService
{
    List<Role> findAll();
    Role findById(int id);
}
