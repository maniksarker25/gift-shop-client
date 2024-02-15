import { useGetCouponsQuery } from "../../../redux/features/coupon/coupon.api";

const CouponContainer = () => {
  const { data: coupons, isFetching } = useGetCouponsQuery(undefined);
  console.log(coupons, isFetching);
  return <div>This is coupon container page</div>;
};

export default CouponContainer;
