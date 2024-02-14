import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  TUser,
  logout,
  useCurrentToken,
} from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { Navigate } from "react-router-dom";

type TProtectedRouteProps = {
  children: ReactNode;
  requiredRoles: string[] | undefined;
};
const ProtectedRoute = ({ children, requiredRoles }: TProtectedRouteProps) => {
  // console.log(role);
  const dispatch = useAppDispatch();

  const token = useAppSelector(useCurrentToken);

  let user;
  if (token) {
    user = verifyToken(token);
  }
  if (!token) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }

  if (
    requiredRoles !== undefined &&
    !requiredRoles?.includes((user as TUser).role)
  ) {
    dispatch(logout());
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
