import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import './Hero.css';
const Hero = () => {
    return (
        <div className="px-4 py-5 mb-5 text-center text-dark bg-gradient-hero">
            <img
                className="d-block mx-auto mb-3"
                src="/logo128.png"
                alt=""
                width="72"
                height="72"
            />
            <h1 className="display-5 fw-bold">TODO APP</h1>
            <div className="col-lg-6 mx-auto mt-4 mb-5">
                <InputGroup className="shadow">
                    <Form.Control
                        className="border-0 search-input"
                        placeholder="Search in ToDo's"
                        aria-label="Search in ToDo's"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="light" id="button-addon2">
                        <Search className="mb-1" />
                    </Button>
                </InputGroup>
            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Button variant="primary" className="shadow btn-lg px-4 gap-3">
                    Add new todo
                </Button>
                <a
                    className="btn btn-outline-secondary shadow btn-lg px-4"
                    target="_blank"
                    href="https://github.com/alisoltaniorg/"
                    rel="noreferrer"
                >
                    Github
                </a>
            </div>
        </div>
    );
};

export default Hero;
