package com.closhop.closhop_backend.Controller;

import com.closhop.closhop_backend.Models.Product;
import com.closhop.closhop_backend.Services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/Products")
@CrossOrigin
public class ProductController
{
    @Autowired
    private ProductService productService;
    @PostMapping("/AddProduct")
   public ResponseEntity<?> addProduct(@RequestBody Product product,@RequestPart MultipartFile image)
    {
        try{
            Product product1 = productService.addAllProduct(product,image);
            return ResponseEntity.ok().body(product1);
        }
        catch(Exception e)
        {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    @GetMapping("/GetProduct")
    public List<Product> getAllProducts()
    {
        return productService.getAllProducts();
    }
    @PostMapping("/UpdateProduct")
    public ResponseEntity<?> updateProduct(@RequestBody Product product,@RequestPart MultipartFile image)
    {
        Product product1=null;
        try {
            product1 = productService.updateProduct(product,image);
        }
        catch (IOException e)
        {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        if (product1 != null)
            return ResponseEntity.ok().body(product1);
        else
            return ResponseEntity.notFound().build();

    }
    @DeleteMapping("/deleteProduct/{id}")
    public ResponseEntity<?> DeleteProduct(@PathVariable String id)
    {
        Product product=productService.getProductById(id);
        if(product!=null)
        {
            productService.deleteProduct(id);
            return ResponseEntity.ok().build();
        }
        else
            return ResponseEntity.notFound().build();
    }

    @GetMapping("/GetProduct/{id}")
    public Product getProductById(@PathVariable String id)
    {
        return productService.getProductById(id);
    }

    @GetMapping("/GetProduct/{category}")
    public List<Product> getProductByCategory(@PathVariable String category)
    {
        return productService.GetbyCategory(category);
    }
    @GetMapping("/search")
    public ResponseEntity<List<Product>> searchProducts(@RequestParam String keyword)
    {
        List<Product> products=productService.searchProducts(keyword);
        return ResponseEntity.ok().body(products);
    }

}
