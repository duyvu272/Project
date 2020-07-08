package codegym.module4.services.Impl;

import codegym.module4.entities.Movie;
import codegym.module4.entities.MovieSchedules;
import codegym.module4.repositories.MovieRepo;
import codegym.module4.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class MovieServiceImpl implements MovieService
{
    @Autowired
    private MovieRepo movieRepo;
    @Override
    public List<Movie> findAll()
    {
        return movieRepo.findAll();
    }

    @Override

    public Movie findByMovieSchedules(MovieSchedules movieSchedules){
        return movieRepo.findByMovieSchedules(movieSchedules);
    }
    public Optional<Movie> findById(int id) {
        return movieRepo.findById(id);

    }

    @Override
    public void save(Movie movie) {
        movieRepo.save(movie);
    }

    @Override
    public void remove(int id) {
        movieRepo.deleteById(id);
    }
}
