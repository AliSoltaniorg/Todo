import { useContext, useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import Modal from '../../components/Modal/Modal';
import AddTodo from '../../components/Todo/AddTodo';
import { TodosContext } from '../../context/todos-context';
import Todo from '../../models/todo';

const HomePage = () => {
    const todosContext = useContext(TodosContext);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        document.getElementById('openmodal')!.onclick = () => {
            showModalHandler();
        };
    }, []);

    const showModalHandler = () => {
        setShowModal(true);
    };

    const hideModalHandler = () => {
        setShowModal(false);
    };

    const addTodoHandler = (data: FormData) => {
        const todo = new Todo({
            title: data.get('title')!.toString(),
            description: data.get('description')!.toString(),
        });
        todosContext.onAddItem(todo);
        hideModalHandler();
    };

    return (
        <>
            <Modal
                title="Adding new todo"
                show={showModal}
                onHide={hideModalHandler}
                form="form"
            >
                <AddTodo id="form" onSubmit={addTodoHandler} />
            </Modal>
            <Accordion defaultActiveKey="0">
                {todosContext.items.map((todo, index) => (
                    <Accordion.Item
                        eventKey={index.toString()}
                        className="mb-2"
                    >
                        <Accordion.Header>{todo.title}</Accordion.Header>
                        <Accordion.Body>
                            <p className="mb-0">{todo.description}</p>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </>
    );
};

export default HomePage;
