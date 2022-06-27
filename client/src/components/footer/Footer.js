import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    Heading,
} from "./FooterStyles";
import './footer.css';

const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Heading>Gobierno de México</Heading>
                </Row>
                <Row>
                    <Column>
                        <Heading>Coordinador del Posgrado</Heading>
                        <Heading>Dr. Enrique Reyes Archundia</Heading>
                    </Column>
                    <Column>
                        <Heading>Correo Electrónico</Heading>
                        <Heading>pelectron@itmorelia.edu.mx</Heading>
                    </Column>
                </Row>
                <Row>
                    <Heading>Avenida Tecnológico #1500 Col Lomas de Santiaguito Morelia, Mich</Heading>
                    <Heading>Teléfono +52(443)312-1570 con 10 líneas</Heading>
                    <Heading>www.itmorelia.edu.mx</Heading>
                </Row>
            </Container>
        </Box>
    );
};

const FooterV2 = () => {
    return (
        <footer>
            <div class="row primary">
                <div class="column about">

                    <h3>Foolish Developer</h3>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                        voluptatem corporis error non,
                    </p>

                    <div class="social">
                        <i class="fa-brands fa-facebook-square"></i>
                        <i class="fa-brands fa-instagram-square"></i>
                        <i class="fa-brands fa-twitter-square"></i>
                        <i class="fa-brands fa-youtube-square"></i>
                        <i class="fa-brands fa-whatsapp-square"></i>
                    </div>
                </div>

                <div class="column links">
                    <h3>Some Links</h3>

                    <ul>

                        <li>
                            <a href="#faq">F.A.Q</a>
                        </li>
                        <li>
                            <a href="#cookies-policy">Cookies Policy</a>
                        </li>
                        <li>
                            <a href="#terms-of-services">Terms Of Service</a>
                        </li>
                        <li>
                            <a href="#support">Support</a>
                        </li>
                    </ul>

                </div>


                <div class="column links">
                    <h3>Some Links</h3>
                    <ul>
                        <li>
                            <a href="#faq">F.A.Q</a>
                        </li>
                        <li>
                            <a href="#cookies-policy">Cookies Policy</a>
                        </li>
                        <li>
                            <a href="#terms-of-services">Terms Of Service</a>
                        </li>
                        <li>
                            <a href="#support">Support</a>
                        </li>
                    </ul>
                </div>

                <div class="column subscribe">
                    <h3>Newsletter</h3>
                    <div>
                        <input type="email" placeholder="Your email id here" />
                        <button>Subscribe</button>
                    </div>

                </div>

            </div>

            <div class="row copyright">
                <div class="footer-menu">

                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Blog</a>
                    <a href="">Social</a>

                </div>
                <p>Copyright &copy; 2021 Foolish Developer</p>
            </div>
        </footer>
    );
};

export default Footer;