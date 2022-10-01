import React from 'react';
import Hero from './components/Hero/Hero';
import HomePage from './views/Home/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
function App() {
    return (
        <div>
            <Hero />
            <Container>
                <HomePage />
            </Container>
        </div>
    );
}

export default App;
