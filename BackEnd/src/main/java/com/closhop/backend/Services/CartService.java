package com.closhop.backend.Services;

import com.closhop.backend.Models.Carts;
import com.closhop.backend.repo.CartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService
{
    @Autowired
    private CartRepo cartRepo;

    public List<Carts> getAll() {
            return cartRepo.findAll();
    }

    public Carts addProduct(Carts cart)
    {
        return cartRepo.save(cart);
    }

    public Carts deleteproduct(Carts cart) {
        cartRepo.delete(cart);
            return cart;
    }
}
