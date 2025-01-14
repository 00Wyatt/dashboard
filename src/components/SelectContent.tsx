import * as React from "react";
import MuiAvatar from "@mui/material/Avatar";
import MuiListItemAvatar from "@mui/material/ListItemAvatar";
import MuiMenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Select, { SelectChangeEvent, selectClasses } from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import SmartphoneRoundedIcon from "@mui/icons-material/SmartphoneRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";

const Avatar = styled(MuiAvatar)(({ theme }) => ({
	width: 28,
	height: 28,
	backgroundColor: theme.palette.background.paper,
	color: theme.palette.text.secondary,
	border: `1px solid ${theme.palette.divider}`,
}));

const ListItemAvatar = styled(MuiListItemAvatar)(({ theme }) => ({
	minWidth: 0,
	marginRight: theme.spacing(2),
}));

const MenuItem = styled(MuiMenuItem)(({ theme }) => ({
	margin: theme.spacing(0.5, 0),
	padding: theme.spacing(1, 2),
	borderRadius: "8px",
}));

export default function SelectContent() {
	const [content, setContent] = React.useState("");

	const handleChange = (event: SelectChangeEvent) => {
		setContent(event.target.value as string);
	};

	return (
		<Select
			labelId="content-select"
			id="content-simple-select"
			value={content}
			onChange={handleChange}
			displayEmpty
			MenuProps={{
				PaperProps: {
					elevation: 1,
				},
			}}
			inputProps={{ "aria-label": "Select content" }}
			fullWidth
			sx={theme => ({
				maxHeight: 56,
				width: "fit-content",
				maxWidth: 250,
				[`& .${selectClasses.select}`]: {
					display: "flex",
					p: theme.spacing(1),
				},
				"& .MuiOutlinedInput-notchedOutline": {
					border: "none",
				},
			})}>
			<MenuItem value="">
				<ListItemAvatar>
					<Avatar alt="Loremipsum web">
						<DevicesRoundedIcon sx={{ fontSize: "1rem" }} />
					</Avatar>
				</ListItemAvatar>
				<ListItemText primary="Loremipsum-web" sx={{ mr: 1 }} />
			</MenuItem>
			<MenuItem value={10}>
				<ListItemAvatar>
					<Avatar alt="Loremipsum App">
						<SmartphoneRoundedIcon sx={{ fontSize: "1rem" }} />
					</Avatar>
				</ListItemAvatar>
				<ListItemText primary="Loremipsum-app" sx={{ mr: 1 }} />
			</MenuItem>
			<MenuItem value={20}>
				<ListItemAvatar>
					<Avatar alt="Loremipsum Store">
						<DevicesRoundedIcon sx={{ fontSize: "1rem" }} />
					</Avatar>
				</ListItemAvatar>
				<ListItemText primary="Loremipsum-Store" sx={{ mr: 1 }} />
			</MenuItem>
			<MenuItem value={30}>
				<ListItemAvatar>
					<Avatar alt="Loremipsum Admin">
						<ConstructionRoundedIcon sx={{ fontSize: "1rem" }} />
					</Avatar>
				</ListItemAvatar>
				<ListItemText primary="Loremipsum-Admin" sx={{ mr: 1 }} />
			</MenuItem>
			<Divider sx={{ mx: -1 }} />
			<MenuItem value={40} disabled>
				<ListItemIcon sx={{ minWidth: 0 }}>
					<AddRoundedIcon />
				</ListItemIcon>
				<ListItemText primary="Add product" />
			</MenuItem>
		</Select>
	);
}
