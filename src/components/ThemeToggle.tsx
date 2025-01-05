import * as React from "react";
import ContrastIcon from "@mui/icons-material/Contrast";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MuiMenuItem from "@mui/material/MenuItem";
import MuiFormControlLabel from "@mui/material/FormControlLabel";
import MuiRadio from "@mui/material/Radio";
import { alpha, styled } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import RadioGroup from "@mui/material/RadioGroup";
import Tooltip from "@mui/material/Tooltip";
import { useColorScheme } from "@mui/material/styles";

const MenuItem = styled(MuiMenuItem)(({ theme }) => ({
	margin: theme.spacing(0.5, 0),
	padding: 0,
	borderRadius: "8px",
}));

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
	width: "100%",
	padding: theme.spacing(0.5, 2, 0.5, 1),
	margin: 0,
	borderRadius: "8px",
}));

const Radio = styled(MuiRadio)(({ theme }) => ({
	padding: theme.spacing(0.5, 1),
}));

export default function ThemeToggle() {
	const { mode, setMode } = useColorScheme();

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	if (!mode) {
		return null;
	}
	return (
		<>
			<Tooltip title="Change Theme">
				<IconButton
					onClick={handleClick}
					size="large"
					color="inherit"
					aria-controls={open ? "account-menu" : undefined}
					aria-haspopup="true"
					aria-expanded={open ? "true" : undefined}>
					{mode == "system" && <ContrastIcon />}
					{mode == "light" && <LightModeIcon />}
					{mode == "dark" && <DarkModeIcon />}
				</IconButton>
			</Tooltip>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
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
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
				<FormControl>
					<FormLabel id="theme-toggle" hidden>
						Theme
					</FormLabel>
					<RadioGroup
						aria-labelledby="theme-toggle"
						name="theme-toggle"
						value={mode}
						onChange={event =>
							setMode(
								event.target.value as
									| "system"
									| "light"
									| "dark"
							)
						}>
						<MenuItem>
							<FormControlLabel
								value="system"
								control={<Radio />}
								label="System"
							/>
						</MenuItem>
						<MenuItem>
							<FormControlLabel
								value="light"
								control={<Radio />}
								label="Light"
							/>
						</MenuItem>
						<MenuItem>
							<FormControlLabel
								value="dark"
								control={<Radio />}
								label="Dark"
							/>
						</MenuItem>
					</RadioGroup>
				</FormControl>
			</Menu>
		</>
	);
}
