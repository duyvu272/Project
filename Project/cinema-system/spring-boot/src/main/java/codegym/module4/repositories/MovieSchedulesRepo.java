package codegym.module4.repositories;

import codegym.module4.entities.Movie;
import codegym.module4.entities.MovieSchedules;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieSchedulesRepo extends JpaRepository<MovieSchedules,Integer>
{

    List<MovieSchedules> findByMovie(Movie movie);

}
