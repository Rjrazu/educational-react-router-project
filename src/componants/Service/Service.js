import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Service = (props) => {
    const { program, shift, availableSeat, img } = props.program;
    const history = useHistory();

    const handleClick = () => {

        history.push(`/services`);
    }

    return (
        <div className="col-lg-6">
            <Col>
                <Card className="p-3 shadow" style={{ height: "500px" }}>

                    <p className="text-center mt-1"><Card.Img variant="top" className="rounded" style={{ width: "420px", height: "300px" }} src={img} /></p>
                    <Card.Body>
                        <Card.Title>Program : {program}</Card.Title>
                        <h6>Shift : {shift}</h6>
                        <h6>Available Seat : {availableSeat}</h6>
                        <Button onClick={handleClick} variant="warning">Click For Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;