import React, { FC } from 'react';
import Todo from '../../models/todo';
import { Accordion } from 'react-bootstrap';
const TodoItem: FC<{ value: Todo }> = (props) => {
    const { title, description, id } = props.value;
    return (
        <Accordion.Item eventKey={id!.toString()} className="mb-2">
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>
                <p className="mb-0 text-muted">{description}</p>
            </Accordion.Body>
        </Accordion.Item>
    );
};

export default TodoItem;
