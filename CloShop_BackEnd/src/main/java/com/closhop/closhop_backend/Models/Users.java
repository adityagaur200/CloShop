package com.closhop.closhop_backend.Models;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
@NoArgsConstructor
@AllArgsConstructor
public class Users
{
    @Id
    private String id;
    private String UserName;
    private String FirstName;
    private String LastName;
    private String Password;
    private String Email;
    private String PhoneNumber;
    private String Address;
    private String City;
    private String State;
    private String PinCode;
}
