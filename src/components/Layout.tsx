import * as React from "react";
import SideMenu from "./SideMenu";
import AppNavBar from "./AppNavBar";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export const drawerWidth = 280;

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export default function MiniDrawer() {
	const [open, setOpen] = React.useState(true);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [isClosing, setIsClosing] = React.useState(false);

	const handleMobileDrawerClose = () => {
		setIsClosing(true);
		setMobileOpen(false);
	};

	const handleDrawerTransitionEnd = () => {
		setIsClosing(false);
	};

	const handleDrawerToggle = () => {
		if (!isClosing) {
			setMobileOpen(!mobileOpen);
		}
	};

	return (
		<Box sx={{ display: "flex" }}>
			<SideMenu
				open={open}
				mobileOpen={mobileOpen}
				handleMobileDrawerClose={handleMobileDrawerClose}
				handleDrawerTransitionEnd={handleDrawerTransitionEnd}
			/>
			<AppNavBar
				open={open}
				handleDrawerOpen={handleDrawerOpen}
				handleDrawerClose={handleDrawerClose}
				handleDrawerToggle={handleDrawerToggle}
			/>
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
	);
}
