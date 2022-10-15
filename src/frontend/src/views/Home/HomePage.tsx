import { useContext, useEffect } from 'react';
import Modal from '../../components/Modal/Modal';
import AddTodo from '../../components/Todo/AddTodo';
import Todos from '../../components/Todo/Todos';
import { TodosContext } from '../../context/todos-context';
import useModal from '../../hooks/useModal';
import Todo from '../../models/todo';
import ReactLoading from 'react-loading';

const HomePage = () => {
    const todosContext = useContext(TodosContext);

    const { isShow, hideModal, showModal } = useModal();

    let content: any | Todo[];

    if (todosContext.items.length === 0)
        content = <p className="text-center">No todo's have been added here</p>;
    else content = <Todos items={todosContext.items} />;

    if (todosContext.isActiveSearch && todosContext.searchItems.length !== 0)
        content = <Todos items={todosContext.searchItems} />;

    useEffect(() => {
        document.getElementById('openmodal')!.onclick = () => {
            showModal();
        };
    }, []);

    const addTodoHandler = (data: FormData) => {
        const todo = new Todo({
            title: data.get('title')!.toString(),
            description: data.get('description')!.toString(),
            dueDate: data.get('dueDate')!.toString(),
            reminderDate: data.get('reminderDate')!.toString(),
            isStart: Boolean(data.get('isStart')?.toString()),
            amountTime: data.get('amountTime')!.toString(),
            isDone: false,
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
            {todosContext.isLoading ? (
                <ReactLoading
                    type="spinningBubbles"
                    width={72}
                    height={72}
                    color="#7239ea"
                    className="my-0 mx-auto"
                    delay={0}
                />
            ) : (
                content
            )}
        </>
    );
};

export default HomePage;
