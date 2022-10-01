import React, { FC } from 'react';
import { Form } from 'react-bootstrap';

const Feedback: FC<{ name: string }> = (props) => {
    return (
        <>
            <Form.Control.Feedback type="invalid">
                Please enter a valid {props.name}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </>
    );
};

export default Feedback;
