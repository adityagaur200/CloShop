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
public class Carts
{
    @Id
    private String cart_id;
    private int quantity;
    private double price;
    private String product_id;
    private String product_name;
}
