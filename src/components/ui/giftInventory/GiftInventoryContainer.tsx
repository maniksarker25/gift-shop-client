/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Card, Input, Select } from "antd";
import { useGetGiftsQuery } from "../../../redux/features/gift/giftApi";
import Loader from "../loader/Loader";
import SaleModal from "./SeleModal";
import { useState } from "react";
import { Option } from "antd/es/mentions";
import FilterOptions from "./FilterOptions";
import UpdateGiftModal from "./UpdateGiftModal";

export type TGift = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  occasion: string;
  recipient: string;
  category: string;
  theme: string;
  brand: string;
  color: string;
};
const GiftInventoryContainer = () => {
  const [searchValue, setSearchValue] = useState("");
  // state for filer values
  const [filters, setFilters] = useState({
    category: "",
    theme: "",
    occasion: "",
    brand: "",
    name: "",
  });

  // handle filter changes --------------
  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchButtonClick = () => {
    // Set the search input value to a specific filter, adjust as needed
    handleFilterChange("name", searchValue);
  };

  // format filters for query -----------------
  const formatFiltersForQuery = () => {
    const queryString = Object.entries(filters)
      .filter(([key, value]) => value !== "")
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");

    return queryString ? `${queryString}` : "";
  };
  console.log(formatFiltersForQuery());
  const { data, isLoading, isError, isSuccess } = useGetGiftsQuery(
    formatFiltersForQuery()
  );
  // console.log(data, isLoading, isError, isSuccess);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      {/* filter options component */}

      <div
        // style={{
        //   display: "flex",
        //   justifyContent: "between",
        //   gap: "20px",
        //   marginTop: "15px",
        //   marginBottom: "15px",
        // }}
        className="md:flex  gap-5"
      >
        <div>
          <Input
            style={{ width: 200, marginRight: 8 }}
            placeholder="Search By Name"
            value={filters.name || undefined}
            onChange={handleSearchInputChange}
          />
          <Button
            style={{ backgroundColor: "#1677FF", color: "white" }}
            onClick={handleSearchButtonClick}
          >
            Search
          </Button>
        </div>
        <div>
          <FilterOptions
            filters={filters}
            handleFilterChange={handleFilterChange}
          />
        </div>
      </div>
      <div>
        {/* <Row gutter={[16, 16]} justify="space-between"> */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",

            justifyContent: "center",
            gap: "16px",
          }}
        >
          {data?.data?.map((gift: TGift, index: number) => (
            <Card
              key={index}
              title={gift?.name}
              bordered={false}
              style={{ width: 300 }}
            >
              <p>Price : {gift?.price}</p>
              <p>Quantity : {gift?.quantity}</p>
              <p>Occasion : {gift?.occasion}</p>
              <p>Recipient : {gift?.recipient}</p>
              <p>Category : {gift?.category}</p>
              <p>Theme : {gift?.theme}</p>
              <p>Brand : {gift?.brand}</p>
              <p>Color : {gift?.color}</p>
              <div style={{ display: "flex", justifyContent: "end" }}>
                {/* <Button>Sell</Button> */}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <UpdateGiftModal gift={gift} />
                <SaleModal giftId={gift._id} />
              </div>
            </Card>
          ))}
          {/* </Row> */}
        </div>
      </div>
    </div>
  );
};

export default GiftInventoryContainer;
