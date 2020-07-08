package codegym.module4.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "show_room")
public class ShowRoom {
    public ShowRoom() {
        //do nothing
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;


    @Column(name = "screen")
    private String screen;

    @OneToMany(targetEntity = Row.class)
    @JsonIgnore
    private List<Row> rows;

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
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the screen
     */
    public String getScreen() {
        return screen;
    }

    /**
     * @param screen the screen to set
     */
    public void setScreen(String screen) {
        this.screen = screen;
    }

    /**
     * @return the _rows
     */
    public List<Row> getRows() {
        return rows;
    }

    /**
     * @param rows the _rows to set
     */
    public void setRows(List<Row> rows) {
        this.rows = rows;
    }

}