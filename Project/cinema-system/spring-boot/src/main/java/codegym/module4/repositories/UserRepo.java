package codegym.module4.repositories;

import codegym.module4.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User,Integer>
{

    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    @Query("select c from User c WHERE c.id =?1")
    User findByIdL(int id);

//    User findByUsername(String name);
}
