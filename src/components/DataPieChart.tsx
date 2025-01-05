import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import LinearProgress, {
	linearProgressClasses,
} from "@mui/material/LinearProgress";

import { AustraliaFlag, NewZealandFlag, GlobeFlag } from "./svg/CustomIcons";

const data = [
	{ label: "Australia", value: 5500 },
	{ label: "New Zealand", value: 2800 },
	{ label: "Other", value: 1200 },
];

interface StyledTextProps {
	variant: "primary" | "secondary";
}

const StyledText = styled("text", {
	shouldForwardProp: prop => prop !== "variant",
})<StyledTextProps>(({ theme }) => ({
	textAnchor: "middle",
	dominantBaseline: "central",
	fill: theme.palette.text.primary,
	variants: [
		{
			props: {
				variant: "primary",
			},
			style: {
				fontSize: theme.typography.h4.fontSize,
			},
		},
		{
			props: ({ variant }) => variant !== "primary",
			style: {
				fontSize: theme.typography.body1.fontSize,
			},
		},
	],
}));

interface PieCenterLabelProps {
	primaryText: string;
	secondaryText: string;
}

function PieCenterLabel({ primaryText, secondaryText }: PieCenterLabelProps) {
	const { width, height, left, top } = useDrawingArea();
	const primaryY = top + height / 2 - 10;
	const secondaryY = primaryY + 28;

	return (
		<React.Fragment>
			<StyledText variant="primary" x={left + width / 2} y={primaryY}>
				{primaryText}
			</StyledText>
			<StyledText variant="secondary" x={left + width / 2} y={secondaryY}>
				{secondaryText}
			</StyledText>
		</React.Fragment>
	);
}

export default function DataPieChart() {
	const theme = useTheme();

	const countries = [
		{
			name: "Australia",
			value: 55,
			flag: <AustraliaFlag />,
			color: theme.palette.primary.main,
		},
		{
			name: "New Zealand",
			value: 28,
			flag: <NewZealandFlag />,
			color: theme.palette.secondary.main,
		},
		{
			name: "Other",
			value: 12,
			flag: <GlobeFlag />,
			color: theme.palette.tertiary.main,
		},
	];

	const colors = [
		theme.palette.primary.main,
		theme.palette.secondary.main,
		theme.palette.tertiary.main,
	];
	return (
		<Card
			variant="outlined"
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "8px",
				flexGrow: 1,
			}}>
			<CardContent sx={{ p: 3 }}>
				<Stack sx={{ gap: 1 }}>
					<Typography component="h2" variant="subtitle1">
						Users by country
					</Typography>
					<Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
						<PieChart
							colors={colors}
							margin={{
								left: 80,
								right: 80,
								top: 80,
								bottom: 80,
							}}
							series={[
								{
									data,
									innerRadius: 90,
									outerRadius: 120,
									paddingAngle: 0,
									highlightScope: {
										faded: "global",
										highlighted: "item",
									},
								},
							]}
							height={260}
							width={260}
							slotProps={{
								legend: { hidden: true },
							}}>
							<PieCenterLabel
								primaryText="9.85K"
								secondaryText="Total"
							/>
						</PieChart>
					</Box>
					{countries.map((country, index) => (
						<Stack
							key={index}
							direction="row"
							sx={{ alignItems: "center", gap: 2, pb: 2 }}>
							{country.flag}
							<Stack sx={{ gap: 1, flexGrow: 1 }}>
								<Stack
									direction="row"
									sx={{
										justifyContent: "space-between",
										alignItems: "center",
										gap: 2,
									}}>
									<Typography
										component="p"
										variant="subtitle1">
										{country.name}
									</Typography>
									<Typography
										variant="body2"
										sx={{ color: "text.secondary" }}>
										{country.value}%
									</Typography>
								</Stack>
								<LinearProgress
									variant="determinate"
									aria-label="Number of users by country"
									value={country.value}
									sx={[
										{
											backgroundColor:
												theme.palette.grey[200],
											borderRadius: 0.5,
											height: 8,
											[`& .${linearProgressClasses.bar}`]:
												{
													backgroundColor:
														country.color,
													borderRadius: 0.5,
												},
										},
										theme.applyStyles("dark", {
											backgroundColor:
												theme.palette.grey[900],
										}),
									]}
								/>
							</Stack>
						</Stack>
					))}
				</Stack>
			</CardContent>
		</Card>
	);
}
