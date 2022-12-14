import { FC, useState } from 'react';
import { Form, Row } from 'react-bootstrap';
import Feedback from '../Feedback/Feedback';

const AddTodo: FC<{ id?: string; onSubmit: (data: FormData) => void }> = (
    props
) => {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const formData = new FormData(event.currentTarget);
            props.onSubmit(formData);
        }
        setValidated(true);
    };

    let date = new Date();
    date.setSeconds(12600);
    let tomDate = new Date();
    tomDate.setDate(date.getDate() + 1);
    tomDate.setSeconds(12600);
    date.setSeconds(3600);
    return (
        <Form
            noValidate
            validated={validated}
            id={props.id}
            onSubmit={handleSubmit}
        >
            <Form.Group className="mb-3">
                <Form.Label htmlFor="title">Title</Form.Label>
                <Form.Control
                    id="title"
                    name="title"
                    type="text"
                    placeholder="..."
                    required
                />
                <Feedback name="title" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <textarea
                    className="form-control"
                    placeholder="..."
                    name="description"
                    rows={3}
                ></textarea>
            </Form.Group>
            <Row className="mb-3">
                <Form.Group className="col-md-6 col-12">
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control
                        type="datetime-local"
                        name="dueDate"
                        required
                        defaultValue={tomDate.toISOString().slice(0, 16)}
                    />
                    <Feedback name="due date" />
                </Form.Group>
                <Form.Group className="col-md-6 col-12">
                    <Form.Label>Reminder Date</Form.Label>
                    <Form.Control
                        type="datetime-local"
                        name="reminderDate"
                        required
                        defaultValue={date.toISOString().slice(0, 16)}
                    />
                    <Feedback name="due date" />
                </Form.Group>
            </Row>
            <Form.Group className="mb-3">
                <Form.Label>Amount Time</Form.Label>
                <Form.Control
                    type="text"
                    name="amountTime"
                    required
                    defaultValue="01:00"
                    placeholder="00:00"
                />
                <Feedback name="due date" />
            </Form.Group>
            <Form.Group>
                <Form.Check
                    id="isStart"
                    name="isStart"
                    label="Start now"
                    defaultChecked={false}
                />
            </Form.Group>
        </Form>
    );
};

export default AddTodo;
