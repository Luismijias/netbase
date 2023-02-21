import React, { useEffect, useState } from "react";
import _service from "@netuno/service-client";
import { Select } from "antd";
import "./index.less";

function CategorySelect() {
  const [list, setList] = useState([]);
  useEffect(() => {
    _service({
      url: "/category/list",

      success: (response) => {
        setList(response.json);
      },
      fail: (e) => {
        console.log("Service Error", e);
      },
    });
  }, []);

  return (
  <div className="category">
      <Select className="category_select">
        {list.map((item) => {
          return <Select.Option value={item.code}>{item.name}</Select.Option>;
        })}
      </Select>
  </div >
  );
}

export default CategorySelect;
