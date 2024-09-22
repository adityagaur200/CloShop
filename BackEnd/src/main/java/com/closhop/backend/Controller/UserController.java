package com.closhop.backend.Controller;
import com.closhop.backend.Models.Users;
import com.closhop.backend.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.awt.*;

@RestController
@RequestMapping("/")
public class UserController
{
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public Users register (@RequestBody Users user)
    {
        return userService.registerUser(user);
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
