import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { alpha, styled } from "@mui/material/styles";
import ThemeToggle from "../components/ThemeToggle";
import { SiteIcon } from "../components/svg/CustomIcons";
import { useNavigate } from "react-router-dom";

const Card = styled(MuiCard)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignSelf: "center",
	width: "100%",
	padding: theme.spacing(4),
	gap: theme.spacing(2),
	backgroundColor: alpha(theme.palette.background.paper, 0.8),
	backdropFilter: "blur(8px)",
	boxShadow: theme.shadows[4],
	borderRadius: theme.shape.borderRadius * 2,
	...theme.applyStyles("dark", {
		backgroundImage:
			"linear-gradient(rgba(255, 255, 255, 0.069), rgba(255, 255, 255, 0.069));",
	}),
	margin: "auto",
	overflowY: "auto",
	[theme.breakpoints.up("sm")]: {
		maxWidth: "450px",
	},
}));

export default function Login({
	setIsAuthenticated,
}: {
	setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const navigate = useNavigate();
	const [emailError, setEmailError] = React.useState(false);
	const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
	const [passwordError, setPasswordError] = React.useState(false);
	const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (emailError || passwordError) {
			return;
		}
		setIsAuthenticated(true);
		navigate("/");
	};

	const validateInputs = () => {
		const email = document.getElementById("email") as HTMLInputElement;
		const password = document.getElementById(
			"password"
		) as HTMLInputElement;

		let isValid = true;

		if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
			setEmailError(true);
			setEmailErrorMessage("Please enter a valid email address.");
			isValid = false;
		} else {
			setEmailError(false);
			setEmailErrorMessage("");
		}

		if (!password.value || password.value.length < 8) {
			setPasswordError(true);
			setPasswordErrorMessage(
				"Password must be at least 8 characters long."
			);
			isValid = false;
		} else {
			setPasswordError(false);
			setPasswordErrorMessage("");
		}

		return isValid;
	};

	return (
		<Stack
			direction="column"
			justifyContent="space-between"
			sx={theme => ({
				minHeight: "100vh",
				padding: theme.spacing(4, 2),
				[theme.breakpoints.up("sm")]: {
					padding: theme.spacing(4),
				},
			})}>
			<Box
				sx={theme => ({
					position: "fixed",
					top: "1rem",
					right: "1rem",
					display: "none",
					[theme.breakpoints.up("sm")]: { display: "block" },
				})}>
				<ThemeToggle />
			</Box>
			<Card variant="outlined">
				<SiteIcon open={false} />
				<Box
					sx={theme => ({
						position: "fixed",
						top: theme.spacing(1),
						right: theme.spacing(1),
						[theme.breakpoints.up("sm")]: { display: "none" },
					})}>
					<ThemeToggle />
				</Box>
				<Typography
					component="h1"
					variant="h4"
					sx={{
						width: "100%",
						fontSize: "clamp(2rem, 10vw, 2.15rem)",
					}}>
					Sign in
				</Typography>
				<Typography sx={{ mb: 1 }}>
					Don&apos;t have an account?{" "}
					<Link component="button" type="button" variant="body1">
						Get started
					</Link>
				</Typography>
				<Box
					component="form"
					onSubmit={handleSubmit}
					noValidate
					sx={{
						display: "flex",
						flexDirection: "column",
						width: "100%",
						gap: 2,
					}}>
					<FormControl>
						<FormLabel htmlFor="email" sx={{ mb: 0.5 }}>
							Email
						</FormLabel>
						<TextField
							error={emailError}
							helperText={emailErrorMessage}
							id="email"
							type="email"
							name="email"
							placeholder="your@email.com"
							defaultValue="johndoe@email.com"
							autoComplete="email"
							autoFocus
							required
							fullWidth
							variant="outlined"
							color={emailError ? "error" : "primary"}
						/>
					</FormControl>
					<FormControl>
						<FormLabel htmlFor="password" sx={{ mb: 0.5 }}>
							Password
						</FormLabel>
						<TextField
							error={passwordError}
							helperText={passwordErrorMessage}
							name="password"
							placeholder="••••••••"
							defaultValue="TheSecretPassword"
							type="password"
							id="password"
							autoComplete="current-password"
							required
							fullWidth
							variant="outlined"
							color={passwordError ? "error" : "primary"}
						/>
					</FormControl>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						onClick={validateInputs}>
						Sign in
					</Button>
					<Link
						component="button"
						type="button"
						variant="body2"
						sx={{ alignSelf: "center" }}>
						Forgot your password?
					</Link>
				</Box>
				{/* <Divider>or</Divider>
				<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
					<Button fullWidth variant="outlined">
						Sign in with Google
					</Button>
					<Button fullWidth variant="outlined">
						Sign in with Facebook
					</Button>
				</Box> */}
			</Card>
		</Stack>
	);
}
