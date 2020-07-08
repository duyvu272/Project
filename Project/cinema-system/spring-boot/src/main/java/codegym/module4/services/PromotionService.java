package codegym.module4.services;

import codegym.module4.entities.Movie;
import codegym.module4.entities.Promotion;
import codegym.module4.entities.Seat;

import java.util.List;
import java.util.Optional;

public interface PromotionService
{
    List<Promotion> findAll();

    Promotion save(Promotion promotion);


    Optional<Promotion> findById(int id);
    void saveL(Promotion promotion);
    void remove(Promotion promotion);


}
