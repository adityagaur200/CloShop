package com.closhop.closhop_backend.Services;

import com.closhop.closhop_backend.Models.Product;
import com.closhop.closhop_backend.Repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class ProductService
{
    @Autowired
    private ProductRepo productRepo;


    public Product addAllProduct(Product product, MultipartFile image) throws IOException {
        product.setImageName(image.getOriginalFilename());
        product.setImagetype(image.getContentType());
        product.setImage(image.getBytes());
        return productRepo.save(product);
    }


    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    public Product updateProduct(Product product, MultipartFile image) throws IOException {
        product.setImageName(image.getOriginalFilename());
        product.setImagetype(image.getContentType());
        product.setImage(image.getBytes());
        return productRepo.save(product);
    }
    public void deleteProduct(String id) {
        productRepo.deleteById(id);
    }

    public Product getProductById(String id) {
        return productRepo.findById(id).get();
    }


    public List<Product> GetbyCategory(String category) {
        return productRepo.findAllbyCategory(category);
    }
    public List<Product> searchProducts(String keyword) {
        return productRepo.searchProducts(keyword);
    }
}
