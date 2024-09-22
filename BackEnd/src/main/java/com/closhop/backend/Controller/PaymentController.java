package com.closhop.backend.Controller;

import com.closhop.backend.Models.PaymentDetails;
import com.closhop.backend.repo.PaymentRepository;
import com.razorpay.*;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private PaymentRepository paymentRepository;

    @PostMapping("/createOrder")
    public ResponseEntity<?> createOrder(@RequestBody Map<String, Object> data) throws RazorpayException {
        int amountInRupees = (int) data.get("amount");
        int amountInPaise = amountInRupees * 100;

        RazorpayClient client = new RazorpayClient("rzp_test_bPUZ9ObUiSQJ2u", "Gk0Jxkvaac4geJ35wfIT5RMH");

        JSONObject orderRequest = new JSONObject();
        orderRequest.put("amount", amountInPaise); // Amount in paise
        orderRequest.put("currency", "INR");
        orderRequest.put("receipt", "order_rcptid_11");

        Order order = client.orders.create(orderRequest);


        return new ResponseEntity<>(order.toString(), HttpStatus.OK);
    }

    @PostMapping("/verifyPayment")
    public ResponseEntity<?> verifyPayment(@RequestBody Map<String, Object> paymentData) {

        String razorpayOrderId = (String) paymentData.get("order_id");
        String razorpayPaymentId = (String) paymentData.get("payment_id");
        String razorpayStatus = (String) paymentData.get("status");
        int amount = (int) paymentData.get("amount");
        String currency = (String) paymentData.get("currency");

        PaymentDetails paymentDetails = new PaymentDetails(razorpayOrderId, razorpayPaymentId, razorpayStatus, amount, currency);
        paymentRepository.save(paymentDetails);
        
        return new ResponseEntity<>("Payment details saved successfully!", HttpStatus.OK);
    }
}
