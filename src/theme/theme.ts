import { alpha, createTheme } from "@mui/material/styles";

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

theme = createTheme(theme, {
	components: {
		MuiMenuItem: {
			styleOverrides: {
				root: {
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
				},
			},
		},
		MuiListItemButton: {
			styleOverrides: {
				root: {
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
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					"&:hover": {
						backgroundColor: alpha(
							theme.palette.primary.light,
							0.05
						),
					},
					"&:active": {
						backgroundColor: alpha(theme.palette.primary.dark, 0.3),
					},
				},
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
