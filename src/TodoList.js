import React, { useState } from 'react';
import { Button, Form, ListGroup, Container, Row, Col, FormCheck, InputGroup } from 'react-bootstrap';
import './TodoList.css'; // Ensure this import is present

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, { text: newTodo, completed: false }]);
            setNewTodo('');
        }
    };

    const toggleTodo = (index) => {
        const updatedTodos = todos.map((todo, i) => {
            if (i === index) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div className="todo-list-background">
            <Container className="mt-5 form-container">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <h1 className="text-center mb-4" style={{ fontFamily: 'Nerko One, cursive' }}>Todo List App</h1>

                        <Form>
                            <InputGroup className="rounded-pill">
                                <Form.Control
                                    type="text"
                                    placeholder="Add your task"
                                    value={newTodo}
                                    onChange={(e) => setNewTodo(e.target.value)}
                                    className="rounded-pill"
                                    style={{ fontFamily: 'Nerko One, cursive' }}
                                />
                                <Button variant="warning" className="rounded-pill ml-2" onClick={addTodo}>
                                    Add
                                </Button>
                            </InputGroup>
                        </Form>

                        <ListGroup className="mt-4">
                            {todos.length === 0 && <p className="text-center" style={{ fontFamily: 'Nerko One, cursive' }}>No tasks yet!</p>}
                            {todos.map((todo, index) => (
                                <ListGroup.Item
                                    key={index}
                                    className={`d-flex justify-content-between align-items-center ${todo.completed ? 'bg-success text-light' : ''}`}
                                    style={{ fontFamily: 'Nerko One, cursive' }}
                                >
                                    <div className="d-flex align-items-center">
                                        <FormCheck
                                            checked={todo.completed}
                                            onChange={() => toggleTodo(index)}
                                            className="mr-3 custom-checkbox"
                                        />
                                        <span
                                            style={{ textDecoration: todo.completed ? 'line-through' : 'none', marginLeft: '10px', fontFamily: 'Nerko One, cursive' }}
                                        >
                                            {todo.text}
                                        </span>
                                    </div>
                                    <Button
                                        variant="link" // Use 'link' variant for no background
                                        onClick={() => deleteTodo(index)}
                                        style={{
                                            backgroundColor: 'transparent', // No background color
                                            border: 'none', // Remove border
                                            padding: '0',
                                            width: '30px',
                                            height: '30px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/9068/9068678.png"
                                            alt="Delete"
                                            style={{ width: '100%', height: '100%' }}
                                        />
                                    </Button>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
