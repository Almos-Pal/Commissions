import React from "react";
import { useEffect, useState } from "react";
import CommissionsItem from "./CommissionsItem";
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
  }, []);

  return (
    <div>
      {commissions.map((commission) => (
        <CommissionsItem key={commission.id} commission={commission} />
      ))}
    </div>
  );
}

export default CommissionsTable;
