package codegym.module4.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;
import java.util.List;


@Entity
@Table(name = "movie_schedule")
public class MovieSchedules {
    public MovieSchedules() {
        // Do nothing because of X and Y
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")

    private int id;
    @Column(name = "opening_day")

    private Date openingDay;

    @ManyToOne
    @JoinColumn(name = "show_time_id")

    private ShowTime showTime;

    @ManyToOne
    @JoinColumn(name = "movie_id")

    private Movie movie;


    @OneToMany(targetEntity = Ticket.class)
    @JsonIgnore
    private List<Ticket> tickets;
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
     * @return the openingDay
     */
    public Date getOpeningDay() {
        return openingDay;
    }

    /**
     * @param openingDay the openingDay to set
     */
    public void setOpeningDay(Date openingDay) {
        this.openingDay = openingDay;
    }

    /**
     * @return the showTime
     */
    public ShowTime getShowTime() {
        return showTime;
    }

    /**
     * @param showTime the showTime to set
     */
    public void setShowTime(ShowTime showTime) {
        this.showTime = showTime;
    }

    /**
     * @return the movie
     */
    public Movie getMovie() {
        return movie;
    }

    /**
     * @param movie the movie to set
     */
    public void setMovie(Movie movie) {
        this.movie = movie;
    }


    public List< Ticket > getTickets(){
        return tickets;
    }

    public void setTickets(List< Ticket > tickets){
        this.tickets = tickets;
    }
}