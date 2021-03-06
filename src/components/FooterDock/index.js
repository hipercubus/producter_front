import React, { Component } from 'react';
import es from 'date-fns/locale/es';
import Nav from 'react-bootstrap/Nav';
import DatePicker from "react-datepicker";
import Dock from 'react-dock';
import Button from 'react-bootstrap/Button';
import Moment from 'react-moment';

class FooterDock extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isVisibleFooter: false,
        };
    }

    handleChange = (date) => {
        this.props.onDateChange(date);
    }

    render() {
        return (
            <div>
                <Dock 
                    position='bottom' 
                    fluid={false} 
                    size={305} 
                    isVisible={this.state.isVisibleFooter}
                    >
                    <div className="pt-3 pb-1 px-3 text-center">
                        <Button 
                            variant="outline-info" 
                            className="float-right"
                            onClick={() => this.setState({ isVisibleFooter: !this.state.isVisibleFooter })}
                        >Cerrar</Button>
                        <DatePicker
                            inline
                            selected={new Date(`${this.props.dateString} 00:00:00`)}
                            onChange={this.handleChange}
                            locale={es}
                            fixedHeight
                            monthsShown={3}
                            />
                    </div>
                </Dock>
                <Nav 
                    className="fixed-bottom justify-content-center" 
                    variant="tabs" 
                    defaultActiveKey="foot"
                >
                    <Nav.Item>
                        <Nav.Link 
                            className="bg-dark text-info"
                            eventKey="foot"
                            onClick={() => this.setState({ 
                                isVisibleFooter: !this.state.isVisibleFooter 
                            })}
                            >
                            <strong>Fecha: <Moment format="DD/MM/YYYY">
                                {this.props.dateString}
                            </Moment></strong>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        );
    }
}

export default FooterDock;