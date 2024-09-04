package com.closhop.closhop_backend.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
@AllArgsConstructor
@NoArgsConstructor
public class Orders
{
    @Id
    private String orderId;
    private String customerId;
    private String customerName;
    private String customerAddress;
    private String customerPhone;
    private String customerEmail;
    private String orderStatus;
    private String orderDate;
    private String orderTime;
    private Double orderAmount;
}
