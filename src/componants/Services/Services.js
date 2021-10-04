import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [programs, setPrograms] = useState([])

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setPrograms(data))
    }, [])
    return (

        <div className="container mt-3 mb-3">
            <h2 className="mb-4">Our Services</h2>
            <div className="row">
                <div >
                    <Row xs={1} md={2} className="g-4">

                        {
                            programs.map(program => <Service
                                key={program.key}
                                program={program}
                            ></Service>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Services;