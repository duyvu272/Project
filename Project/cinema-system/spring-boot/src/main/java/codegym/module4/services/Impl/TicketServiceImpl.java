package codegym.module4.services.Impl;

import codegym.module4.entities.Customer;
import codegym.module4.entities.Ticket;
import codegym.module4.repositories.TicketRepo;
import codegym.module4.services.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class TicketServiceImpl implements TicketService {
    @Autowired
    private TicketRepo ticketRepo;

    @Override
    public List<Ticket> findAll() {
        return ticketRepo.findAll();
    }

    @Override

    public Ticket findById(int id){
        return ticketRepo.findById(id).orElse(null);

    }
    public Optional< Ticket > findById(Integer id){
        return Optional.ofNullable(ticketRepo.findById(id).orElse(null));
    }
        public List< Ticket > findByCustomerAndOrderStatus (Customer customer, String status){
            return ticketRepo.findByCustomerAndOrderStatus(customer, status);
        }

    @Override
    public Ticket Creat(Ticket ticket) {
        return ticketRepo.save(ticket);

    }

    @Override
    public Ticket saveTicket(Ticket ticket) {
        return ticketRepo.save(ticket);
    }

    @Override
    public List<Ticket> findByDateBetweenAndCustomerIdOrCustomerPhone(Date from, Date to, Customer id, String phone) {
        return ticketRepo.findByDateBetweenAndCustomerIdOrCustomerPhone(from,to,id,phone);
    }


}
