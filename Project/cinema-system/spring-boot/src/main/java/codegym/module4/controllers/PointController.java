package codegym.module4.controllers;


import codegym.module4.entities.Customer;
import codegym.module4.entities.Point;
import codegym.module4.services.PointService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(PointController.BASE_URL)
public class PointController {

    public static final String BASE_URL = "/api/v1/point";
    private final PointService pointService;

    public PointController(PointService pointService) {
        this.pointService = pointService;
    }

    @GetMapping
    public List<Point> getAllPoint() {
        return pointService.findAllPoint();
    }


    @GetMapping("/{id}")
    public List<Point> getPointDetails(@PathVariable Customer id) {
        return pointService.findPointByCustomer(id);
    }


    @GetMapping("{id}/{from}/{to}/{status}")
    public List<Point> getPointDetailsDate(@PathVariable Customer id, @PathVariable("from") @DateTimeFormat(pattern="yyyy-MM-dd") Date from, @PathVariable("to") @DateTimeFormat(pattern="yyyy-MM-dd") Date to
            , @PathVariable String status) {
        return pointService.findPointByDateFormDate(from, to, id ,status);
    }
    @GetMapping("/{id}/point-value")
    public double getPointByCustomer(@PathVariable int id){
        return pointService.sumPoint(id);
    }

    @GetMapping("/{id}/sub-point")
    public double getSubPointByCustomer(@PathVariable int id){
        return pointService.subPoint(id);
    }

    @PostMapping("/create")
    public Point addNewPoint(@RequestBody Point point){
        return pointService.save(point);
    }

    @GetMapping("find-point/{id}")
    public Point findPointByIdCustomers(@PathVariable int id){
        return pointService.findPointById(id);
    }

}
