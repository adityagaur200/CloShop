package com.closhop.backend.Controller;

import com.closhop.backend.Models.OrderDetails;
import com.closhop.backend.Services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
@CrossOrigin
public class OrderController
{
    @Autowired
    private OrderService orderService;

    @PostMapping("/Place_Order")
    public OrderDetails PlaceOrder(@RequestBody OrderDetails order)
    {
        return orderService.Placeorder(order);
    }

    @GetMapping("/All_Orders")
    public List<OrderDetails> getall()
    {
        return orderService.getAll();
    }
    @GetMapping("/OrderById/{order_id}")
    public OrderDetails getOrderById(@PathVariable String order_id)
    {
        return orderService.getOrderById(order_id);
    }
}
