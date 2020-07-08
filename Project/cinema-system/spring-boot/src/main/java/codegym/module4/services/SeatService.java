package codegym.module4.services;

import codegym.module4.entities.Seat;

import java.util.List;

public interface SeatService
{
    List<Seat> findAll();
    Seat updateSeat(Seat seat);
    Seat findById(int id);
}
