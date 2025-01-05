import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
	display: "none",
	position: "relative",
	backgroundColor: "transparent",
	transition: theme.transitions.create("background-color", {
		duration: theme.transitions.duration.shortest,
	}),
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("md")]: {
		display: "block",
		marginLeft: theme.spacing(3),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "18ch",
	},
}));

export default function SearchBar() {
	return (
		<>
			<Search>
				<SearchIconWrapper>
					<SearchIcon />
				</SearchIconWrapper>
				<StyledInputBase
					placeholder="Search anything here…"
					inputProps={{ "aria-label": "search" }}
				/>
			</Search>
			<IconButton
				size="large"
				aria-label="search"
				color="inherit"
				sx={{ display: { md: "none" } }}>
				<SearchIcon />
			</IconButton>
		</>
	);
}
