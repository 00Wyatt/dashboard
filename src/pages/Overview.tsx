import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import DataBarChart from "../components/DataBarChart";
import DataStatCard, { StatCardProps } from "../components/DataStatCard";
import Card from "@mui/material/Card";
import FilterListIcon from "@mui/icons-material/FilterList";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import DataLineChart from "../components/DataLineChart";
import DataPieChart from "../components/DataPieChart";
import DataDisplayGrid from "../components/DataDisplayGrid";

const data: StatCardProps[] = [
	{
		title: "Total Active Users",
		value: "2,637",
		interval: "last 30 days",
		trend: "up",
		data: [
			200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360,
			340, 380, 360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460,
			600, 880, 920,
		],
	},
	{
		title: "Total Installs",
		value: "12,451",
		interval: "last 30 days",
		trend: "down",
		data: [
			1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820,
			840, 600, 820, 780, 800, 760, 380, 740, 660, 620, 840, 500, 520,
			480, 400, 360, 300, 220,
		],
	},
	{
		title: "Total Sales",
		value: "$99,400",
		interval: "last 30 days",
		trend: "neutral",
		data: [
			500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530,
			620, 510, 530, 520, 410, 530, 520, 610, 530, 520, 610, 530, 420,
			510, 430, 520, 510,
		],
	},
];

function getFormattedDate() {
	const date = new Date();

	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	const dayName = days[date.getDay()];
	const day = date.getDate();
	const month = date.toLocaleString("default", { month: "long" });
	const year = date.getFullYear();

	// Add suffix to the day
	const daySuffix = (n: number) => {
		const suffixes = ["th", "st", "nd", "rd"];
		const v = n % 100;
		return suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];
	};

	return `${dayName} ${day}${daySuffix(day)} ${month}, ${year}`;
}

export default function Overview() {
	const date = getFormattedDate();

	return (
		<>
			<Toolbar
				sx={{
					backgroundColor: "background.paper",
					width: "100%",
					justifyContent: "space-between",
					borderBottom: 1,
					borderBottomColor: "divider",
				}}>
				<Typography component="h1" variant="h5">
					Overview
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
			<Stack
				sx={{
					width: "100%",
					maxWidth: { xs: "100%", md: "1600px" },
					p: { xs: 2, sm: 3 },
					mb: 4,
				}}>
				<Grid container spacing={{ xs: 2, xl: 3 }}>
					<Grid size={12}>
						<Card
							sx={[
								theme => ({
									width: "100%",
									p: { xs: 3, sm: 4 },
									borderRadius: 2,
									background: `linear-gradient(to right, ${
										theme.palette.primary.main
									} 25%, ${alpha(
										theme.palette.primary.main,
										0.65
									)} 100%)`,
									color: theme.palette.primary.contrastText,
									filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.1))",
								}),
								theme =>
									theme.applyStyles("dark", {
										background: `linear-gradient(to right, ${
											theme.palette.primary.dark
										} 25%, ${alpha(
											theme.palette.primary.dark,
											0.65
										)} 100%)`,
									}),
							]}>
							<Stack
								direction={{ xs: "column", sm: "row" }}
								spacing={{ xs: 3, sm: 0 }}
								sx={{
									justifyContent: "space-between",
									alignItems: { xs: "start", sm: "center" },
								}}>
								<Box>
									<Typography
										component="p"
										variant="h4"
										gutterBottom>
										Welcome back, John Doe!
									</Typography>
									<Typography
										component="p"
										variant="subtitle2"
										sx={{ fontWeight: 400 }}>
										Today is {date}
									</Typography>
								</Box>
								<Box>
									<Button variant="outlined" color="inherit">
										View Reports
									</Button>
								</Box>
							</Stack>
						</Card>
					</Grid>
					{data.map((card, index) => (
						<Grid key={index} size={{ xs: 12, md: 4 }}>
							<DataStatCard {...card} />
						</Grid>
					))}
					<Grid size={{ xs: 12, lg: 6 }}>
						<DataBarChart />
					</Grid>
					<Grid size={{ xs: 12, lg: 6 }}>
						<DataLineChart />
					</Grid>
					<Grid size={{ xs: 12, md: 4 }}>
						<DataPieChart />
					</Grid>
					<Grid size={{ xs: 12, md: 8 }}>
						<DataDisplayGrid />
					</Grid>
				</Grid>
			</Stack>
		</>
	);
}
