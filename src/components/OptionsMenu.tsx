import * as React from "react";
import { styled } from "@mui/material/styles";
import Divider, { dividerClasses } from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MuiMenuItem from "@mui/material/MenuItem";
import { paperClasses } from "@mui/material/Paper";
import { listClasses } from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon, { listItemIconClasses } from "@mui/material/ListItemIcon";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import Badge, { badgeClasses } from "@mui/material/Badge";
import { alpha } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

const MenuItem = styled(MuiMenuItem)(({ theme }) => ({
	margin: theme.spacing(0.5, 0),
	padding: theme.spacing(1, 2),
	borderRadius: "8px",
}));

export default function OptionsMenu({ open }: { open: boolean }) {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const openMenu = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<React.Fragment>
			<Badge
				color="error"
				variant="dot"
				// invisible
				sx={{
					[`& .${badgeClasses.badge}`]: open
						? { right: 6, top: 6 }
						: { right: 13, top: 13 },
				}}>
				<IconButton
					aria-label="Open menu"
					onClick={handleClick}
					sx={theme => ({
						[theme.breakpoints.up("lg")]: {
							...(!open && {
								mx: "2px",
							}),
						},
					})}>
					<MoreVertRoundedIcon
						sx={theme => ({
							[theme.breakpoints.up("lg")]: {
								...(!open && {
									display: "none",
								}),
							},
						})}
					/>
					<Avatar
						sizes="small"
						alt="John Doe"
						sx={theme => ({
							backgroundColor: theme.palette.primary.main,
							width: 36,
							height: 36,
							display: "none",
							[theme.breakpoints.up("lg")]: {
								...(!open && {
									display: "flex",
								}),
							},
						})}>
						J
					</Avatar>
				</IconButton>
			</Badge>
			<Menu
				anchorEl={anchorEl}
				id="menu"
				open={openMenu}
				onClose={handleClose}
				onClick={handleClose}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
				slotProps={{
					paper: {
						elevation: 1,
					},
				}}
				sx={{
					[`& .${listClasses.root}`]: {
						padding: 0,
					},
					[`& .${paperClasses.root}`]: {
						borderRadius: 2,
						py: 0.5,
						px: 1,
						backgroundColor: theme =>
							alpha(theme.palette.background.paper, 0.8),
						backdropFilter: "blur(8px)",
						filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.1))",
					},
					[`& .${dividerClasses.root}`]: {
						my: 1,
					},
				}}>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My account</MenuItem>
				<Divider />
				<MenuItem onClick={handleClose}>Add another account</MenuItem>
				<MenuItem onClick={handleClose}>Settings</MenuItem>
				<Divider />
				<MenuItem
					onClick={handleClose}
					sx={{
						[`& .${listItemIconClasses.root}`]: {
							ml: "auto",
							minWidth: 0,
						},
					}}>
					<ListItemText>Logout</ListItemText>
					<ListItemIcon>
						<LogoutRoundedIcon fontSize="small" />
					</ListItemIcon>
				</MenuItem>
			</Menu>
		</React.Fragment>
	);
}
