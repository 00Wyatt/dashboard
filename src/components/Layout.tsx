import * as React from "react";
import SideMenu from "./SideMenu";
import AppNavBar from "./AppNavBar";

export const drawerWidth = 280;

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
		<>
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
		</>
	);
}
