import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { drawerWidth } from "./Layout";
import Navigation from "./Navigation";

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(9)} + 1px)`,
});

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: prop => prop !== "open",
})<{ open: boolean }>(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	display: "none",
	[theme.breakpoints.up("lg")]: {
		display: "block",
	},
	...(open
		? {
				...openedMixin(theme),
				"& .MuiDrawer-paper": openedMixin(theme),
		  }
		: {
				...closedMixin(theme),
				"& .MuiDrawer-paper": closedMixin(theme),
		  }),
}));

interface SideMenuProps {
	open: boolean;
	mobileOpen: boolean;
	handleMobileDrawerClose: () => void;
	handleDrawerTransitionEnd: () => void;
}

export default function SideMenu({
	open,
	mobileOpen,
	handleMobileDrawerClose,
	handleDrawerTransitionEnd,
}: SideMenuProps) {
	return (
		<>
			<MuiDrawer
				variant="temporary"
				open={mobileOpen}
				onTransitionEnd={handleDrawerTransitionEnd}
				onClose={handleMobileDrawerClose}
				PaperProps={{
					elevation: 0,
				}}
				ModalProps={{
					keepMounted: true,
				}}
				sx={{
					display: { xs: "block", lg: "none" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: drawerWidth,
					},
					"&.MuiDrawer-root .MuiPaper-root": {
						overflowY: "hidden",
					},
				}}>
				<Navigation open={open} />
			</MuiDrawer>
			<Drawer
				variant="permanent"
				open={open}
				sx={[
					{
						"&.MuiDrawer-root .MuiPaper-root": {
							overflowY: "hidden",
						},
						"& .simplebar-track": {
							visibility: open ? "visible" : "hidden !important",
						},
						...(!open && {
							"& .simplebar-content": {
								height: "100%",
								display: "flex",
								flexDirection: "column",
							},
						}),
					},
					theme =>
						theme.applyStyles("dark", {
							"& .simplebar-scrollbar::before": {
								backgroundColor: theme.palette.text.secondary,
							},
						}),
				]}>
				<Navigation open={open} />
			</Drawer>
		</>
	);
}
