import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { areaElementClasses } from "@mui/x-charts/LineChart";
import { getDaysInMonth } from "../utils";

export type StatCardProps = {
	title: string;
	value: string;
	interval: string;
	trend: "up" | "down" | "neutral";
	data: number[];
};

function AreaGradient({ color, id }: { color: string; id: string }) {
	return (
		<defs>
			<linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
				<stop offset="0%" stopColor={color} stopOpacity={0.3} />
				<stop offset="100%" stopColor={color} stopOpacity={0} />
			</linearGradient>
		</defs>
	);
}

export default function DataStatCard({
	title,
	value,
	interval,
	trend,
	data,
}: StatCardProps) {
	const theme = useTheme();
	const daysInWeek = getDaysInMonth(11, 2024);

	const trendColors = {
		up:
			theme.palette.mode === "light"
				? theme.palette.success.main
				: theme.palette.success.dark,
		down:
			theme.palette.mode === "light"
				? theme.palette.error.main
				: theme.palette.error.dark,
		neutral:
			theme.palette.mode === "light"
				? theme.palette.tertiary.main
				: theme.palette.tertiary.dark,
	};

	const labelColors = {
		up: "success" as const,
		down: "error" as const,
		neutral: "tertiary" as const,
	};

	const color = labelColors[trend];
	const chartColor = trendColors[trend];
	const trendIcons = {
		up: <TrendingUpIcon />,
		down: <TrendingDownIcon />,
		neutral: <TrendingFlatIcon />,
	};
	const trendValues = { up: "+24%", down: "-19%", neutral: "+2%" };

	return (
		<Card
			variant="outlined"
			sx={{ height: "100%", flexGrow: 1, borderRadius: 2 }}>
			<CardContent sx={{ p: { xs: 2, sm: 3 } }}>
				<Typography component="h2" variant="subtitle1" sx={{ mb: 2 }}>
					{title}
				</Typography>
				<Stack
					direction="column"
					sx={{
						justifyContent: "space-between",
						flexGrow: "1",
						gap: 2,
					}}>
					<Stack
						direction="row"
						sx={{
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						<Typography component="p" variant="h4">
							{value}
						</Typography>
						<Stack
							direction={{ xs: "row", md: "column", xl: "row" }}
							spacing={{ xs: 0.5, md: 0, xl: 0.5 }}
							sx={{
								alignItems: {
									xs: "center",
									md: "start",
									xl: "center",
								},
							}}>
							<Typography
								component="p"
								variant="subtitle1"
								color={color}
								sx={{
									fontWeight: 500,
									display: "flex",
									gap: 0.5,
								}}>
								{trendIcons[trend]}
								{trendValues[trend]}
							</Typography>
							<Typography
								component="p"
								variant="subtitle1"
								sx={{ color: "text.secondary" }}>
								{interval}
							</Typography>
						</Stack>
					</Stack>
					<Box sx={{ width: "100%", height: 50 }}>
						<SparkLineChart
							colors={[chartColor]}
							data={data}
							area
							showHighlight
							showTooltip
							xAxis={{
								scaleType: "band",
								data: daysInWeek,
							}}
							sx={{
								[`& .${areaElementClasses.root}`]: {
									fill: `url(#area-gradient-${value})`,
								},
							}}>
							<AreaGradient
								color={chartColor}
								id={`area-gradient-${value}`}
							/>
						</SparkLineChart>
					</Box>
				</Stack>
			</CardContent>
		</Card>
	);
}
