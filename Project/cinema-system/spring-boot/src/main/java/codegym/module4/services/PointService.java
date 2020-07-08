package codegym.module4.services;

import codegym.module4.entities.Customer;
import codegym.module4.entities.Point;

import java.util.Date;
import java.util.List;

public interface PointService
{
    List<Point> findAll();


    List<Point> findPointByCustomer(Customer customer);


    List<Point> findPointByDateFormDate(Date form, Date to, Customer idCustomer, String status);


    //Vu Add
    List<Point> findAllPoint();
    double sumPoint(int id);
    Point save(Point point);
    Point findPointById(int id);
     double subPoint(int id);
    //Vu end
}
