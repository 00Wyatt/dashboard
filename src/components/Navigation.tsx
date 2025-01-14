import React from "react";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton, {
	ListItemButtonProps,
} from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SellIcon from "@mui/icons-material/Sell";
import PersonIcon from "@mui/icons-material/Person";
import BuildIcon from "@mui/icons-material/Build";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import FeedbackIcon from "@mui/icons-material/Feedback";
import useMediaQuery from "@mui/material/useMediaQuery";
import { NavLink } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import SelectContent from "./SelectContent";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { SiteLogo, SiteIcon } from "./svg/CustomIcons";
import OptionsMenu from "./OptionsMenu";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import StarsIcon from "@mui/icons-material/Stars";

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: "0 21px",
	// set content to be below app bar
	...theme.mixins.toolbar,
}));

const NavListHeader = styled(Typography, {
	shouldForwardProp: prop => prop !== "open",
})<{ open: boolean; component?: React.ElementType }>(({ theme, open }) => ({
	padding: theme.spacing(2, 3, 0, 3),
	fontWeight: 500,
	textTransform: "uppercase",
	fontSize: "0.75rem",
	[theme.breakpoints.up("lg")]: {
		...(!open && { display: "none" }),
	},
}));

const NavList = styled(List, { shouldForwardProp: prop => prop !== "open" })<{
	open: boolean;
}>(({ theme, open }) => ({
	padding: theme.spacing(1, 2),
	[theme.breakpoints.up("lg")]: {
		...(!open && {
			padding: theme.spacing(1, 0.5),
		}),
	},
}));

interface NavItemButtonProps extends ListItemButtonProps {
	open: boolean;
	to?: string;
}

const NavItemButton = styled(ListItemButton, {
	shouldForwardProp: prop => prop !== "open",
})<NavItemButtonProps>(({ theme, open }) => ({
	borderRadius: theme.spacing(1),
	[theme.breakpoints.up("lg")]: {
		...(!open && {
			padding: theme.spacing(1),
			flexDirection: "column",
			alignItems: "center",
		}),
	},
}));

const NavItemIcon = styled(ListItemIcon, {
	shouldForwardProp: prop => prop !== "open",
})<{ open: boolean }>(({ theme, open }) => ({
	minWidth: 0,
	justifyContent: "center",
	marginRight: theme.spacing(2),
	[theme.breakpoints.up("lg")]: {
		...(!open && {
			marginRight: 0,
		}),
	},
}));

const NavItemText = styled(ListItemText, {
	shouldForwardProp: prop => prop !== "open",
})<{ open: boolean }>(({ theme, open }) => ({
	"& .MuiTypography-root": {
		fontSize: "0.9375rem",
	},
	[theme.breakpoints.up("lg")]: {
		...(!open && {
			"& span.MuiTypography-root": {
				fontSize: "0.625rem",
			},
		}),
	},
}));

interface NavigationLink {
	name: string;
	url: string;
	icon: React.ReactElement;
}

const dashboardPages: NavigationLink[] = [
	{ name: "Overview", url: "/", icon: <HomeIcon /> },
	{ name: "Analytics", url: "/analytics", icon: <BarChartIcon /> },
	{ name: "Customers", url: "/customers", icon: <PeopleAltIcon /> },
	{ name: "Products", url: "/products", icon: <SellIcon /> },
];

const managePages: NavigationLink[] = [
	{ name: "Reports", url: "/reports", icon: <DescriptionIcon /> },
	{ name: "Accounts", url: "/accounts", icon: <PersonIcon /> },
	{ name: "Tools", url: "/tools", icon: <BuildIcon /> },
	{ name: "Calendar", url: "/calendar", icon: <CalendarTodayIcon /> },
];

const supportPages: NavigationLink[] = [
	{ name: "Settings", url: "/settings", icon: <SettingsIcon /> },
	{ name: "About", url: "/about", icon: <InfoIcon /> },
	{ name: "Feedback", url: "/feedback", icon: <FeedbackIcon /> },
];

export default function Navigation({ open }: { open: boolean }) {
	const headerHeight = useMediaQuery(theme => theme.breakpoints.up("sm"))
		? "64px"
		: "56px";

	return (
		<>
			<DrawerHeader>
				<SiteLogo open={open} />
				<SiteIcon open={open} />
			</DrawerHeader>
			<SimpleBar
				style={{
					maxHeight: `calc(100% - ${headerHeight})`,
					height: "100%",
				}}>
				<Box
					sx={{
						pt: 1,
						px: 2,
						display: { xs: "block", sm: "none" },
					}}>
					<SelectContent />
				</Box>
				<NavListHeader
					color="textSecondary"
					noWrap
					component="p"
					open={open}>
					Dashboards
				</NavListHeader>
				<NavList open={open}>
					{dashboardPages.map(page => (
						<ListItem key={page.name} sx={{ py: 0.25, px: 0 }}>
							<NavItemButton
								component={NavLink}
								to={page.url}
								open={open}>
								<NavItemIcon open={open}>
									{page.icon}
								</NavItemIcon>
								<NavItemText primary={page.name} open={open} />
							</NavItemButton>
						</ListItem>
					))}
				</NavList>
				<Divider />
				<NavListHeader
					color="textSecondary"
					noWrap
					component="p"
					open={open}>
					Manage
				</NavListHeader>
				<NavList open={open}>
					{managePages.map(page => (
						<ListItem key={page.name} sx={{ py: 0.25, px: 0 }}>
							<NavItemButton
								// component={NavLink}
								// to={page.url}
								open={open}>
								<NavItemIcon open={open}>
									{page.icon}
								</NavItemIcon>
								<NavItemText primary={page.name} open={open} />
							</NavItemButton>
						</ListItem>
					))}
				</NavList>
				<Divider />
				<NavListHeader
					color="textSecondary"
					noWrap
					component="p"
					open={open}>
					Support
				</NavListHeader>
				<NavList open={open}>
					{supportPages.map(page => (
						<ListItem key={page.name} sx={{ py: 0.25, px: 0 }}>
							<NavItemButton
								// component={NavLink}
								// to={page.url}
								open={open}>
								<NavItemIcon open={open}>
									{page.icon}
								</NavItemIcon>
								<NavItemText primary={page.name} open={open} />
							</NavItemButton>
						</ListItem>
					))}
				</NavList>
				<Card
					variant="outlined"
					sx={theme => ({
						mx: 2,
						my: 3,
						[theme.breakpoints.up("lg")]: {
							...(!open && {
								display: "none",
							}),
						},
					})}>
					<CardContent
						sx={{
							p: 3,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: 1,
						}}>
						<StarsIcon
							fontSize="large"
							sx={{ mb: 1, color: "text.secondary" }}
						/>
						<Typography sx={{ fontWeight: 600 }}>
							Need more insights?
						</Typography>
						<Typography
							variant="body2"
							sx={{
								mb: 1,
								color: "text.secondary",
								textAlign: "center",
								textWrap: "wrap",
							}}>
							Upgrade to the premium version for more features.
						</Typography>
						<Button variant="contained" size="medium" fullWidth>
							Upgrade Now
						</Button>
					</CardContent>
				</Card>
				<Divider
					sx={theme => ({
						mt: "auto",
						display: "none",
						[theme.breakpoints.up("lg")]: {
							...(!open && {
								display: "block",
							}),
						},
					})}
				/>
				<Stack
					direction="row"
					sx={theme => ({
						p: { xs: 2 },
						gap: 1.5,
						alignItems: "center",
						[theme.breakpoints.up("lg")]: {
							...(!open && {
								p: 1,
							}),
						},
					})}>
					<Avatar
						sizes="small"
						alt="John Doe"
						sx={theme => ({
							backgroundColor: theme.palette.primary.main,
							width: 36,
							height: 36,
							[theme.breakpoints.up("lg")]: {
								...(!open && {
									display: "none",
								}),
							},
						})}>
						J
					</Avatar>
					<Box
						sx={theme => ({
							mr: "auto",
							[theme.breakpoints.up("lg")]: {
								...(!open && {
									display: "none",
								}),
							},
						})}>
						<Typography
							variant="body2"
							sx={{ fontWeight: 500, lineHeight: "16px" }}>
							John Doe
						</Typography>
						<Typography
							variant="caption"
							sx={{ color: "text.secondary" }}>
							jdoe@email.com
						</Typography>
					</Box>
					<OptionsMenu open={open} />
				</Stack>
			</SimpleBar>
		</>
	);
}
