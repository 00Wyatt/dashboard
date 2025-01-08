import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { LineChart } from "@mui/x-charts/LineChart";
import { getDaysInMonth } from "../utils";

function AreaGradient({ color, id }: { color: string; id: string }) {
	return (
		<defs>
			<linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
				<stop offset="0%" stopColor={color} stopOpacity={0.5} />
				<stop offset="100%" stopColor={color} stopOpacity={0} />
			</linearGradient>
		</defs>
	);
}

export default function DataLineChart() {
	const theme = useTheme();
	const data = getDaysInMonth(11, 2024);

	const colorPalette = [
		theme.palette.primary.light,
		theme.palette.primary.main,
		theme.palette.primary.dark,
	];

	return (
		<Card variant="outlined" sx={{ width: "100%", borderRadius: 2 }}>
			<CardContent sx={{ p: { xs: 2, sm: 3 } }}>
				<Stack sx={{ gap: 1 }}>
					<Typography component="h2" variant="subtitle1">
						Sessions
					</Typography>
					<Stack
						direction="row"
						sx={{
							alignContent: { xs: "center", sm: "flex-start" },
							alignItems: "baseline",
							gap: 1,
						}}>
						<Typography component="p" variant="h4">
							13,277
						</Typography>
						<Typography component="p" variant="h6" color="success">
							+35%
						</Typography>
					</Stack>
					<Typography
						component="p"
						variant="subtitle1"
						sx={{ color: "text.secondary", mb: 2 }}>
						Sessions per day for the last 30 days
					</Typography>

					<LineChart
						colors={colorPalette}
						xAxis={[
							{
								scaleType: "point",
								data,
								tickInterval: (_index, i) => (i + 1) % 5 === 0,
							},
						]}
						series={[
							{
								id: "direct",
								label: "Direct",
								showMark: false,
								curve: "linear",
								stack: "total",
								area: true,
								stackOrder: "ascending",
								data: [
									300, 900, 600, 1200, 1500, 1800, 2400, 2100,
									2700, 3000, 1800, 3300, 3600, 3900, 4200,
									4500, 3900, 4800, 5100, 5400, 4800, 5700,
									6000, 6300, 6600, 6900, 7200, 7500, 7800,
									8100,
								],
							},
							{
								id: "referral",
								label: "Referral",
								showMark: false,
								curve: "linear",
								stack: "total",
								area: true,
								stackOrder: "ascending",
								data: [
									500, 900, 700, 1400, 1100, 1700, 2300, 2000,
									2600, 2900, 2300, 3200, 3500, 3800, 4100,
									4400, 2900, 4700, 5000, 5300, 5600, 5900,
									6200, 6500, 5600, 6800, 7100, 7400, 7700,
									8000,
								],
							},
							{
								id: "organic",
								label: "Organic",
								showMark: false,
								curve: "linear",
								stack: "total",
								stackOrder: "ascending",
								data: [
									1000, 1500, 1200, 1700, 1300, 2000, 2400,
									2200, 2600, 2800, 2500, 3000, 3400, 3700,
									3200, 3900, 4100, 3500, 4300, 4500, 4000,
									4700, 5000, 5200, 4800, 5400, 5600, 5900,
									6100, 6300,
								],
								area: true,
							},
						]}
						height={250}
						margin={{ left: 50, right: 20, top: 20, bottom: 20 }}
						grid={{ horizontal: true }}
						sx={{
							"& .MuiAreaElement-series-organic": {
								fill: "url('#organic')",
							},
							"& .MuiAreaElement-series-referral": {
								fill: "url('#referral')",
							},
							"& .MuiAreaElement-series-direct": {
								fill: "url('#direct')",
							},
						}}
						slotProps={{
							legend: {
								hidden: true,
							},
						}}>
						<AreaGradient
							color={theme.palette.primary.dark}
							id="organic"
						/>
						<AreaGradient
							color={theme.palette.primary.main}
							id="referral"
						/>
						<AreaGradient
							color={theme.palette.primary.light}
							id="direct"
						/>
					</LineChart>
				</Stack>
			</CardContent>
		</Card>
	);
}
