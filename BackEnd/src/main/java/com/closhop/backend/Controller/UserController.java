package com.closhop.backend.Controller;
import com.closhop.backend.Models.Users;
import com.closhop.backend.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/user")
public class UserController
{
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<Users> register(@RequestBody Users user) {
        Users registeredUser = userService.registerUser(user);

        if (registeredUser != null) {
            return ResponseEntity.ok(registeredUser);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }
    @PostMapping("/login")
    public String login(@RequestBody Users user) {

        return userService.verify(user);
    }
    @GetMapping("/All")
    public java.util.List<Users> allUser()
    {
        return userService.getAll();

    }
}
