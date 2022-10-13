import React, { FC, PropsWithChildren } from 'react';
import { CSSTransition } from 'react-transition-group';

type Props = {
    in: boolean;
    timeout?: number;
    classNames: {
        enterActiveClass?: string;
        exitActiveClass?: string;
        exitClass?: string;
        enterDoneClass?: string;
        enterClass?: string;
        exitDoneClass?: string;
    };
};

const Transition: FC<PropsWithChildren<Props>> = (props) => {
    return (
        <CSSTransition
            unmountOnExit
            mountOnEnter
            in={props.in}
            timeout={props.timeout || 500}
            classNames={{
                enterActive:
                    'animate__animated ' + props.classNames.enterActiveClass,
                exitActive:
                    'animate__animated ' + props.classNames.exitActiveClass,
                enterDone:
                    'animate__animated ' + props.classNames.enterDoneClass,
                exit: 'animate__animated ' + props.classNames.exitClass,
                enter: 'animate__animated ' + props.classNames.enterClass,
                exitDone: 'animate__animated ' + props.classNames.exitDoneClass,
            }}
        >
            {props.children}
        </CSSTransition>
    );
};

export default Transition;
