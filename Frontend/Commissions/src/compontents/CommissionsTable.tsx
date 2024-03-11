import React from "react";
import { useEffect, useState } from "react";
import CommissionItem from "./CommissionItem";
import { Commission } from "../constans/commission";

function CommissionsTable() {
  const [commissions, setCommissions] = useState<Commission[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/commissions");
        const data = await res.json();
        setCommissions(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, [commissions]);

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200 border border-gray-300">
              Description
            </th>
            <th className="px-4 py-2 bg-gray-200 border border-gray-300">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {commissions.map((commission) => (
            <CommissionItem key={commission.id} commission={commission} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CommissionsTable;
