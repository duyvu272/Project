package codegym.module4.repositories;

import codegym.module4.entities.ShowRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShowRoomRepo extends JpaRepository<ShowRoom,Integer>
{
}
