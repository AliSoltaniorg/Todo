import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TodosContextProvider from './context/todos-context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <TodosContextProvider>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </TodosContextProvider>
    </BrowserRouter>
);
