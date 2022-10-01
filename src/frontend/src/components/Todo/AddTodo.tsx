import React, { FC, FormEvent, useState } from 'react';
import { Form } from 'react-bootstrap';
import Feedback from '../Feedback/Feedback';

const AddTodo: FC<{ id?: string; onSubmit: (data: FormData) => void }> = (
    props
) => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            return;
        }
        setValidated(true);
        const formData = new FormData(event.currentTarget);
        props.onSubmit(formData);
    };
    return (
        <Form
            id={props.id}
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
        >
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    name="title"
                    required
                    type="text"
                    defaultValue="Todo 1"
                    placeholder="..."
                />
                <Feedback name="title" />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Label>Description</Form.Label>
                <textarea
                    className="form-control"
                    placeholder="..."
                    name="description"
                    rows={3}
                ></textarea>
            </Form.Group>
        </Form>
    );
};

export default AddTodo;
