import { useContext, useEffect } from 'react';
import Modal from '../../components/Modal/Modal';
import AddTodo from '../../components/Todo/AddTodo';
import Todos from '../../components/Todo/Todos';
import { TodosContext } from '../../context/todos-context';
import useModal from '../../hooks/useModal';
import Todo from '../../models/todo';

const HomePage = () => {
    const todosContext = useContext(TodosContext);

    const { isShow, hideModal, showModal } = useModal();

    useEffect(() => {
        document.getElementById('openmodal')!.onclick = () => {
            showModal();
        };
    }, [showModal]);

    const addTodoHandler = (data: FormData) => {
        const todo = new Todo({
            title: data.get('title')!.toString(),
            description: data.get('description')!.toString(),
        });
        todosContext.onAddItem(todo);
        hideModal();
    };

    return (
        <>
            <Modal
                title="Adding new todo"
                show={isShow}
                onHide={hideModal}
                form="form"
            >
                <AddTodo id="form" onSubmit={addTodoHandler} />
            </Modal>
            <Todos items={todosContext.items} />
        </>
    );
};

export default HomePage;
