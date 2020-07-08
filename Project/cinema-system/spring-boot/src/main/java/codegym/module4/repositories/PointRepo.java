package codegym.module4.repositories;

import codegym.module4.entities.Customer;
import codegym.module4.entities.Point;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface PointRepo extends JpaRepository<Point,Long>{

    //Vu add
    @Query("select sum(p.pointValue) FROM  Point p WHERE p.customer.id =?1 and p.pointStatus = 'Plus' GROUP BY p.customer")
    double sumPoint(int id);

    @Query("select sum(p.pointValue) FROM  Point p WHERE p.customer.id =?1 and p.pointStatus = 'Use' GROUP BY p.customer")
    double subPoint(int id);

    @Query("SELECT p FROM Point p WHERE p.id =?1")
            Point findPointById(int id);
    //Vu end


//VIET ADD
    List<Point> findByCustomer(Customer idCustomer);
    List<Point> findByDateCreateBetweenAndCustomerAndPointStatus(Date from, Date to, Customer idCustomer, String status);
//VIET END
}
