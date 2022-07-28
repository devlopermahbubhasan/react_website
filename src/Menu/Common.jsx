import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap'
const Common = (props) => {
    return (
        <div>
           <Container className='aling'>
                 <Row>
                    <Col className='p-s'> 
                        <h1 className='tittel'>{props.name} <span className='n_color'>Mahbub Hasan</span></h1>
                        <p className='sub_tittel'>{props.sub} </p>
                        <LinkContainer exact to={props.visited}>
                            <Button variant="outline-primary" className='btn'>{props.btn}</Button>
                        </LinkContainer>
                        
                        
                    </Col>
                    <Col>
                        <img src={props.imgsrc} alt="Img" />
                    </Col>
                 </Row>
            </Container>
        </div>
    );
};

export default Common;