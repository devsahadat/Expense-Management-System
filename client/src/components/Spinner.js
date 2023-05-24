import React from "react";
import { Space, Spin } from "antd";
const Spinner = () => {
  return (
    <>
      <div className="d-flex justify-content-center p-1">
        <Space size="middle">
          <Spin />
        </Space>
      </div>
    </>
  );
};

export default Spinner;
