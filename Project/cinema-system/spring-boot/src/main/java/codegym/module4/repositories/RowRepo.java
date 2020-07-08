package codegym.module4.repositories;

import codegym.module4.entities.Row;
import codegym.module4.entities.ShowRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RowRepo extends JpaRepository<Row,Integer>
{
    List<Row> findByShowRoom(ShowRoom showRoom);
}
