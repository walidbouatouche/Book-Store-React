import React from 'react'

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

import { faEdit, faTrash, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AddBook from './addEditBook'
import Model from '../../compenents/model'


const BookTable = ({ books, deletBook, updateBook }) => {


  const getBookId = (bookId) => {
    deletBook(bookId)

  }
  const _updateBook = (bookData) => {
    updateBook(bookData)
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
            <td>




              <Model title={"edit Book"} launchTitle={<FontAwesomeIcon icon={faEdit} />}>

                <AddBook _book={book} addEditBook={_updateBook} />
              </Model>
            </td>
            <td onClick={() => getBookId(book._id)}>
              
              
              <Button variant="success"  >
              <FontAwesomeIcon icon={faTrash} />
        </Button>
              </td>
          </tr>
        )}

      </tbody>
    </Table>

  </div>)
}



export default BookTable;
