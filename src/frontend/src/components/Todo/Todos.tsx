import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Todo from '../../models/todo';
import TodoItem from './TodoItem';

const Todos: FC<{ items: Todo[] }> = (props) => {
    return (
        <TransitionGroup>
            {props.items.map((todo, index) => (
                <CSSTransition
                    mountOnEnter
                    unmountOnExit
                    timeout={500}
                    key={index}
                    classNames={{
                        enterActive: 'animate__animated animate__fadeIn',
                        enterDone:
                            todo.isDueDate && !todo.isDone && !todo.isStart
                                ? 'border-due'
                                : '',
                        exit: '',
                        exitActive: 'animate__animated animate__fadeOut',
                    }}
                >
                    <TodoItem value={todo} />
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
};

export default Todos;
