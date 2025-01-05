import React from "react";
import { alpha, styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MuiMenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";

const MenuItem = styled(MuiMenuItem)(({ theme }) => ({
	margin: theme.spacing(0.5, 0),
	padding: theme.spacing(1, 2),
	borderRadius: "8px",
}));

export default function AccountMenu() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const openAccountMenu = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Tooltip title="Account settings">
				<IconButton
					onClick={handleClick}
					size="large"
					edge="end"
					aria-controls={openAccountMenu ? "account-menu" : undefined}
					aria-haspopup="true"
					aria-expanded={openAccountMenu ? "true" : undefined}>
					<Avatar
						sx={theme => ({
							backgroundColor: theme.palette.primary.main,
							width: 32,
							height: 32,
						})}>
						J
					</Avatar>
				</IconButton>
			</Tooltip>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={openAccountMenu}
				onClose={handleClose}
				onClick={handleClose}
				slotProps={{
					paper: {
						elevation: 1,
						sx: {
							overflow: "visible",
							backgroundColor: theme =>
								alpha(theme.palette.background.paper, 0.8),
							backdropFilter: "blur(8px)",
							filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.1))",
							p: "4px 8px",
							borderRadius: 2,
							"& .MuiList-root": {
								p: 0,
							},
							"& .MuiAvatar-root": {
								width: 32,
								height: 32,
								ml: -0.5,
								mr: 1,
							},
						},
					},
				}}
				transformOrigin={{
					horizontal: "right",
					vertical: "top",
				}}
				anchorOrigin={{
					horizontal: "right",
					vertical: "bottom",
				}}>
				<MenuItem onClick={handleClose}>
					<Avatar /> Profile
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Avatar /> My account
				</MenuItem>
				<Divider />
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<PersonAdd fontSize="small" />
					</ListItemIcon>
					Add another account
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<Settings fontSize="small" />
					</ListItemIcon>
					Settings
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<Logout fontSize="small" />
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</>
	);
}
