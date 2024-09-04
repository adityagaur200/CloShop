package com.closhop.closhop_backend.Controller;

import com.closhop.closhop_backend.Models.Orders;
import com.closhop.closhop_backend.Services.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/Orders/")
public class OrdersController
{
    @Autowired
    private OrdersService ordersService;

    @GetMapping("/GetOrders")
    public Orders GetOrders()
    {
        return ordersService.getAllOrders();
    }

    @GetMapping("/GetOrders/{id}")
    public Orders GetOrdersById(@PathVariable int id)
    {
        return ordersService.getOrderById(id);
    }

    @PostMapping("/AddOrder")
    public Orders AddOrder(@RequestBody Orders order)
    {
        return ordersService.AddOrder(order);
    }
}
