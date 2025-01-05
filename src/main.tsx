import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Overview from "./pages/Overview";
import Analytics from "./pages/Analytics";
import Customers from "./pages/Customers";
import Products from "./pages/Products";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Overview />} />
					<Route path="/analytics" element={<Analytics />} />
					<Route path="/customers" element={<Customers />} />
					<Route path="/products" element={<Products />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
