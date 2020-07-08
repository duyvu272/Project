package codegym.module4.services.Impl;

import codegym.module4.entities.TicketPrices;
import codegym.module4.repositories.TicketPricesRepo;
import codegym.module4.services.TicketPricesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class TicketPricesServiceImpl implements TicketPricesService
{
    @Autowired
    private TicketPricesRepo ticketPricesRepo;
    @Override
    public List<TicketPrices> findAll()
    {
        return ticketPricesRepo.findAll();
    }
}
