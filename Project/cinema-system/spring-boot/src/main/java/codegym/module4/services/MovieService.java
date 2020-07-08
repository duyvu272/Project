package codegym.module4.services;

import codegym.module4.entities.Movie;
import codegym.module4.entities.MovieSchedules;

import java.util.List;
import java.util.Optional;

public interface MovieService
{
    List<Movie> findAll();
    Movie findByMovieSchedules(MovieSchedules movieSchedules);
    Optional<Movie> findById(int id);
     void save(Movie movie);
     void remove(int id);
}
