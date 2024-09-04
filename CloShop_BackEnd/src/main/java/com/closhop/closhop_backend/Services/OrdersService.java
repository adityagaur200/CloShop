package com.closhop.closhop_backend.Services;

import com.closhop.closhop_backend.Models.Orders;
import com.closhop.closhop_backend.Repo.OrdersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrdersService
{
    @Autowired
    private OrdersRepo ordersRepo;
    public Orders getAllOrders() {
        return ordersRepo.findAll().get(0);
    }
    public Orders getOrderById(int id) {
        return ordersRepo.findById(id);
    }

    public Orders AddOrder(Orders order) {
            return ordersRepo.save(order);
    }
}
