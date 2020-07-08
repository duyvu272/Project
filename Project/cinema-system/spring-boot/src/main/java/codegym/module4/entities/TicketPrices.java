package codegym.module4.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;



@Entity
@Table(name = "ticket_price")
public class TicketPrices {
    public TicketPrices() {
        //do nothing
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "ticket_type")
    private String ticketType;
    @Column(name = "show_time")
    private String showTime;

    @Column(name = "thu245gt")
    private double thu245gt;

    @Column(name = "thu245gv")
    private double thu245gv;


    @Column(name = "thu3gt")
    private double thu3gt;

    @Column(name = "thu3gv")
    private double thu3gv;



    @Column(name = "thu67CNgt")
    private double thu67CNgt;

    @Column(name = "thu67CNgv")
    private double thu67CNgv;



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
     * @return the ticketType
     */
    public String getTicketType() {
        return ticketType;
    }

    /**
     * @param ticketType the ticketType to set
     */
    public void setTicketType(String ticketType) {
        this.ticketType = ticketType;
    }

    /**
     * @return the showTime
     */
    public String getShowTime() {
        return showTime;
    }

    /**
     * @param showTime the showTime to set
     */
    public void setShowTime(String showTime) {
        this.showTime = showTime;
    }


    /**
     * @return the thu3gt
     */
    public double getThu3gt() {
        return thu3gt;
    }

    /**
     * @param thu3gt the thu3gt to set
     */
    public void setThu3gt(double thu3gt) {
        this.thu3gt = thu3gt;
    }

    /**
     * @return the thu3gv
     */
    public double getThu3gv() {
        return thu3gv;
    }

    /**
     * @param thu3gv the thu3gv to set
     */
    public void setThu3gv(double thu3gv) {
        this.thu3gv = thu3gv;
    }

    /**
     * @return the thu3gd
     */
    public double getThu245gt() {
        return thu245gt;
    }

    public void setThu245gt(double thu245gt) {
        this.thu245gt = thu245gt;
    }

    public double getThu245gv() {
        return thu245gv;
    }

    public void setThu245gv(double thu245gv) {
        this.thu245gv = thu245gv;
    }

    /**
     * @return the thu67CNgt
     */
    public double getThu67CNgt() {
        return thu67CNgt;
    }

    /**
     * @param thu67cNgt the thu67CNgt to set
     */
    public void setThu67CNgt(double thu67cNgt) {
        thu67CNgt = thu67cNgt;
    }

    /**
     * @return the thu67CNgv
     */
    public double getThu67CNgv() {
        return thu67CNgv;
    }

    /**
     * @param thu67cNgv the thu67CNgv to set
     */
    public void setThu67CNgv(double thu67cNgv) {
        thu67CNgv = thu67cNgv;
    }

    /**
     * @return the thu67CNgd
     */

    /**
     * @return the tickets
     */
    public List<Ticket> getTickets() {
        return tickets;
    }

    /**
     * @param tickets the tickets to set
     */
    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }
}
