package codegym.module4.entities;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.sql.Time;
import java.util.List;



@Entity
@Table(name = "showtime")
public class ShowTime {
    public ShowTime() {
        //do nothing
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")

    private int id;
    @Column(name = "hour_start")

    private String hourStart;
    @Column(name = "hour_end")

    private String hourEnd;

    @OneToMany(targetEntity = MovieSchedules.class)
    @JsonIgnore
    private List<MovieSchedules> movieSchedules;





    /**
     * @return the id
     */
    public int getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * @return the hourStart
     */
    public String getHourStart() {
        return hourStart;
    }

    /**
     * @param hourStart the hourStart to set
     */
    public void setHourStart(String hourStart) {
        this.hourStart = hourStart;
    }

    /**
     * @return the hourEnd
     */
    public String getHourEnd() {
        return hourEnd;
    }

    /**
     * @param hourEnd the hourEnd to set
     */
    public void setHourEnd(String hourEnd) {
        this.hourEnd = hourEnd;
    }

    /**
     * @return the movieSchedules
     */
    public List<MovieSchedules> getMovieSchedules() {
        return movieSchedules;
    }

    /**
     * @param movieSchedules the movieSchedules to set
     */
    public void setMovieSchedules(List<MovieSchedules> movieSchedules) {
        this.movieSchedules = movieSchedules;
    }
}