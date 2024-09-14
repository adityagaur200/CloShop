package com.closhop.backend.Controller;

import com.closhop.backend.Models.Products;
import com.closhop.backend.Services.ProductServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173", methods = {RequestMethod.GET, RequestMethod.POST})
@RequestMapping("/Products")
public class ProductController
{
    @Autowired
    private ProductServices productServices;

    @PostMapping("/Add")
    public ResponseEntity<?> addProducts(@RequestBody Products products)
    {
        try {
            Products Product = productServices.addProduct(products);
            return ResponseEntity.ok().body(Product);
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/all")
    public List<Products> getAll()
    {
        return productServices.getall();
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteProducts(@RequestBody Products products)
    {
        try {
            productServices.deleteProducts(products);
            return ResponseEntity.ok().body(products);
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/product/{id}")
    public Products getProductById(@PathVariable String id)
    {
       return productServices.getbyId(id);
    }

    @GetMapping("/search")
    public List<Products> searchProduct(@RequestParam String keyword)
    {
        return productServices.searchBykeyWord(keyword);
    }

    @PostMapping("/update")
    public Products updatedProduct(@RequestBody Products products)
    {
        return productServices.updatedProduct(products);
    }
}
