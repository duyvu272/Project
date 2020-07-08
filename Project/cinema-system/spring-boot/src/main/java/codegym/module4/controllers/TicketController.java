package codegym.module4.controllers;


import codegym.module4.entities.Customer;
import codegym.module4.entities.Ticket;
import codegym.module4.entities.User;
import codegym.module4.services.CustomerService;
import codegym.module4.services.TicketService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import javax.xml.crypto.Data;
import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(TicketController.BASE_URL)
public class TicketController {


    public static final String BASE_URL = "/api/v1/ticket";


    private final TicketService ticketService;
    private CustomerService customerService;


    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }


    @GetMapping
    public List<Ticket> getAllTicket(){
        return ticketService.findAll();
    }

    @GetMapping(path = "/{id}/{status}")
    public List<Ticket> getPointDetails(@PathVariable Customer id, @PathVariable String status) {
        return ticketService.findByCustomerAndOrderStatus(id,status);
    }

    @GetMapping("/{id}")
    public Ticket getTicketById(@PathVariable int id){
        return ticketService.findById(id);
    }



    @PostMapping(value="/new")
    public Ticket newTicket(@RequestBody Ticket ticket)
    {
        return ticketService.Creat(ticket);
    }

    @RequestMapping(value="/new1", method= RequestMethod.POST, consumes = { MediaType.APPLICATION_JSON_VALUE}, produces = { MediaType.APPLICATION_JSON_VALUE})
    public HttpStatus addTheatre(@RequestBody Ticket ticket ) {
        ticketService.Creat(ticket);
        return HttpStatus.OK;

    }



    @PatchMapping("/update-order-status/{id}")
    public Ticket updateUser(@PathVariable int id) {
        Ticket ticket = ticketService.findById(id);
        ticket.setOrderStatus("done");
        ticketService.saveTicket(ticket);
        return ticketService.findById(id);
    }

    @GetMapping("/{id}/{from}/{to}/{phone}")

    public List<Ticket> findAdvanced(@PathVariable int id, @PathVariable("from") @DateTimeFormat(pattern="yyyy-MM-dd")
            Date from, @PathVariable("to") @DateTimeFormat(pattern="yyyy-MM-dd") Date to, @PathVariable String phone){
        System.out.println(from);
        System.out.println(to);
        System.out.println(id);
        Customer customer = customerService.findByIdL(id);
        return ticketService.findByDateBetweenAndCustomerIdOrCustomerPhone(from,to,customer,phone);
    }

}
