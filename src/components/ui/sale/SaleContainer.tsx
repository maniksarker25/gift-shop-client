import { Select } from "antd";
import { useGetSalesQuery } from "../../../redux/features/sale/saleApi";
import Loader from "../loader/Loader";
import SaleHistoryTable from "./SaleHistoryTable";
import { useState } from "react";
import { Option } from "antd/es/mentions";
type TSelectedValue = "daily" | "weekly" | "monthly" | "year";
const SaleContainer = () => {
  const [selectedValue, setSelectedValue] = useState<TSelectedValue | "">("");
  const { data, isLoading } = useGetSalesQuery(selectedValue);
  if (isLoading) {
    return <Loader />;
  }
  // handle onChange

  const handleSelectChange = (value: TSelectedValue | "") => {
    setSelectedValue(value);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          marginTop: "5px",
          marginBottom: "5px",
        }}
      >
        <Select
          style={{ width: 200 }}
          placeholder="Filter History"
          onChange={handleSelectChange}
          value={selectedValue === "" ? undefined : selectedValue}
          allowClear={true}
        >
          <Option value="daily">Daily</Option>
          <Option value="weekly">Weekly</Option>
          <Option value="monthly">Monthly</Option>
          <Option value="yearly">Yearly</Option>
        </Select>
      </div>
      <SaleHistoryTable data={data?.data} />
    </div>
  );
};

export default SaleContainer;
