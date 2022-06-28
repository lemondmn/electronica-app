import React from "react";
import { Grid, Box, Container, Link } from '@mui/material';
import { FaGithub } from "react-icons/fa";

const Footer = () => {
	return (
		<footer style={{
			position: "absolute",
			bottom: 0,
			width: "100%",
			height: "1rem"
		}}>
			<Box
				px={{ xs: 5, sm: 5 }}
				py={{ xs: 5, sm: 0 }}
				bgcolor="#212529"
				color="white"
			>
				<Container maxWidth="lg">

					<Grid container spacing={6}>

						<Grid item xs={12} sm={6}>
							<Box textAlign="center" borderBottom={1}>
								Coordinador del Posgrado
							</Box>
							<Box textAlign="center">
								Dr. Enrique Reyes Archundia
							</Box>
						</Grid>

						<Grid item xs={12} sm={6}>
							<Box textAlign="center" borderBottom={1}>
								Correo Electrónico
							</Box>
							<Box textAlign="center">
								<Link
									href="mailto:pelectron@morelia.edu.mx"
									color="inherit"
									underline="hover"
									target="_blank"
									rel="noopener noreferrer">
									pelectron@morelia.edu.mx
								</Link>
							</Box>
						</Grid>

					</Grid>

					<Box textAlign="center" 
					pt={{ xs: 1, sm: 2 }} 
					pb={{ xs: 1, sm: 2 }}>
						<Box>
							Avenida Tecnológico #1500
						</Box>
						<Box>
							Col Lomas de Santiaguito
						</Box>
						<Box>
							Morelia, Mich.
						</Box>
						<Box>
							Teléfono +52 (443) 312-1570 con 10 líneas
						</Box>
						<Box>
							<Link
								href="https://www.morelia.tecnm.mx"
								color="inherit"
								underline="hover"
								target="_blank"
								rel="noopener noreferrer">
								www.itmorelia.edu.mx
							</Link>
						</Box>
					</Box>

					<Box 
					textAlign="center"
					maxWidth="lg"
					pt={{ xs: 1, sm: 2 }} 
					pb={{ xs: 1, sm: 2 }}>

						<Box>
							Creado por Humberto Maldonado Rojas
						</Box>

						<Box>
							<Link
								href="https://github.com/lemondmn"
								color="inherit"
								target="_blank"
								rel="noopener noreferrer">
								<FaGithub />
							</Link>
						</Box>

					</Box>

				</Container>
			</Box>
		</footer>
	);
};

export default Footer;