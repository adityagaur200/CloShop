package com.closhop.closhop_backend.Controller;

import com.closhop.closhop_backend.Models.Cart;
import com.closhop.closhop_backend.Services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/Cart/")
public class CartController
{
    @Autowired
    private CartService cartService;

    @PostMapping("/CartAdd")
    public Cart CartAdd(Cart cart)
    {
        return cartService.AddCart(cart);
    }
    @GetMapping("/CartAll/{id}")
    public Cart CartById(@PathVariable int id)
    {
        return cartService.GetCart(id);
    }


}
