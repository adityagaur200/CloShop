package com.closhop.backend.Controller;
import com.closhop.backend.Models.Users;
import com.closhop.backend.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
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
}
