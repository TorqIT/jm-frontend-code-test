import React, { useEffect, useState } from "react";
import { Table, Pagination } from "antd";
import { ColumnType } from "antd/lib/table";

export function PaginatedCarsTable() {
  const [cars, setCars] = useState([
    {
      make: "Example Make",
      model: "Example Model",
      year: "2021",
      image:
        "https://images.unsplash.com/photo-1508171997656-fdf7cf6c4df9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [year, setYear] = useState<any>();
  const COLUMNS: ColumnType<any>[] = [
    {
      title: "Photo",
      dataIndex: "image",
      render: (image) => <img src={image} width={200} />,
    },
    {
      title: "Make",
      dataIndex: "make",
    },
    {
      title: "Model",
      dataIndex: "model",
    },
    {
      title: "Year",
      dataIndex: "year",
    },
  ];

  return (
    <div>
      <Table
        loading={isLoading}
        dataSource={cars}
        columns={COLUMNS}
        pagination={{
          total: cars.length,
          current: page,
          defaultPageSize: 3,
          onChange: (page, pageSize) => {
            console.log("onChange paging", page, pageSize);
          },
          // pageSizeOptions: ["3", "5", "10"],
        }}
        onChange={(pagination, filters, sorter, extras) => {
          console.log("onChange Table", pagination, filters, sorter, extras);
        }}
      />
    </div>
  );
}

export default PaginatedCarsTable;
