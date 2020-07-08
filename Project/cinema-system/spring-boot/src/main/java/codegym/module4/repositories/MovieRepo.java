package codegym.module4.repositories;

import codegym.module4.entities.Movie;
import codegym.module4.entities.MovieSchedules;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepo extends JpaRepository<Movie,Integer>
{
    Movie findByMovieSchedules(MovieSchedules movieSchedules);
}
