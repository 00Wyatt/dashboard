import { Navigate } from "react-router-dom";

export type AuthRouteProps = {
	children: JSX.Element;
	isAuthenticated: boolean;
};

export default function AuthRoute({
	children,
	isAuthenticated,
}: AuthRouteProps) {
	return isAuthenticated ? children : <Navigate to="/login" />;
}
