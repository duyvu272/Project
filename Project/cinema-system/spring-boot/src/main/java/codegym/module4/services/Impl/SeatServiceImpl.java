package codegym.module4.services.Impl;

import codegym.module4.entities.Seat;
import codegym.module4.repositories.SeatRepo;
import codegym.module4.services.SeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class SeatServiceImpl implements SeatService
{
    @Autowired
    private SeatRepo seatRepo;
    @Override
    public List<Seat> findAll()
    {
        return seatRepo.findAll();
    }

    @Override
    public Seat updateSeat(Seat seat) {
        return seatRepo.save(seat);
    }

    @Override
    public Seat findById(int id) {
        return seatRepo.findById(id).get();
    }
}
