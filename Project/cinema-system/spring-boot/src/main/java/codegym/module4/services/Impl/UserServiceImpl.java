package codegym.module4.services.Impl;

import codegym.module4.entities.User;
import codegym.module4.repositories.UserRepo;
import codegym.module4.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo userRepo;


    @Override
    public User findByIdL(int id) {
        return userRepo.findByIdL(id);
    }

    @Override
    public Optional<User> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public void delete(int id) {
        userRepo.deleteById(id);
    }

    @Override
    public List< User > findAll(){
        return userRepo.findAll();
    }

    @Override
    public void saveV(User user) {
        userRepo.save(user);
    }

    @Override
    public List<User> findAllUser() {
        return userRepo.findAll();
    }

    @Override

    public User save(User user)
    {
        return userRepo.save(user);
    }

    public Optional<User> findByUsername(String name) {
        return userRepo.findByUsername(name);
    }

    @Override
    public Boolean existsByName(String username) {
        return userRepo.existsByUsername(username);
    }



}
