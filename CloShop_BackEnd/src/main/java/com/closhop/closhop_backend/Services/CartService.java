package com.closhop.closhop_backend.Services;

import com.closhop.closhop_backend.Models.Cart;
import com.closhop.closhop_backend.Repo.CartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService
{
    @Autowired
    private CartRepo cartRepo;
    public Cart AddCart(Cart cart) {
        return cartRepo.save(cart);
    }
    public Cart GetCart(int id) {
        return cartRepo.findById(id);
    }
}
