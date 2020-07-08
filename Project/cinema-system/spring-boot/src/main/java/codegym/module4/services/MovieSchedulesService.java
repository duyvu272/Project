package codegym.module4.services;

import codegym.module4.entities.Movie;
import codegym.module4.entities.MovieSchedules;

import java.util.List;

public interface MovieSchedulesService
{
    List<MovieSchedules> findAll();

    MovieSchedules findById(int id);

    List<MovieSchedules> findByMovie(Movie movie);

}
