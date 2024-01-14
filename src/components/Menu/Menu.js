import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import avasusMenuImage from '../../images/avasusMenu.png';
import './style.css';
import { Navbar, Nav, Container, FormControl, Button } from 'react-bootstrap';
import lupa from '../../images/lupa.png'

const Menu = () => {
    const location = useLocation();

    return (
        <Container fluid>
            <Navbar  expand="lg" className="mx-auto">
                <Navbar.Brand>
                <Link to="/">
                    <img className="avasusMenuImage" src={avasusMenuImage} alt="Avasus Menu" />
                </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"  >
                <Nav className="flex-grow-1">
                    <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'current-page' : 'link'}>Início</Nav.Link>
                    <Nav.Link>Sobre Nós</Nav.Link>
                    <Nav.Link as={Link} to="/cursos" className={location.pathname === '/cursos' ? 'current-page' : 'link'}>Cursos</Nav.Link>
                    <Nav.Link as={Link} to="/parceiros" className={location.pathname === '/parceiros' ? 'current-page' : 'link'}>Parceiros</Nav.Link>
                    <Nav.Link as={Link} to="/transparencia" className={location.pathname === '/transparencia' ? 'current-page' : 'link'}>Transparência</Nav.Link>
                    <Nav.Link>Contato</Nav.Link>
                </Nav>
                <FormControl 
                    type="text" 
                    placeholder="Busca por um assunto..." 
                    className="busca mr-sm-2" 
                    style={{
                        backgroundImage: `url(${lupa})`,
                        backgroundSize: '1rem 1rem', 
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '10px center', 
                        paddingLeft: '40px',
                        fontSize: 'x-small'
                    }}/>
                <Button className="button" id="button1">Entrar</Button>
                <Button className="button" id="button2">Cadastrar</Button>
                </Navbar.Collapse>
            </Navbar>
        </Container>
      );
};

export default Menu;