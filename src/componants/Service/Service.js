import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = (prpos) => {
    const { program, shift, img } = prpos.program;
    return (
        <div className="col-lg-6">
            <Col>
                <Card>
                    <Card.Img variant="top center" style={{ width: "320px", height: "240px" }} src={img} />
                    <Card.Body>
                        <Card.Title>{program}</Card.Title>
                        <Card.Text>
                            {shift}
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Button>Click</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;