package codegym.module4.services.Impl;

import codegym.module4.entities.Movie;
import codegym.module4.entities.MovieSchedules;
import codegym.module4.repositories.MovieSchedulesRepo;
import codegym.module4.services.MovieSchedulesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class MovieSchedulesServiceImpl implements MovieSchedulesService
{
    @Autowired
    private MovieSchedulesRepo movieSchedulesRepo;


    @Override
    public List<MovieSchedules> findAll()
    {
        return movieSchedulesRepo.findAll();
    }

    @Override

    public MovieSchedules findById(int id){
        return movieSchedulesRepo.findById(id).orElse(null);
    }
    public List<MovieSchedules> findByMovie(Movie movie) {
        return movieSchedulesRepo.findByMovie(movie);

    }
}
