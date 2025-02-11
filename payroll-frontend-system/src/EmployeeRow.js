import React from "react";

const EmployeeRow = ({ employee, handleEdit, handleDelete }) => {
  return (
    <tr className="border-t hover:bg-gray-50">
      <td className="px-4 py-2">{`${employee.firstName} ${employee.lastName}`}</td>
      <td className="px-4 py-2">{employee.position}</td>
      <td className="px-4 py-2">
        ${Number(employee.salary).toLocaleString()}
      </td>
      <td className="px-4 py-2">{employee.department}</td>
      <td className="px-4 py-2">
        <button
          onClick={() => handleEdit(employee)}
          className="mr-2 text-blue-600 hover:text-blue-800"
        >
          <i className="fas fa-edit"></i>
        </button>
        <button
          onClick={() => handleDelete(employee.id)}
          className="text-red-600 hover:text-red-800"
        >
          <i className="fas fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default EmployeeRow;