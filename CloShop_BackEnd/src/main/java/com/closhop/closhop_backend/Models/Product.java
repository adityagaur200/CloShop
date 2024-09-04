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
public class Product
{
    @Id
    private String Product_id;
    private String Product_Name;
    private String Description;
    private String Category;
    private double Price;
    private int Quantity;
    private String Size;
    private String ImageName;
    private String Imagetype;
    private byte[] Image;
}
