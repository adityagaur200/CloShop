package com.closhop.backend.Controller;

import com.closhop.backend.Models.Carts;
import com.closhop.backend.Services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/Cart")
public class CartController
{
    @Autowired
    private CartService cartService;

    @GetMapping("/all")
    public List<Carts> getall()
    {
        return cartService.getAll();
    }

    @PostMapping("/add")
    public Carts addAll(@RequestBody Carts cart)
    {
        return cartService.addProduct(cart);
    }

    @DeleteMapping("/delete")
    public Carts deleteProduct(@RequestBody Carts cart)
    {
        return cartService.deleteproduct(cart);
    }
}
