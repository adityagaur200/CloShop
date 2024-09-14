package com.closhop.backend.Services;

import com.closhop.backend.Models.Products;
import com.closhop.backend.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServices {
    @Autowired
    private ProductRepo productRepo;
    public Products addProduct(Products products) {
        return productRepo.save(products);
    }

    public List<Products> getall() {
        return productRepo.findAll();
    }


    public void deleteProducts(Products products) {
        productRepo.delete(products);
    }

    public Products getbyId(String id){
        Optional<Products> Product1 = productRepo.findById(id);
        return Product1.get();
    }

    public List<Products> searchBykeyWord(String keyword) {
        return productRepo.searchproduct(keyword);
    }

    public Products updatedProduct(Products products) {
        return productRepo.save(products);
    }
}
