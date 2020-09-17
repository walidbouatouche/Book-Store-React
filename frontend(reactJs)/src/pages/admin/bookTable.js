import React from 'react'

import Table from 'react-bootstrap/Table'

import { faEdit, faTrash, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BookTable = ({ books, deletBook }) => {


  const getBookId = (bookId) => {
    deletBook(bookId)

  }

  return (<div>
    <p></p>

    <Table striped bordered hover>

      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Update </th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) =>
          <tr key={book._id}>
            <td>{index + 1}</td>
            <td>{book.title}</td>
            <td><FontAwesomeIcon icon={faEdit} /></td>
            <td onClick={() => getBookId(book._id)}><FontAwesomeIcon icon={faTrash} /></td>
          </tr>
        )}

      </tbody>
    </Table>

  </div>)
}



export default BookTable;
