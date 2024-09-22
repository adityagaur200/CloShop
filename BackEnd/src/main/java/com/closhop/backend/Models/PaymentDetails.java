package com.closhop.backend.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "payments")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaymentDetails {

    @Id
    private String id;
    private String orderId;
    private String paymentId;
    private String status;
    private int amount;
    private String currency;

    // Constructors, getters, setters
    public PaymentDetails(String orderId, String paymentId, String status, int amount, String currency) {
        this.orderId = orderId;
        this.paymentId = paymentId;
        this.status = status;
        this.amount = amount;
        this.currency = currency;
    }

    // Getters and Setters
}
