import { Box } from "@mui/material";
import { Link } from "react-router-dom";


export default function HomePage() {
	return(
		<Box>
			<h1>Fact!!!!</h1>
			<h3>
				Go to <Link to='/activities'>Activities</Link>
			</h3>
		</Box>
	)
}