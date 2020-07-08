package codegym.module4.entities;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.List;


@Entity
@Table(name = "customer")
@NamedStoredProcedureQueries(
        @NamedStoredProcedureQuery(
                name = "GetCustomerByTicketId",
                procedureName = "GetCustomerByTicketId",
                resultClasses = {Customer.class},
                parameters = {@StoredProcedureParameter(
                        name = "ticketId", mode = ParameterMode.IN, type = Integer.class
                )}
        )
)
public class Customer
{


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "full_name")
    private String fullName;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Temporal(value = TemporalType.DATE)
    @Column(name = "date_of_birth")
    private Date dateOfBirth;

    @Column(name = "gender")
    private String gender;

    @Column(name = "idCard")
    private String idCard;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;

    @Column(name = "address")
    private String address;


    public List<Point> getPoints() {
        return points;
    }

    public void setPoints(List<Point> points) {
        this.points = points;
    }

    @OneToMany(targetEntity = Point.class)
    @JsonIgnore
//    @JsonBackReference

    private List<Point> points;

    //Vu add them Cascade
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(targetEntity = Ticket.class)


    @JsonIgnore

    private List<Ticket> tickets;


    public Customer(int id, User idUser,
                    String fullName, Date birthday, String gender, String idCard,
                    String email
            , String phone, String address)
    {
        this.id = id;
        this.user = idUser;
        this.fullName = fullName;
        this.dateOfBirth = birthday;
        this.gender = gender;
        this.idCard = idCard;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

    public long getId()
    {
        return id;
    }

    public void setId(int id)
    {
        this.id = id;
    }

    public User getUser()
    {
        return user;
    }

    public void setUser(User idUser)
    {
        this.user = idUser;
    }

    public String getFullName()
    {
        return fullName;
    }

    public void setFullName(String fullName)
    {
        this.fullName = fullName;
    }

    public Date getBirthday()
    {
        return dateOfBirth;
    }

    public void setBirthday(Date birthday)
    {
        this.dateOfBirth = birthday;
    }

    public String getGender()
    {
        return gender;
    }

    public void setGender(String gender)
    {
        this.gender = gender;
    }

    public String getIdCard()
    {
        return idCard;
    }

    public void setIdCard(String idCard)
    {
        this.idCard = idCard;
    }

    public String getEmail()
    {
        return email;
    }

    public void setEmail(String email)
    {
        this.email = email;
    }

    public String getPhone()
    {
        return phone;
    }

    public void setPhone(String phone)
    {
        this.phone = phone;
    }

    public String getAddress()
    {
        return address;
    }

    public void setAddress(String address)
    {
        this.address = address;
    }

    public Customer()
    {
    }


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

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }



}
