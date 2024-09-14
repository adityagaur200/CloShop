package com.closhop.backend.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
@NoArgsConstructor
@AllArgsConstructor
public class Orders
{
    @Id
    private int order_id;
    private int customer_id;
    private String customer_name;
    private String order_date;
    private Double total;
    private String phone;
    private String Address;
    private String email;
}
