import React, { useContext, useState } from 'react';
import { Accordion, Button } from 'react-bootstrap';
import Modal from '../../components/Modal/Modal';
import AddTodo from '../../components/Todo/AddTodo';
import { TodosContext } from '../../context/todos-context';
import Todo from '../../models/todo';

const HomePage = () => {
    const todosContext = useContext(TodosContext);
    const [showModal, setShowModal] = useState(false);
    const showModalHandler = () => {
        setShowModal(true);
    };

    const hideModalHandler = () => {
        setShowModal(false);
    };

    const addTodoHandler = (data: FormData) => {
        console.log();
        const todo = new Todo({
            title: data.get('title')!.toString(),
        });
        todosContext.onAddItem(todo);
    };

    return (
        <>
            <Button onClick={showModalHandler}>Show</Button>
            <Modal
                title="Adding new todo"
                show={showModal}
                onHide={hideModalHandler}
                form="form"
            >
                <AddTodo id="form" onSubmit={addTodoHandler} />
            </Modal>
            <Accordion defaultActiveKey="0">
                {todosContext.items.map((todo) => (
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>{todo.title}</Accordion.Header>
                        <Accordion.Body>
                            <p>{todo.description}</p>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </>
    );
};

export default HomePage;
