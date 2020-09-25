import { combineReducers } from 'redux'

import { user } from './user.reducer'
import { book } from './book.reducer'
const rootReducer = combineReducers({

    user,
    book
})

export default rootReducer;