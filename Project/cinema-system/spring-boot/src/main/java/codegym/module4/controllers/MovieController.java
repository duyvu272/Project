package codegym.module4.controllers;

import codegym.module4.entities.Movie;
import codegym.module4.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MovieController {
    @Autowired
    private MovieService movieService;

    @GetMapping(value = "/movies")
    public ResponseEntity<List<Movie>> findAllMovie() {
        List<Movie> movies = movieService.findAll();
        if (movies.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(movies, HttpStatus.OK);
    }

    @GetMapping(value = "/movies/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Movie> getMovieById(
            @PathVariable("id") Integer movie_id) {
        Optional<Movie> movie = movieService.findById(movie_id);

        if (!movie.isPresent()) {
            return new ResponseEntity<>(movie.get(),
                    HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(movie.get(), HttpStatus.OK) ;
    }
    @RequestMapping(value = "/movies",
            method = RequestMethod.POST)
    public ResponseEntity<Movie> createProduct(
            @RequestBody Movie movie,
            UriComponentsBuilder builder) {
        movieService.save(movie);
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/products/{id}")
                .buildAndExpand(movie.getId()).toUri());
        return new ResponseEntity<>(movie, HttpStatus.CREATED);
    }
    @RequestMapping(value = "/movies/{id}",
            method = RequestMethod.PUT)
    public ResponseEntity<Movie> updateProduct(
            @PathVariable("id") Integer id,
            @RequestBody Movie movie) {
        Optional<Movie> currentMovie= movieService
                .findById(id);

        if (!currentMovie.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        currentMovie.get().setMovieName(movie.getMovieName());
        currentMovie.get().setMovieType(movie.getMovieType());
        currentMovie.get().setDateStart(movie.getDateStart());
        currentMovie.get().setDateEnd(movie.getDateEnd());
        currentMovie.get().setMovieStudio(movie.getMovieStudio());
        currentMovie.get().setDirectors(movie.getDirectors());
        currentMovie.get().setActor(movie.getActor());
        currentMovie.get().setDuration(movie.getDuration());
        currentMovie.get().setContent(movie.getContent());
        currentMovie.get().setSrcImg(movie.getSrcImg());
        currentMovie.get().setSrcVideo(movie.getSrcVideo());

        movieService.save(currentMovie.get());
        return new ResponseEntity<>(currentMovie.get(), HttpStatus.OK);
    }
    @RequestMapping(value = "/movies/{id}",
            method = RequestMethod.DELETE)
    public ResponseEntity<Movie> deleteProduct(
            @PathVariable("id") int id) {
        movieService.remove(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
