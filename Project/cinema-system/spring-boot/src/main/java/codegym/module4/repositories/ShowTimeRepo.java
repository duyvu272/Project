package codegym.module4.repositories;

import codegym.module4.entities.ShowTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShowTimeRepo extends JpaRepository<ShowTime,Integer>
{
}
