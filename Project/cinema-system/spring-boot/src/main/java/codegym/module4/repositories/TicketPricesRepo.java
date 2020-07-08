package codegym.module4.repositories;

import codegym.module4.entities.TicketPrices;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketPricesRepo extends JpaRepository<TicketPrices,Integer>
{
}
