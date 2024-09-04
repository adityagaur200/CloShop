package com.closhop.closhop_backend.Repo;

import com.closhop.closhop_backend.Models.Cart;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepo extends MongoRepository<Cart, String>
{
    Cart findById(int id);
}
