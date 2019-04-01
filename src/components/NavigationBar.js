import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import logo from '../img/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt, faCubes, faPrint, faUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

class NavigationBar extends Component {
    
    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top" style={{
                backgroundImage: `url(${logo})`,
                backgroundBlendMode: 'lighten',
                backgroundSize: "85px",
                backgroundPosition: "10px 3px",
                backgroundRepeat: "no-repeat"
            }}>
                <Navbar.Brand href="#home" style={{width:"70px"}}>
                </Navbar.Brand>
                <Nav className="mr-auto" activeKey="calendario">
                    <Nav.Link href="#calendario" eventKey="calendario">
                        <FontAwesomeIcon icon={faCalendarAlt} /> Calendario</Nav.Link>
                    <Nav.Link href="#listado" eventKey="listado">
                        <FontAwesomeIcon icon={faListAlt} /> Listado</Nav.Link>
                    <Nav.Link href="#stock" eventKey="stock">
                        <FontAwesomeIcon icon={faCubes} /> Stock</Nav.Link>
                    <Nav.Link href="#stock" eventKey="imprimir">
                        <FontAwesomeIcon icon={faPrint} /> Imprimir</Nav.Link>
                </Nav>
                <Button variant="outline-info" className="float-right" style={{marginRight:"20px"}}>Nueva Factura</Button>
                <Form inline>
                    <FormControl type="text" placeholder="Factura No." className="mr-sm-2" />
                    <Button variant="outline-info">Buscar</Button>
                </Form>
                <Nav className="mr-auto float-right" activeKey="calendario">
                    <Dropdown as={Nav.Item}>
                        <Dropdown.Toggle as={Nav.Link}>Garbini, Jazmin</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Datos Personales</Dropdown.Item>
                            <Dropdown.Item>Cambiar Contraseña</Dropdown.Item>
                            <Dropdown.Item>Salir</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
                <span className="float-right text-info" style={{marginLeft:"20px"}}>
                    <FontAwesomeIcon icon={faUser} />
                    <span style={{marginLeft:"10px"}}>Garbini, Jazmin</span>
                </span>
            </Navbar>
        );
    }
}
  
export default NavigationBar;