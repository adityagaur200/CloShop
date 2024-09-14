package com.closhop.backend.Controller;

import com.closhop.backend.Models.Orders;
import com.closhop.backend.Services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.List;

@RestController
@RequestMapping("/order")
@CrossOrigin
public class OrderController
{
    @Autowired
    private OrderService orderService;

    @PostMapping("/Place_Order")
    public Orders PlaceOrder(@RequestBody  Orders order)
    {
        return orderService.Placeorder(order);
    }

    @GetMapping("/All_Orders")
    public List<Orders> getall()
    {
        return orderService.getAll();
    }
    @GetMapping("/OrderById/{order_id}")
    public Orders getOrderById(@PathVariable String order_id)
    {
        return orderService.getOrderById(order_id);
    }
}
