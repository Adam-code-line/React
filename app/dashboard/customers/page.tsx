"use client";

import { useState, useEffect } from "react";
import { createCustomer } from "./action";

export default function Customers() {
  const [name, setName] = useState("");

  const submitData = () => {
    const formData = new FormData();
    formData.set("name", name);
    createCustomer(formData);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="请输入用户名"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={submitData}>提交</button>
    </div>
  );
}
