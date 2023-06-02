import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { editTodo } from '../store/thunk/editTodo';
import { useState } from 'react';

function EditModel({ show, todo, setShow }) {
    const [name, setName] = useState(todo.name);
    const [msg, setMsg] = useState(todo.msg);
    const handleClose = () => setShow(false);
    const dispatch = useDispatch();

    const handleEdit = () => {
        todo = {
            ...todo,
            name,
            msg
        }
        dispatch(editTodo(todo));
        setShow(false);
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Your Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                required
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                            required
                        >
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} value={msg} onChange={e => setMsg(e.target.value)}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleEdit}>
                        Change
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditModel;