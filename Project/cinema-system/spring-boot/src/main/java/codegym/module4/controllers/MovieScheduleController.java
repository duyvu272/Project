package codegym.module4.controllers;


import codegym.module4.entities.Customer;
import codegym.module4.entities.MovieSchedules;
import codegym.module4.services.CustomerService;
import codegym.module4.services.MovieSchedulesService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(MovieScheduleController.BASE_URL)
public class MovieScheduleController {


    public static final String BASE_URL = "/api/v1/movieSchedules";


    private final MovieSchedulesService movieSchedulesService;


    public MovieScheduleController(MovieSchedulesService movieSchedulesService) {
        this.movieSchedulesService = movieSchedulesService;
    }

    @GetMapping
    public List<MovieSchedules> getAllMovieSchedule() {
        return movieSchedulesService.findAll();
    }



}
