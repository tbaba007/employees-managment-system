import React, { useEffect, useState } from "react";
import { GetAllEmployee } from "../../Service/Employee.service";
import employeeListStyle from "./EmployeeList.module.scss";

interface IEmployeeModel {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
  status:""|""|""|""
}

const EmployeeList = () => {
  const [employeeList, setEmployeeList] = useState<IEmployeeModel[]>([]);
  useEffect(() => {
    document.title = "Employee Application";
    const fetchEmployees = async () => {
      return await GetAllEmployee();
    };
    fetchEmployees().then((response: IEmployeeModel[]) => {
      if (response) {
        setEmployeeList(response);
      }
    });
  }, []);




  const DisplayEmployeeList = () => {
    return (
      <table className={employeeListStyle.employeeListTable}>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Employee Name</th>
            <th>Date Created</th>
            <th>Avatar</th>
          </tr>
        </thead>

        <tbody>
          {employeeList.length > 0
            ? employeeList.map((item: IEmployeeModel, index: number) => {
                return (
                  <tr key={index}>
                    <td key={item.id}>{item.id}</td>
                    <td key={index + item.name}>{item.name}</td>
                    <td key={index + item.createdAt}>{item.createdAt}</td>
                    <td key={index + item.avatar}>
                      <img src={item.avatar} alt='' />
                    </td>
                    <td>
                      {" "}
                      <button>Edit</button>{" "}
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    );
  };
  return (
    <div>
      <DisplayEmployeeList />
    </div>
  );
};

export default EmployeeList;
