import { listClasses } from "@mui/material/List";
import { alpha, createTheme, Theme } from "@mui/material/styles";

let theme = createTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: {
					main: "#217D6F",
				},
				secondary: {
					main: "#eb862a",
				},
				// Custom color
				tertiary: {
					main: "#ABBDD3",
					light: "#BBCADB",
					dark: "#778493",
				},
				success: {
					main: "#39a25c",
				},
				error: {
					main: "#d7493e",
				},
				info: {
					main: "#4686a8",
				},
				background: {
					default: "#fafbfc",
				},
				action: {
					hover: alpha("#4d978b", 0.075),
				},
			},
		},
		dark: {
			palette: {
				primary: {
					main: "#217D6F",
				},
				secondary: {
					main: "#eb862a",
				},
				// Custom color
				tertiary: {
					main: "#ABBDD3",
					light: "#BBCADB",
					dark: "#778493",
				},
				success: {
					main: "#39a25c",
				},
				error: {
					main: "#d7493e",
				},
				info: {
					main: "#4686a8",
				},
				background: {
					default: "#121717",
					paper: "#141919",
				},
				action: {
					hover: alpha("#4d978b", 0.075),
				},
			},
		},
	},
	shape: {
		borderRadius: 8,
	},
});

// Shared styles
const backgroundStyles = ({ theme }: { theme: Theme }) => ({
	backgroundColor: alpha(theme.palette.background.paper, 0.8),
	backdropFilter: "blur(8px)",
	boxShadow: theme.shadows[4],
	padding: theme.spacing(0.5, 1),
	borderRadius: theme.shape.borderRadius * 2,
	[`& .${listClasses.root}`]: {
		padding: 0,
	},
});

theme = createTheme(theme, {
	components: {
		MuiPopper: {
			styleOverrides: {
				paper: backgroundStyles,
			},
		},
		MuiPopover: {
			styleOverrides: {
				paper: backgroundStyles,
			},
		},
		MuiMenuItem: {
			styleOverrides: {
				root: ({ theme }: { theme: Theme }) => ({
					margin: theme.spacing(0.5, 0),
					padding: theme.spacing(1, 2),
					borderRadius: theme.shape.borderRadius,
					"&:hover": {
						backgroundColor: alpha(
							theme.palette.primary.main,
							0.075
						),
					},
					"&.Mui-selected": {
						backgroundColor: alpha(
							theme.palette.primary.main,
							0.15
						),
						"&:hover": {
							backgroundColor: alpha(
								theme.palette.primary.main,
								0.2
							),
						},
					},
					"&:active": {
						backgroundColor: alpha(theme.palette.primary.dark, 0.3),
					},
				}),
			},
		},
		MuiListItemButton: {
			styleOverrides: {
				root: ({ theme }: { theme: Theme }) => ({
					"&:hover": {
						backgroundColor: alpha(
							theme.palette.primary.main,
							0.075
						),
					},
					"&.active": {
						backgroundColor: alpha(
							theme.palette.primary.main,
							0.15
						),
						"& .MuiTypography-root": {
							fontWeight: 500,
						},
						"&:hover": {
							backgroundColor: alpha(
								theme.palette.primary.main,
								0.2
							),
						},
					},
					"&:active": {
						backgroundColor: alpha(theme.palette.primary.dark, 0.3),
					},
				}),
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: ({ theme }: { theme: Theme }) => ({
					"&:hover": {
						backgroundColor: alpha(
							theme.palette.primary.light,
							0.05
						),
					},
					"&:active": {
						backgroundColor: alpha(theme.palette.primary.dark, 0.3),
					},
				}),
			},
		},
	},
});

// Extend the Palette for tertiary color
declare module "@mui/material/styles" {
	interface Palette {
		tertiary: Palette["primary"];
	}
	interface PaletteOptions {
		tertiary?: PaletteOptions["primary"];
	}
}

export default theme;
