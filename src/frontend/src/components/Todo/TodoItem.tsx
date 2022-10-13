import { FC, useCallback, useContext, useEffect, useState } from 'react';
import Todo from '../../models/todo';
import { Alert, Button, Card, ProgressBar } from 'react-bootstrap';
import {
    Bell,
    BellFill,
    Calendar2Check,
    CalendarCheck,
    CalendarHeart,
    Pause,
    Play,
    Stopwatch,
    Trash,
} from 'react-bootstrap-icons';
import { TodosContext } from '../../context/todos-context';
import Time from '../../Utils/Time/Time';
import './TodoItem.css';
import Transition from '../Transition/Transition';
import CornerBadge from '../Badge/CornerBadge';
const TodoItem: FC<{ value: Todo }> = (props) => {
    const todosContext = useContext(TodosContext);

    const todo = props.value;
    const totalSeconds = new Time(todo.amountTime).toSecond();

    const [seconds, setSeconds] = useState(
        todo.remainingTime ? new Time(todo.remainingTime).toSecond() : 0
    );

    const [isStart, setIsStart] = useState(todo.isStart);
    const [isDone, setIsDone] = useState(todo.isDone);
    const [isFinished, setIsFinished] = useState(false);
    const [timerId, setTimerId] = useState(0);

    const countDown = useCallback(() => {
        console.log('count down');
        setSeconds((prevState) => {
            if (prevState === totalSeconds) {
                setIsFinished(true);
                setIsDone(true);
                setIsStart(false);
                todosContext.onEditItem(todo.id, {
                    title: todo.title,
                    remainingTime: '00:00:00',
                    isDone: true,
                });
                return 0;
            } else {
                return prevState + 1;
            }
        });
    }, []);

    const startTimer = useCallback(() => {
        if (seconds <= totalSeconds && !isFinished) {
            const tId = window.setInterval(countDown, 1000);
            setTimerId(tId);
            setIsDone(false);
        }
    }, [countDown]);

    useEffect(() => {
        if (isStart) {
            startTimer();
        } else {
            clearInterval(timerId);
            setIsFinished(false);
            if (totalSeconds !== seconds) {
                todosContext.onEditItem(todo.id, {
                    title: todo.title,
                    remainingTime: Time.parse(seconds).toString(),
                });
            }
        }
    }, [isStart, startTimer]);

    const deleteTodoHandler = () => {
        clearInterval(timerId);
        todosContext.onDeleteItem(todo.id);
    };

    const timePercentage = Math.round((seconds / totalSeconds) * 100);

    return (
        <Card className="mb-4 item">
            {todo.isReminderDate && <CornerBadge bg="primary" />}
            <Card.Header className="bg-purple-light text-purple">
                {todo.title}
            </Card.Header>
            <Card.Body>
                {todo.description && (
                    <Card.Text className="text-muted">
                        {todo.description}
                    </Card.Text>
                )}
                <Transition
                    in={!isDone && seconds <= totalSeconds}
                    classNames={{
                        enterActiveClass: 'animate__fadeInDown',
                        exitActiveClass: 'animate__fadeOut',
                    }}
                >
                    <ProgressBar
                        variant="purple"
                        animated
                        striped
                        now={timePercentage}
                        min={0}
                        max={100}
                        label={`${timePercentage}%`}
                        className="m-0 progress-height"
                    />
                </Transition>
                <Transition
                    in={isDone!}
                    classNames={{
                        enterActiveClass: 'animate__fadeIn',
                        exitActiveClass: 'animate__fadeOutDown',
                    }}
                >
                    <Alert className="mb-0" variant="purple">
                        Your job is done
                    </Alert>
                </Transition>
                <div className="mt-3 d-flex justify-content-between align-items-center">
                    <p className="h6 text-muted mb-0">
                        <CalendarCheck
                            className="me-1 mb-1 text-success"
                            width="22"
                            height="22"
                        />
                        {new Date(todo.dueDate!).toLocaleString()}
                    </p>
                    <p className="h6 text-muted mb-0">
                        <BellFill
                            className="me-1 mb-1 text-warning"
                            width="22"
                            height="22"
                        />
                        {new Date(todo.reminderDate!).toLocaleString()}
                    </p>
                </div>
            </Card.Body>
            <Card.Footer className="bg-white d-flex justify-content-between align-items-center">
                <div>
                    <Button
                        variant="purple"
                        className="rounded-circle py-1 px-2 shadow me-2 text-white"
                        onClick={
                            isStart
                                ? () => setIsStart(false)
                                : () => setIsStart(true)
                        }
                    >
                        {!isStart ? (
                            <Play className="mb-1" />
                        ) : (
                            <Pause className="mb-1" />
                        )}
                    </Button>
                    <Button
                        className="rounded-circle py-1 px-2 shadow me-2"
                        onClick={deleteTodoHandler}
                    >
                        <Trash className="mb-1" />
                    </Button>
                </div>
                <div>
                    <p className="h6 text-muted mb-0">
                        <Stopwatch
                            className="me-1 mb-1 text-purple"
                            width="22"
                            height="22"
                        />
                        {new Time(todo.amountTime).toString()}
                    </p>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default TodoItem;
