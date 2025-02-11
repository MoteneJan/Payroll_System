import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeForm from "./EmployeeForm";
import EmployeeTable from "./EmployeeTable";

const MainComponent = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    position: "",
    salary: "",
    hireDate: "",
    email: "",
    phone: "",
    department: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch employees from the backend
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/employees");
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      if (editingId) {
        await axios.put(`http://localhost:8080/api/v/employees/${editingId}`, formData);
        setSuccess("Employee updated successfully!");
      } else {
        await axios.post("http://localhost:8080/api/v1/employees", formData);
        setSuccess("Employee added successfully!");
      }
      fetchEmployees(); // Refresh the employee list
      setFormData({
        firstName: "",
        lastName: "",
        position: "",
        salary: "",
        hireDate: "",
        email: "",
        phone: "",
        department: "",
      });
      setEditingId(null);
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Error saving employee:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (employee) => {
    setFormData(employee);
    setEditingId(employee.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/employees/${id}`);
      fetchEmployees(); // Refresh the employee list
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  );

  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    if (!sortConfig.key) return 0;

    if (sortConfig.key === "salary") {
      return sortConfig.direction === "ascending"
        ? Number(a[sortConfig.key]) - Number(b[sortConfig.key])
        : Number(b[sortConfig.key]) - Number(a[sortConfig.key]);
    }

    return sortConfig.direction === "ascending"
      ? String(a[sortConfig.key]).localeCompare(String(b[sortConfig.key]))
      : String(b[sortConfig.key]).localeCompare(String(a[sortConfig.key]));
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 font-roboto">
          Payroll Management System
        </h1>
        <EmployeeForm
          formData={formData}
          editingId={editingId}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          setEditingId={setEditingId}
          setFormData={setFormData}
          isLoading={isLoading}
          error={error}
          success={success}
        />
        <EmployeeTable
          employees={sortedEmployees}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSort={handleSort}
          sortConfig={sortConfig}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default MainComponent;