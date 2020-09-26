import { combineReducers } from 'redux'

import { user } from './user.reducer'
import { book } from './book.reducer'
import { favorite } from './favorite.reducer'
const rootReducer = combineReducers({

    user,
    book,
    favorite
})

export default rootReducer;