package codegym.module4.repositories;

import codegym.module4.entities.Customer;
import codegym.module4.entities.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface TicketRepo extends JpaRepository<Ticket, Integer> {
//VIET ADD
    List<Ticket> findByCustomerAndOrderStatus(Customer customer, String status);
    //VIET END

    List<Ticket> findByDateBetweenAndCustomerIdOrCustomerPhone(Date from, Date to, Customer id, String phone);

}
