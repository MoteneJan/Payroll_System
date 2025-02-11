package com.example.payroll_backend_system.repository;

import com.example.payroll_backend_system.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
