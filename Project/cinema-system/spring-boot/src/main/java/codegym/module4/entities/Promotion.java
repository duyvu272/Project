package codegym.module4.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "promotion")
public class Promotion
{


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    public Promotion()
    {
        //do nothing
    }

    @DateTimeFormat(pattern = "yyyy-MM-dd")

    @Temporal(value = TemporalType.DATE)
    @Column(name = "promotion_end_date")
    private Date promotionEndDate;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Temporal(value = TemporalType.DATE)
    @Column(name = "promotion_begin_date")
    private Date promotionBeginDate;

    @Column(name="promotion_discount")
    private int promotionDiscount;

    @Column(name="promotion_title")
    private String promotionTitle;

    @Column(name="promotion_description")
    private String promotionDescription;


    @Column(name = "promotion_image")
    private String promotionImage;


    @OneToMany(targetEntity = Ticket.class)
    @JsonIgnore
    private List<Ticket> tickets;


    public int getId(){
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public Date getPromotionEndDate(){
        return promotionEndDate;
    }

    public void setPromotionEndDate(Date promotionEndDate){
        this.promotionEndDate = promotionEndDate;
    }

    public Date getPromotionBeginDate(){
        return promotionBeginDate;
    }

    public void setPromotionBeginDate(Date promotionBeginDate){
        this.promotionBeginDate = promotionBeginDate;
    }

    public int getPromotionDiscount(){
        return promotionDiscount;
    }

    public void setPromotionDiscount(int promotionDiscount){
        this.promotionDiscount = promotionDiscount;
    }

    public String getPromotionTitle(){
        return promotionTitle;
    }

    public void setPromotionTitle(String promotionTitle){
        this.promotionTitle = promotionTitle;
    }

    public String getPromotionDescription(){
        return promotionDescription;
    }

    public void setPromotionDescription(String promotionDescription){
        this.promotionDescription = promotionDescription;
    }

    public String getPromotionImage(){
        return promotionImage;
    }

    public void setPromotionImage(String promotionImage){
        this.promotionImage = promotionImage;
    }
//
//    public List< Ticket > getTickets(){
//        return tickets;
//    }
//
//    public void setTickets(List< Ticket > tickets){
//        this.tickets = tickets;
//    }
}