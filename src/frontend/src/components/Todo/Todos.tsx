import React, { FC } from 'react';
import { Accordion } from 'react-bootstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Todo from '../../models/todo';
import TodoItem from './TodoItem';

const Todos: FC<{ items: Todo[] }> = (props) => {
    return (
        <Accordion defaultActiveKey="0">
            <TransitionGroup>
                {props.items.map((todo, index) => (
                    <CSSTransition
                        timeout={300}
                        key={index}
                        classNames={{
                            enterActive: 'animate__animated animate__fadeIn',
                            exitActive:
                                'animate__animated animate__fadeOutDown',
                        }}
                    >
                        <TodoItem
                            key={index}
                            value={{
                                title: todo.title,
                                id: index,
                                description: todo.description,
                            }}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </Accordion>
    );
};

export default Todos;
