package codegym.module4.controllers;

import codegym.module4.entities.Customer;
import codegym.module4.entities.Role;
import codegym.module4.entities.User;

import codegym.module4.jwt.jwt_setup.JwtUtils;
import codegym.module4.jwt.payload.request.LoginRequest;

import codegym.module4.jwt.payload.respone.JwtResponse;

import codegym.module4.repositories.RoleRepo;
import codegym.module4.repositories.UserRepo;
import codegym.module4.services.CustomerService;
import codegym.module4.services.Impl.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

import java.util.List;

import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(AuthController.BASE_URL)
public class AuthController {

    public static final String BASE_URL = "/api/v1/auth";

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepo userRepository;

    @Autowired
    RoleRepo roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    private CustomerService customerService;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                roles,
                userDetails.getUsername()));
    }

    @PostMapping("/signup")
    public Customer registerUser(@RequestBody Customer customer) {

            List<Role> roles= customer.getUser().getRoles();
            User user = new User(customer.getUser().getPassword(),customer.getUser().getUsername(),roles);
            user.setPassword(encoder.encode(user.getPassword()));
            customer.setUser(user);
            return customerService.saveCustomer(customer);
    }

}
