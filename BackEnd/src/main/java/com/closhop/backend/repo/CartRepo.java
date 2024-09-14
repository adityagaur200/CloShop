package com.closhop.backend.repo;

import com.closhop.backend.Models.Carts;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepo extends MongoRepository<Carts,String> {
    void delete(Carts cart);
}
