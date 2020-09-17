import sendRequest from '../../helpers/sendRquest'
import { bookConstants } from '../_canstants/book.constants'


export const _bookAction = {
    addBook,
    getAllBook,
    deleteOneBook,
    updateBook

}


function addBook(data) {
    return dispatch => {
        dispatch({
            type: bookConstants.ADD_BOOK_REQUEST
        })
        return sendRequest({
            method: 'POST',
            url: `/book/`,
            data
        }).then(() => {
            dispatch(

                //  {   type: bookConstants.ADD_BOOK_SUCCESS,


                // },
                getAllBook()
            )
        },
            ({ response }) => {
                dispatch({
                    type: bookConstants.ADD_BOOK_FAILURE,
                    error: (response != undefined && response != null) ? response.data.message : "somthing wrong"
                })
            }
        )
    }
}

function getAllBook() {
    return dispatch => {
        dispatch({
            type: bookConstants.GET_BOOKS_REQUEST
        })
        return sendRequest({
            method: 'GET',
            url: `/book/`
        }).then((books) => {
            dispatch(
                {
                    type: bookConstants.GET_BOOKS_SUCCESS,
                    books
                }

            )
        },
            ({ response }) => {
                dispatch({
                    type: bookConstants.GET_BOOKS_FAILURE,
                    error: (response != undefined && response != null) ? response.data.message : "somthing wrong"
                })
            }
        )
    }
}



function deleteOneBook(bookId) {
    return dispatch => {
        dispatch({
            type: bookConstants.DELETE_BOOK_REQUEST
        })
        return sendRequest({
            method: 'DELETE',
            url: `/book/${bookId}`
        }).then(() => {
            dispatch(
                //     {
                //     type: bookConstants.DELETE_BOOK_REQUEST,
                //    
                // }

                getAllBook()


            )
        },
            ({ response }) => {
                dispatch({
                    type: bookConstants.DELETE_BOOK_FAILURE,
                    error: (response != undefined && response != null) ? response.data.message : "somthing wrong"
                })
            }
        )
    }
}





function updateBook(data) {
    return dispatch => {
        dispatch({
            type: bookConstants.UPDATE_BOOK_REQUEST
        })
        return sendRequest({
            method: 'PUT',
            url: `/book/${data.bookId}`,
            data
        }).then(() => {
            dispatch(

                //  {   type: bookConstants.UPDATE_BOOK_SUCCESS,


                // },
                getAllBook()
            )
        },
            ({ response }) => {
                dispatch({
                    type: bookConstants.UPDATE_BOOK_FAILURE,
                    error: (response != undefined && response != null) ? response.data.message : "somthing wrong"
                })
            }
        )
    }
}