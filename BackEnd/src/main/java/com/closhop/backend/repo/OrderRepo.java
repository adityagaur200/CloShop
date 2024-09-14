package com.closhop.backend.repo;

import com.closhop.backend.Models.Orders;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface OrderRepo extends MongoRepository<Orders, String>{

}
