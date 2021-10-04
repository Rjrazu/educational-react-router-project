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

        <div className="container mt-5 mb-5">
            <div className="ApplyForm m-4">
                <div className="container">
                    <div className="bg-light ApplyForm-header m-5">
                        <h2 className="text-dark  p-2 text-center">Our Academic Services</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="container" >
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