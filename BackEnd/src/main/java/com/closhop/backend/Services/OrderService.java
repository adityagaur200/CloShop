package com.closhop.backend.Services;

import com.closhop.backend.Models.OrderDetails;
import com.closhop.backend.repo.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService
{
    @Autowired
    private OrderRepo orderRepo;

    public OrderDetails Placeorder(OrderDetails order) {
        return orderRepo.save(order);
    }


    public List<OrderDetails> getAll() {
        return orderRepo.findAll();
    }
    public OrderDetails getOrderById(String order_id) {
        return orderRepo.findById(order_id).get();
    }
}
