import { fetchData } from "./API/user";
import "./App.css";
import React, { useEffect, useState } from "react";

import { useTable } from "react-table";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Table2 from "./components/Table2";

function App() {
  const [users, setUsers] = useState([]);
  const path = window.location.pathname;
  useEffect(() => {
    const fetchUsers = async () => {
      let response;
      if (path === "/") {
        response = await fetchData("condition1");
      } else {
        response = await fetchData(path.substring(1));
      }
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  console.log("users:", users);

  const data = React.useMemo(() => users, [users]);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Income",
        accessor: "income",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "Car",
        accessor: "car",
      },
      {
        Header: "Quote",
        accessor: "quote",
      },
      {
        Header: "Phone Price",
        accessor: "phone_price",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="App">
      <Navbar />
      {path === "/" && (
        <h5 className="problem">
          Users with income lower than $5 and have a car of brand "BMW" or
          "Mercedes"
        </h5>
      )}
      {path === "/condition1" && (
        <h5 className="problem">
          Users with income lower than $5 and have a car of brand "BMW" or
          "Mercedes"
        </h5>
      )}
      {path === "/condition2" && (
        <h5 className="problem">
          Male users with phone price greater than 10,000
        </h5>
      )}
      {path === "/condition3" && (
        <h5 className="problem">
          Users whose last name starts with "M", has a quote character length
          greater than 15, and email includes their last name
        </h5>
      )}
      {path === "/condition4" && (
        <h5 className="problem">
          Users with a car of brand "BMW", "Mercedes", or "Audi" and whose email
          does not include any digit
        </h5>
      )}
      {path === "/condition5" && (
        <h5 className="problem">
          Top 10 cities with the highest number of users and their average
          income
        </h5>
      )}
      {path === "/condition5" ? (
        <Table2 users={users} />
      ) : (
        <Table users={users} />
      )}
    </div>
  );
}

export default App;
