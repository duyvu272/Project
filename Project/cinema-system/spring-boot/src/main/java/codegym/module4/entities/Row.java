package codegym.module4.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "_row")
public class Row
{

    public Row() {
        //do Something
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "show_room_id")

    private ShowRoom showRoom;

    @OneToMany(targetEntity = Seat.class)
    @JsonIgnore
    private List<Seat> seats;

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
     * @return the showRoom
     */
    public ShowRoom getShowRoom() {
        return showRoom;
    }

    /**
     * @param showRoom the showRoom to set
     */
    public void setShowRoom(ShowRoom showRoom) {
        this.showRoom = showRoom;
    }

    /**
     * @return the seats
     */
    public List<Seat> getSeats() {
        return seats;
    }

    /**
     * @param seats the seats to set
     */
    public void setSeats(List<Seat> seats) {
        this.seats = seats;
    }

}