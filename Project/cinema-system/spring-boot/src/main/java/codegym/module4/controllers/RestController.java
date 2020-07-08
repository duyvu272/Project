package codegym.module4.controllers;

import codegym.module4.entities.*;
import codegym.module4.repositories.EmployeeRepo;
import codegym.module4.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;


import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.StoredProcedureQuery;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@org.springframework.web.bind.annotation.RestController
@CrossOrigin(origins = "*")
public class RestController
{
    @Autowired
    private TicketService ticketService;

    @Autowired
    private MovieSchedulesService movieSchedulesService;

    @Autowired
    private MovieService movieService;

    @Autowired
    private EmployeeRepo employeeRepo;

    @Autowired
    private UserService userService;

    @Autowired
    private CustomerService customerService;

    @Autowired
    private PointService pointService;

    @Autowired
    private PromotionService promotionService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private SeatService seatService;

    @Autowired
    private ShowRoomService showRoomService;

    @Autowired
    private ShowTimeService showTimeService;

    @Autowired
    private TicketPricesService ticketPricesService;

    @Autowired
    private RowService rowService;


    @PersistenceContext
    private EntityManager entityManager;

    @GetMapping(value = "/tickets", produces = "application/json")
    public ResponseEntity<List<Ticket>> getAllTickets()

    {
        List<Ticket> tickets=ticketService.findAll();

        if(tickets.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
            return new ResponseEntity<>(tickets,HttpStatus.OK);
    }

    @GetMapping(value = "/tickets/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Ticket> getTicketById(
            @PathVariable("id")Integer id){
        Optional<Ticket> ticket =ticketService.findById(id);

        if (!ticket.isPresent()) {
            return new ResponseEntity<>(ticket.get(),
                    HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(ticket.get(), HttpStatus.OK);
    }

    @GetMapping(path = "movie-schedules", produces = "application/json")
    public List<MovieSchedules> getAllMovieSchedules()
    {
        return movieSchedulesService.findAll();
    }

    @GetMapping(path = "movies", produces = "application/json")
    public ResponseEntity<List<Movie>> getAllMovies()
    {
        return new ResponseEntity<>(movieService.findAll(), HttpStatus.OK);
    }

    @GetMapping(path = "employees", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Employee> getAllEmployees()
    {
        return employeeRepo.findAll();
    }


    @GetMapping(path = "users", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<User> getAllUsers()
    {
        return userService.findAll();

    }

    @GetMapping(path = "customers", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Customer> getAllCustomers()
    {
        return customerService.findAll();
    }

    @GetMapping(path = "points", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Point> getAllPoints()
    {
        return pointService.findAll();
    }

    @GetMapping(path = "promotions", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Promotion> getAllPromotions()
    {
        return promotionService.findAll();
    }

    @GetMapping(path = "roles", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Role> getAllRoles()
    {
        return roleService.findAll();
    }

    @GetMapping(path = "seats", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Seat> getAllSeats()
    {
        return seatService.findAll();
    }

    @GetMapping(path = "show-rooms", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<ShowRoom> getAllShowRooms()
    {
        return showRoomService.findAll();
    }

    @GetMapping(path = "show-times", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<ShowTime> getAllShowTimes()
    {
        return showTimeService.findAll();
    }

    @GetMapping(path = "ticket-prices", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<TicketPrices> getAllTicketPrices()
    {
        return ticketPricesService.findAll();
    }

    @GetMapping(path = "rows", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Row> getAllRows()
    {
        return rowService.findAll();
    }


//    @GetMapping(path = "tickets/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
//    public Ticket getTicketById(@PathVariable int id)
//    {
//        return ticketService.findById(id);
//    }

    @GetMapping(path = "show-rooms/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ShowRoom getShowRoomById(@PathVariable int id)
    {
        return this.showRoomService.findById(id);
    }

    @GetMapping(path = "movies/movie-schedules/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Movie> getMovieByMovieSchedules(@PathVariable int id)
    {
        StoredProcedureQuery spQuery =
                entityManager.createNamedStoredProcedureQuery("GetMovieByMovieScheduleId");
        spQuery.setParameter("movieScheduleId", id);
        spQuery.execute();

        return new ArrayList<Movie>(spQuery.getResultList());
    }

    @GetMapping(path = "movie-schedules/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public MovieSchedules getMovieSchedulesById(@PathVariable int id)
    {
        return movieSchedulesService.findById(id);
    }

    @GetMapping(path = "customers/ticket/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Customer> getCustomerByTicketToan(@PathVariable int id)
    {
        StoredProcedureQuery spQuery =
                entityManager.createNamedStoredProcedureQuery("GetCustomerByTicketId");
        spQuery.setParameter("ticketId", id);
        spQuery.execute();

        return new ArrayList<>(spQuery.getResultList());
    }

    @GetMapping(path = "rows/show-room/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Row> getRowsByShowRoomId(@PathVariable int id)
    {
        String sqlQuery = "select *\n" +
                "from _row\n" +
                "where _row.id in (\n" +
                "    select _row.id\n" +
                "    from _row\n" +
                "             inner join show_room sr on _row.show_room_id = sr.id and sr.id = " + id + "\n" +
                ");\n";
        Query query = entityManager.createNativeQuery(sqlQuery, Row.class);
        return new ArrayList<>(query.getResultList());
    }

    @GetMapping(path = "seats/row/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Seat> getSeatsByRowId(@PathVariable int id)
    {
        String sqlQuery = "    select *\n" +
                "    from seat\n" +
                "    where seat.id in (\n" +
                "        select seat.id\n" +
                "        from seat\n" +
                "                 inner join _row r on seat._row_id = r.id and r.id=" + id + "\n" +
                "    );\n";

        Query query = entityManager.createNativeQuery(sqlQuery, Seat.class);
        return new ArrayList<>(query.getResultList());
    }


    @PostMapping(path = "users/new", produces = MediaType.APPLICATION_JSON_VALUE)
    public User newUser(@RequestBody User user)
    {
        Role roleAdmin = roleService.findById(1);
        List<Role> roles = new ArrayList<>();
        roles.add(roleAdmin);
        user.setRoles(roles);

        return userService.save(user);
    }
    @GetMapping("roles")
        public List<Role> getAllRole(){
        return roleService.findAll();
        }


    @GetMapping(path = "/roles/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Role getRoleById(@PathVariable int id)
    {
        return roleService.findById(id);
    }

    @GetMapping(path="tickets/empty",produces = MediaType.APPLICATION_JSON_VALUE)
    public Ticket getEmptyTicket(){
        return new Ticket();
    }

    @GetMapping(path = "movie-schedules/empty",produces = MediaType.APPLICATION_JSON_VALUE)
    public MovieSchedules getEmptyMovieSchedule(){
        return new MovieSchedules();
    }

    @GetMapping(path = "rowsByShowRoom/{id}")
    public List<Row> getRowByShowRoom(@PathVariable ShowRoom id){

        return rowService.findByShowRoom(id);
    }
    @PostMapping(path = "show-rooms")
    public ShowRoom CreatShowroom(@RequestBody ShowRoom showRoom){
        return showRoomService.creat(showRoom);
    }

    @PutMapping(path = "seats/{id}")
    public Seat UpdateSeat(@PathVariable int id,@RequestBody Seat seat){
        Seat seatUpdate= seatService.findById(id);
        seatUpdate.setVip(seat.isVip());
        return seatService.updateSeat(seatUpdate);
    }

    @PostMapping(path = "seats")
    public Seat CreatSeats(@RequestBody Seat seat){
        return seatService.updateSeat(seat);
    }

    @PostMapping(path = "promotion/new")
    public Promotion CreatSeats(@RequestBody Promotion promotion){
        return promotionService.save(promotion);
    }
}

