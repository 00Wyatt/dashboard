import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { BarChart } from "@mui/x-charts/BarChart";
import { useTheme } from "@mui/material/styles";

export default function DataBarChart() {
	const theme = useTheme();
	const colorPalette = [
		theme.palette.primary.dark,
		theme.palette.primary.main,
		theme.palette.primary.light,
	];
	return (
		<Card variant="outlined" sx={{ width: "100%", borderRadius: 2 }}>
			<CardContent sx={{ p: { xs: 2, sm: 3 } }}>
				<Stack sx={{ gap: 1 }}>
					<Typography component="h2" variant="subtitle1">
						Page views and downloads
					</Typography>
					<Typography variant="h4" component="p" color="success">
						+8%
					</Typography>
					<Typography
						component="p"
						variant="subtitle1"
						sx={{ color: "text.secondary", mb: 2 }}>
						Increase in page views and downloads for the last 6
						months
					</Typography>
					<BarChart
						borderRadius={8}
						colors={colorPalette}
						xAxis={
							[
								{
									scaleType: "band",
									categoryGapRatio: 0.5,
									data: [
										"Jul",
										"Aug",
										"Sep",
										"Oct",
										"Nov",
										"Dec",
									],
								},
							] as any
						}
						series={[
							{
								id: "page-views",
								label: "Page views",
								data: [3872, 2998, 4125, 3357, 2789, 2998],
								stack: "A",
							},
							{
								id: "downloads",
								label: "Downloads",
								data: [4215, 2384, 2101, 4752, 3593, 2384],
								stack: "A",
							},
							{
								id: "conversions",
								label: "Conversions",
								data: [2275, 3129, 4693, 3904, 2038, 2275],
								stack: "A",
							},
						]}
						height={250}
						margin={{ left: 50, right: 0, top: 20, bottom: 20 }}
						grid={{ horizontal: true }}
						slotProps={{
							legend: {
								hidden: true,
							},
						}}
					/>
				</Stack>
			</CardContent>
		</Card>
	);
}
