import { styled, alpha } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import ThemeToggle from "./ThemeToggle";
import SelectContent from "./SelectContent";
import { drawerWidth } from "./Layout";
import SearchBar from "./SearchBar";
import AccountMenu from "./AccountMenu";
import Box from "@mui/material/Box";
import NotificationsMenu from "./NotificationsMenu";

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: prop => prop !== "open",
})<AppBarProps>(({ theme }) => ({
	width: "100%",
	[theme.breakpoints.up("lg")]: {
		marginLeft: `calc(${theme.spacing(9)} + 1px)`,
		width: `calc(100% - ${theme.spacing(9)} - 1px)`,
	},
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	backgroundColor: alpha(theme.palette.background.paper, 0.8),
	borderBottom: "1px solid",
	borderBottomColor: theme.palette.divider,
	backdropFilter: "blur(8px)",
	variants: [
		{
			props: ({ open }) => open,
			style: {
				[theme.breakpoints.up("lg")]: {
					marginLeft: drawerWidth,
					width: `calc(100% - ${drawerWidth}px)`,
				},
				transition: theme.transitions.create(["width", "margin"], {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.enteringScreen,
				}),
			},
		},
	],
}));

interface AppNavBarProps {
	open: boolean;
	handleDrawerOpen: () => void;
	handleDrawerClose: () => void;
	handleDrawerToggle: () => void;
}

export default function AppNavBar({
	open,
	handleDrawerOpen,
	handleDrawerClose,
	handleDrawerToggle,
}: AppNavBarProps) {
	return (
		<AppBar
			position="fixed"
			color="transparent"
			open={open}
			sx={{ boxShadow: "none", zIndex: 1100 }}>
			<Toolbar>
				<IconButton
					color="inherit"
					size="large"
					aria-label={open ? "close drawer" : "open drawer"}
					onClick={open ? handleDrawerClose : handleDrawerOpen}
					edge="start"
					sx={{
						display: { xs: "none", lg: "flex" },
					}}>
					{open ? <MenuOpenIcon /> : <MenuIcon />}
				</IconButton>
				<IconButton
					color="inherit"
					size="large"
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerToggle}
					sx={{ display: { lg: "none" } }}>
					<MenuIcon />
				</IconButton>
				<Box
					sx={{
						display: { xs: "none", sm: "block" },
					}}>
					<SelectContent />
				</Box>
				<Toolbar sx={{ flex: "auto" }}></Toolbar>
				<SearchBar />
				<ThemeToggle />
				<Divider
					orientation="vertical"
					flexItem
					sx={{ m: "12px", display: { xs: "none", sm: "block" } }}
				/>
				<IconButton
					size="large"
					aria-label="show 4 new mails"
					color="inherit">
					<Badge badgeContent={2} color="error">
						<MailIcon />
					</Badge>
				</IconButton>
				<NotificationsMenu />
				<AccountMenu />
			</Toolbar>
		</AppBar>
	);
}
