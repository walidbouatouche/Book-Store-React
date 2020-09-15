import sendRequest from '../../helpers/sendRquest'
import { bookConstants } from '../_canstants/book.constants'


export const _bookAction = {
    addBook


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
            dispatch({
                type: bookConstants.ADD_BOOK_SUCCESS,

            })
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


