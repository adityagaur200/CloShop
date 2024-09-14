package com.closhop.backend.Models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Products
{
    @Id
    private String id;
    private String Product_Name;
    private String Description;
    private double Price;
    private int Quantity;
    private String Size;
//    @Setter
//    @Getter
//    private List<String> imageNames;
//    @Setter
//    @Getter
//    private List<String> imageTypes;
//    @Setter
//    @Getter
//    private List<byte[]> images;

}
