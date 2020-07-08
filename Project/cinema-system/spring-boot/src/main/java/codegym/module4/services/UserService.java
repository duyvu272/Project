package codegym.module4.services;

import codegym.module4.entities.User;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserService
{

    List<User> findAll();
    User save(User user);


    User findByIdL(int id);

    //Vu add : Start
    Optional<User> findById(Long id);

    void delete(int id);

    void saveV(User user);

    List<User> findAllUser();

    Optional<User> findByUsername(String name);

    Boolean existsByName(String username);




    // End

}
