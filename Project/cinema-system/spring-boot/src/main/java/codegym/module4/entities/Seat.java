package codegym.module4.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "seat")
public class Seat {
    public Seat() {
        //do nothing
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "seat_number")
    private int seatNumber;
    @Column(name = "is_booked")
    private boolean isBooked;
    @Column(name = "is_selecting")
    private boolean isSelecting;
    @Column(name = "is_vip")
    private boolean isVip;

    @Column(name = "name")
    private String name;




    @ManyToOne
    @JoinColumn(name = "_row_id")

    private Row row;

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
     * @return the seatNumber
     */
    public int getSeatNumber() {
        return seatNumber;
    }

    /**
     * @param seatNumber the seatNumber to set
     */
    public void setSeatNumber(int seatNumber) {
        this.seatNumber = seatNumber;
    }

    /**
     * @return the isBooked
     */
    public boolean isBooked() {
        return isBooked;
    }

    /**
     * @param isBooked the isBooked to set
     */
    public void setBooked(boolean isBooked) {
        this.isBooked = isBooked;
    }

    /**
     * @return the isSelecting
     */
    public boolean isSelecting() {
        return isSelecting;
    }

    /**
     * @param isSelecting the isSelecting to set
     */
    public void setSelecting(boolean isSelecting) {
        this.isSelecting = isSelecting;
    }

    /**
     * @return the isVip
     */
    public boolean isVip() {
        return isVip;
    }

    /**
     * @param isVip the isVip to set
     */
    public void setVip(boolean isVip) {
        this.isVip = isVip;
    }

    /**
     * @return the _row
     */
    public Row getRow() {
        return row;
    }

    /**
     * @param row the _row to set
     */
    public void setRow(Row row) {
        this.row = row;
    }

    /**
     * @return the tickets
     */
    public List<Ticket> getTickets() {
        return tickets;
    }

    public String isName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    /**
     * @param tickets the tickets to set
     */


    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }

    public String getName()
    {
        return this.name;
    }


}