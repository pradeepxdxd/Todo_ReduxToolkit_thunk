import React, { useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import EditModel from './EditModel';

export default function EditTodo({ todo }) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <AiOutlineEdit onClick={handleShow} style={{ cursor: 'pointer' }} />
      {show ? <EditModel setShow={setShow} show={show} todo={todo} /> : null}
    </>
  )
}
