/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Card, Input } from "antd";
import {
  useDeleteMultipleGiftMutation,
  useDeleteSingleGiftMutation,
  useGetGiftsQuery,
} from "../../../redux/features/gift/giftApi";
import Loader from "../loader/Loader";
import SaleModal from "./SeleModal";
import { useState } from "react";
import FilterOptions from "./FilterOptions";
import UpdateGiftModal from "./UpdateGiftModal";
import toast from "react-hot-toast";

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
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  // state for filer values
  const [filters, setFilters] = useState({
    category: "",
    theme: "",
    occasion: "",
    brand: "",
    name: "",
    minPrice: "",
    maxPrice: "",
  });

  // handle filter changes --------------
  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };
  // handle search input changes -----------------------
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  // handle search button click
  const handleSearchButtonClick = () => {
    handleFilterChange("name", searchValue);
  };
  //*--------------------
  // handle min input changes -----------------------
  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(e.target.value);
  };
  //*------------------
  // handle min input changes -----------------------
  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(e.target.value);
  };
  // handle search button click
  const handleFilterButtonClick = () => {
    handleFilterChange("minPrice", minPrice);
    handleFilterChange("maxPrice", maxPrice);
  };

  // format filters for query -----------------
  const formatFiltersForQuery = () => {
    const queryString = Object.entries(filters)
      .filter(([, value]) => value !== "")
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");

    return queryString ? `${queryString}` : "";
  };

  const { data, isLoading } = useGetGiftsQuery(formatFiltersForQuery());

  const [deleteSingleGift] = useDeleteSingleGiftMutation();

  const [
    deleteMultipleGift,
    { data: multipleDeleteData, isLoading: multipleDeleteLoading },
  ] = useDeleteMultipleGiftMutation();
  console.log(multipleDeleteData, multipleDeleteLoading);

  const handleSingleGiftDelete = async (id: string) => {
    const res = await deleteSingleGift(id).unwrap();
    if (res.success) {
      toast.success("Gift deleted successfully");
    } else {
      toast.error("Something went wrong");
    }
  };
  // Function to handle card selection
  const handleCardSelect = (cardId: string) => {
    if (selectedCards.includes(cardId)) {
      setSelectedCards((prevSelectedCards) =>
        prevSelectedCards.filter((id) => id !== cardId)
      );
    } else {
      // If not selected, add it to the array
      setSelectedCards((prevSelectedCards) => [...prevSelectedCards, cardId]);
    }
  };
  const handleMultipleDeleteGift = async () => {
    const ids = { ids: selectedCards };
    const res = await deleteMultipleGift(ids).unwrap();
    if (res.success) {
      toast.success("Gifts deleted successfully");
      setSelectedCards([]);
    } else {
      toast.error("Something went wrong");
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <div
        // style={{
        //   display: "flex",
        //   justifyContent: "between",
        //   gap: "20px",
        //   marginTop: "15px",
        //   marginBottom: "15px",
        // }}
        className="xl:flex  gap-5"
      >
        <div className="md:flex gap-2">
          <div
            style={{
              marginTop: "15px",
            }}
          >
            <Input
              style={{ width: 200, marginRight: 8 }}
              placeholder="Search By Name"
              defaultValue={filters.name || undefined}
              onChange={handleSearchInputChange}
            />
            <Button
              style={{ backgroundColor: "#1677FF", color: "white" }}
              onClick={handleSearchButtonClick}
            >
              Search
            </Button>
          </div>
          <div
            style={{
              marginTop: "15px",
            }}
          >
            <Input
              style={{ width: 200, marginRight: 8 }}
              placeholder="Min Price"
              defaultValue={filters.minPrice || undefined}
              onChange={handleMinInputChange}
            />
            <Input
              style={{ width: 200, marginRight: 8 }}
              placeholder="Max Price"
              defaultValue={filters.maxPrice || undefined}
              onChange={handleMaxInputChange}
            />
            <Button onClick={handleFilterButtonClick}>Filter</Button>
          </div>
        </div>
        <div
          style={{
            marginTop: "15px",
          }}
        >
          <FilterOptions
            filters={filters}
            handleFilterChange={handleFilterChange}
          />
        </div>
      </div>
      <div>
        {/* <Row gutter={[16, 16]} justify="space-between"> */}
        {selectedCards.length > 0 && (
          <Button
            onClick={handleMultipleDeleteGift}
            style={{
              backgroundColor: "red",
              color: "white",
              marginTop: "10px",
            }}
          >
            Delete Selected Gifts
          </Button>
        )}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",

            justifyContent: "center",
            gap: "16px",
            marginTop: "20px",
          }}
        >
          {data?.data?.map((gift: TGift, index: number) => (
            <Card
              key={index}
              // title={gift?.name}
              bordered={false}
              style={{ width: 300 }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >
                <p>
                  {" "}
                  <input
                    type="checkbox"
                    style={{ cursor: "pointer" }}
                    checked={selectedCards.includes(gift._id)}
                    onChange={() => handleCardSelect(gift._id)}
                  />
                  <span style={{ marginLeft: "2px" }}> Select for delete</span>
                </p>
                <p
                  onClick={() => handleSingleGiftDelete(gift?._id)}
                  style={{ cursor: "pointer" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </p>
              </div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "semibold",
                  marginBottom: "8px",
                }}
              >
                {gift?.name}
              </h2>
              <p>Price : {gift?.price} BDT</p>
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
