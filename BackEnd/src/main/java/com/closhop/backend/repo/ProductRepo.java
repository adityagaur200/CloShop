package com.closhop.backend.repo;

import com.closhop.backend.Models.Products;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface ProductRepo extends MongoRepository<Products,String>
{

    @Query(value = "SELECT p FROM Product p WHERE" + "LOWER(p.name) LIKE LOWER(CONCAT('%',:keyword, '%')) OR " +
            "LOWER(p.description) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
            "LOWER(p.brand) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
            "LOWER(p.category) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<Products> searchproduct(String keyword);
}
