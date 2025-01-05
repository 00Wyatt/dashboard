import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FilterListIcon from "@mui/icons-material/FilterList";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export default function Products() {
	return (
		<Toolbar
			sx={{
				backgroundColor: "background.paper",
				width: "100%",
				justifyContent: "space-between",
				borderBottom: 1,
				borderBottomColor: "divider",
			}}>
			<Typography component="h1" variant="h5">
				Products
			</Typography>
			<Stack direction="row" spacing={1}>
				<Button
					startIcon={<FilterListIcon />}
					variant="outlined"
					sx={{
						lineHeight: 1,
					}}>
					Filter
				</Button>
				<Button variant="contained">Export</Button>
			</Stack>
		</Toolbar>
	);
}
