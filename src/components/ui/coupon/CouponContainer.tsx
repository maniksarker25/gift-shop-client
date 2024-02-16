import { Table, TableColumnsType } from "antd";
import { useGetCouponsQuery } from "../../../redux/features/coupon/coupon.api";
import AddCoupon from "./AddCoupon";
import moment from "moment";

export type TTableData = {
  event: string;
  coupon: string;
};

const columns: TableColumnsType<TTableData> = [
  {
    title: "Event",
    dataIndex: "event",
  },
  {
    title: "Coupon",
    dataIndex: "coupon",
  },
  {
    title: "Discount Percentage",
    dataIndex: "discountPercentage",
  },
  {
    title: "Expire Date",
    dataIndex: "expireDate",
  },
  // {
  //   title: "Action",
  //   key: "x",
  // },
];

const CouponContainer = () => {
  const { data: couponData, isFetching } = useGetCouponsQuery(undefined);
  // console.log(semesterData);
  const tableData = couponData?.data?.map(
    ({ _id, event, coupon, discountPercentage, expireDate }: any) => ({
      key: _id,
      name,
      event,
      coupon,
      discountPercentage,
      expireDate: moment(expireDate).format("DD/MM/YYYY"),
    })
  );

  // const onChange: TableProps<TTableData>["onChange"] = (
  //   _pagination,
  //   filters,
  //   _sorter,
  //   extra
  // ) => {
  //   if (extra.action === "filter") {
  //     const queryParams: TQueryParams[] = [];
  //     filters?.name?.forEach((item) =>
  //       queryParams.push({ name: "name", value: item })
  //     );
  //     filters?.year?.forEach((item) =>
  //       queryParams.push({ name: "year", value: item })
  //     );
  //     setParams(queryParams);
  //   }
  // };

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "end", marginBottom: "20px" }}
      >
        <AddCoupon />
      </div>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        // onChange={onChange}
      />
    </div>
  );
};

export default CouponContainer;
