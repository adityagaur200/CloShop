package com.closhop.closhop_backend.Repo;

import com.closhop.closhop_backend.Models.Users;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends MongoRepository<Users, String>
{
}
