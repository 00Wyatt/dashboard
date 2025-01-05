import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { styled, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import theme from "./theme/theme.ts";
import Layout from "./components/Layout";
import { Outlet } from "react-router-dom";
import Stack from "@mui/material/Stack";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box sx={{ display: "flex" }}>
				<Layout />
				<Box
					component="main"
					sx={{
						width: "100%",
						flexGrow: 1,
					}}>
					<Offset />
					<Stack sx={{ alignItems: "center" }}>
						{/* Main content here */}
						<Outlet />
					</Stack>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default App;
