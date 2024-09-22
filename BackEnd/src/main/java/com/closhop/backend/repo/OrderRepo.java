package com.closhop.backend.repo;

import com.closhop.backend.Models.OrderDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepo extends MongoRepository<OrderDetails, String>{

}
