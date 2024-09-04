package com.closhop.closhop_backend.Repo;

import com.closhop.closhop_backend.Models.Orders;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrdersRepo extends MongoRepository<Orders, String>
{
    default Orders findById(int id) {
        final Orders byId = findById(id);
        return  byId;
    }
}
