package com.closhop.backend.Services;

import com.closhop.backend.Models.Orders;
import com.closhop.backend.repo.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.util.List;

@Service
public class OrderService
{
    @Autowired
    private OrderRepo orderRepo;

    public Orders Placeorder(Orders order) {
        return orderRepo.save(order);
    }


    public List<Orders> getAll() {
        return orderRepo.findAll();
    }
    public Orders getOrderById(String order_id) {
        return orderRepo.findById(order_id).get();
    }
}
