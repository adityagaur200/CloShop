package com.closhop.backend.repo;

import com.closhop.backend.Models.PaymentDetails;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PaymentRepository extends MongoRepository<PaymentDetails, String> {
}
