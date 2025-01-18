import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar, { avatarClasses } from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import ChatIcon from "@mui/icons-material/Chat";
import SecurityIcon from "@mui/icons-material/Security";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

function getTodaysDate() {
	const date = new Date();
	const day = date.getDate();
	const month = date.toLocaleString("default", { month: "short" });
	return [day, month] as [number, string];
}

const todaysDate: [number, string] = getTodaysDate();

function getPastDate(offset: number) {
	const newDay = todaysDate[0] - offset;
	return `${newDay.toString()} ${todaysDate[1]}`;
}

export default function NotificationsMenu() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const openMenu = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const [alertCount, setAlertCount] = React.useState<number | null>(4);

	getTodaysDate();

	return (
		<>
			<Tooltip title="Notifications">
				<IconButton
					onClick={handleClick}
					size="large"
					color="inherit"
					aria-controls={openMenu ? "notifications-menu" : undefined}
					aria-haspopup="true"
					aria-expanded={openMenu ? "true" : undefined}>
					<Badge badgeContent={alertCount} color="error">
						<NotificationsIcon />
					</Badge>
				</IconButton>
			</Tooltip>
			<Menu
				anchorEl={anchorEl}
				id="notifications-menu"
				open={openMenu}
				onClose={handleClose}
				onClick={handleClose}
				slotProps={{
					paper: {
						elevation: 2,
						sx: theme => ({
							width: "100%",
							[theme.breakpoints.up("sm")]: {
								maxWidth: 410,
							},
						}),
					},
				}}
				sx={[
					{
						[`& .${avatarClasses.root}`]: {
							width: 40,
							height: 40,
							mt: 0.5,
							ml: -0.5,
							mr: 2,
						},
						"& .simplebar-track": {
							width: "9px",
						},
						"& .simplebar-scrollbar::before": {
							backgroundColor: "#444",
						},
					},
					theme =>
						theme.applyStyles("dark", {
							"& .simplebar-scrollbar::before": {
								backgroundColor: "#555",
							},
						}),
				]}
				transformOrigin={{
					horizontal: "right",
					vertical: "top",
				}}
				anchorOrigin={{
					horizontal: "right",
					vertical: "bottom",
				}}>
				<Stack
					direction="row"
					sx={{
						p: theme => theme.spacing(1, 1.5),
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<Typography variant="h6" sx={{}}>
						Notifications
					</Typography>
					<Tooltip title="Mark all as read">
						<IconButton onClick={() => setAlertCount(null)}>
							<CheckIcon />
						</IconButton>
					</Tooltip>
				</Stack>
				<SimpleBar
					style={{
						maxHeight: "280px",
						height: "100%",
					}}>
					<MenuItem
						onClick={handleClose}
						sx={{ alignItems: "flex-start" }}>
						<Avatar>
							<SecurityIcon />
						</Avatar>
						<ListItemText
							primary="Security Alert"
							secondary={
								<React.Fragment>
									<Typography
										component="span"
										variant="body2"
										sx={{
											color: "text.primary",
											display: "block",
											textWrap: "wrap",
										}}>
										Your account password has been updated
										successfully
									</Typography>
									{getPastDate(2)}, 11:29 AM
								</React.Fragment>
							}
						/>
						<Tooltip title="Clear">
							<IconButton sx={{ mr: -0.5 }}>
								<CloseIcon />
							</IconButton>
						</Tooltip>
					</MenuItem>
					<MenuItem
						onClick={handleClose}
						sx={{ alignItems: "flex-start" }}>
						<Avatar>
							<ChatIcon />
						</Avatar>
						<ListItemText
							primary="New feature!"
							secondary={
								<React.Fragment>
									<Typography
										component="span"
										variant="body2"
										sx={{
											color: "text.primary",
											display: "block",
											textWrap: "wrap",
										}}>
										Slack integration is now available
									</Typography>
									{getPastDate(3)}, 2:14 PM
								</React.Fragment>
							}
						/>
						<Tooltip title="Clear">
							<IconButton sx={{ mr: -0.5 }}>
								<CloseIcon />
							</IconButton>
						</Tooltip>
					</MenuItem>
					<MenuItem
						onClick={handleClose}
						sx={{ alignItems: "flex-start" }}>
						<Avatar>
							<ChatIcon />
						</Avatar>
						<ListItemText
							primary="New Insight Available"
							secondary={
								<React.Fragment>
									<Typography
										component="span"
										variant="body2"
										sx={{
											color: "text.primary",
											display: "block",
											textWrap: "wrap",
										}}>
										Your sales trends for this quarter have
										been updated
									</Typography>
									{getPastDate(3)}, 10:47 AM
								</React.Fragment>
							}
						/>
						<Tooltip title="Clear">
							<IconButton sx={{ mr: -0.5 }}>
								<CloseIcon />
							</IconButton>
						</Tooltip>
					</MenuItem>
					<MenuItem
						onClick={handleClose}
						sx={{ alignItems: "flex-start" }}>
						<Avatar>
							<ChatIcon />
						</Avatar>
						<ListItemText
							primary="Feedback Request"
							secondary={
								<React.Fragment>
									<Typography
										component="span"
										variant="body2"
										sx={{
											color: "text.primary",
											display: "block",
											textWrap: "wrap",
										}}>
										Share your thoughts in our latest survey
									</Typography>
									{getPastDate(4)}, 1:30 PM
								</React.Fragment>
							}
						/>
						<Tooltip title="Clear">
							<IconButton sx={{ mr: -0.5 }}>
								<CloseIcon />
							</IconButton>
						</Tooltip>
					</MenuItem>
				</SimpleBar>
			</Menu>
		</>
	);
}
