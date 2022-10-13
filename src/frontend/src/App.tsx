import Hero from './components/Hero/Hero';
import HomePage from './views/Home/HomePage';
import 'animate.css/animate.min.css';
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
