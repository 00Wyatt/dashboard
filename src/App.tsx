import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import theme from "./theme/theme.ts";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";
import Analytics from "./pages/Analytics";
import Customers from "./pages/Customers";
import Products from "./pages/Products";
import Login from "./pages/Login.tsx";
import AuthRoute from "./components/AuthRoute.tsx";

export default function App() {
	const [isAuthenticated, setIsAuthenticated] = React.useState(false);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route
						path="/login"
						element={
							<Login setIsAuthenticated={setIsAuthenticated} />
						}
					/>
					<Route
						path="/"
						element={
							<AuthRoute isAuthenticated={isAuthenticated}>
								<Layout />
							</AuthRoute>
						}>
						<Route index element={<Overview />} />
						<Route path="/analytics" element={<Analytics />} />
						<Route path="/customers" element={<Customers />} />
						<Route path="/products" element={<Products />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}
