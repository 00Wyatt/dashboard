import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar, { avatarClasses } from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import CheckIcon from "@mui/icons-material/Check";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

export default function Messages({ getPastDate }: { getPastDate: Function }) {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const openMenu = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const [alertCount, setAlertCount] = React.useState<number | null>(2);

	return (
		<>
			<Tooltip title="Messages">
				<IconButton
					onClick={handleClick}
					size="large"
					color="inherit"
					aria-controls={openMenu ? "messages" : undefined}
					aria-haspopup="true"
					aria-expanded={openMenu ? "true" : undefined}>
					<Badge badgeContent={alertCount} color="error">
						<MailIcon />
					</Badge>
				</IconButton>
			</Tooltip>
			<Menu
				anchorEl={anchorEl}
				id="messages"
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
						Messages
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
						<Avatar>A</Avatar>
						<ListItemText
							primary="Alex Johnson"
							secondary={
								<React.Fragment>
									<Typography
										component="span"
										variant="body2"
										noWrap
										sx={{
											color: "text.primary",
											display: "block",
										}}>
										Hey, just checking in about the report.
										Did you get a chance to review it?
									</Typography>
									22 mins ago
								</React.Fragment>
							}
						/>
						<Tooltip title="Options">
							<IconButton sx={{ mr: -0.5 }}>
								<MoreVertIcon />
							</IconButton>
						</Tooltip>
					</MenuItem>
					<MenuItem
						onClick={handleClose}
						sx={{ alignItems: "flex-start" }}>
						<Avatar>E</Avatar>
						<ListItemText
							primary="Emily Davis"
							secondary={
								<React.Fragment>
									<Typography
										component="span"
										variant="body2"
										noWrap
										sx={{
											color: "text.primary",
											display: "block",
										}}>
										Don't forget, the team meeting is at 3
										PM today. See you there!
									</Typography>
									1 hr ago
								</React.Fragment>
							}
						/>
						<Tooltip title="Options">
							<IconButton sx={{ mr: -0.5 }}>
								<MoreVertIcon />
							</IconButton>
						</Tooltip>
					</MenuItem>
					<MenuItem
						onClick={handleClose}
						sx={{ alignItems: "flex-start" }}>
						<Avatar>M</Avatar>
						<ListItemText
							primary="Michael Chen"
							secondary={
								<React.Fragment>
									<Typography
										component="span"
										variant="body2"
										noWrap
										sx={{
											color: "text.primary",
											display: "block",
										}}>
										Thanks for the update! I'll take care of
										the next steps on my end.
									</Typography>
									{getPastDate(1)}, 3:46 PM
								</React.Fragment>
							}
						/>
						<Tooltip title="Options">
							<IconButton sx={{ mr: -0.5 }}>
								<MoreVertIcon />
							</IconButton>
						</Tooltip>
					</MenuItem>
					<MenuItem
						onClick={handleClose}
						sx={{ alignItems: "flex-start" }}>
						<Avatar>S</Avatar>
						<ListItemText
							primary="Sarah Patel"
							secondary={
								<React.Fragment>
									<Typography
										component="span"
										variant="body2"
										noWrap
										sx={{
											color: "text.primary",
											display: "block",
										}}>
										Can we reschedule our call for tomorrow?
										Something urgent came up.
									</Typography>
									{getPastDate(1)}, 3:10 PM
								</React.Fragment>
							}
						/>
						<Tooltip title="Options">
							<IconButton sx={{ mr: -0.5 }}>
								<MoreVertIcon />
							</IconButton>
						</Tooltip>
					</MenuItem>
				</SimpleBar>
			</Menu>
		</>
	);
}
