package codegym.module4.controllers;

import codegym.module4.entities.Movie;
import codegym.module4.entities.MovieSchedules;
import codegym.module4.services.MovieSchedulesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MovieSchedulesController {
    @Autowired
    private MovieSchedulesService movieScheduleService;

    @GetMapping(value = "/movieSchedules")
    public List<MovieSchedules> findAllService() {
        return movieScheduleService.findAll();
    }

    @GetMapping(value = "/movieSchedules/hour/{id}")
    public List<MovieSchedules> findByMovieId(@PathVariable Movie id){
        return movieScheduleService.findByMovie(id) ;
    }

}
