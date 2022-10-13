import { Button, Form, InputGroup } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import './Hero.css';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useRef, useContext } from 'react';
import { TodosContext } from '../../context/todos-context';
const Hero = () => {
    const navigate = useNavigate();
    const searchInputRef = useRef<HTMLInputElement>(null);
    const todosContext = useContext(TodosContext);

    const searchClickHandler = (event: any) => {
        todosContext.onSearchItems!(searchInputRef.current?.value);
    };
    const inputChangeHandler = (event: any) => {
        navigate('/?search=' + searchInputRef.current?.value);
    };

    return (
        <div className="px-3 py-5 mb-5 text-center text-dark bg-gradient-hero">
            <img
                className="d-block mx-auto mb-3"
                src="/logo128.png"
                alt=""
                width="72"
                height="72"
            />
            <h1 className="display-5 fw-bold text-white">TODO APP</h1>
            <div className="col-lg-6 mx-auto mt-4 mb-5">
                <InputGroup className="shadow">
                    <Form.Control
                        className="border-0 search-input p-3"
                        placeholder="Search in ToDo's"
                        aria-label="Search in ToDo's"
                        aria-describedby="basic-addon2"
                        ref={searchInputRef}
                        onChange={inputChangeHandler}
                    />
                    <Button
                        variant="light"
                        id="button-addon2"
                        className="px-3"
                        onClick={searchClickHandler}
                    >
                        <Search className="mb-1" />
                    </Button>
                </InputGroup>
            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Button
                    variant="info"
                    className="shadow btn-lg px-4 gap-3"
                    id="openmodal"
                >
                    ADD TODO
                </Button>
                <a
                    className="btn btn-outline-warning shadow btn-lg px-4"
                    target="_blank"
                    href="https://github.com/alisoltaniorg/Todo"
                    rel="noreferrer"
                >
                    GITHUB
                </a>
            </div>
        </div>
    );
};

export default Hero;
