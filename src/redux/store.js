import { createStore, combineReducers} from "redux"
import faceDisplayedReducer from './portfolio/faceDisplayedReducer'

const rootReducer = combineReducers({
    //My reducers
    faceDisplayedReducer
})

const store = createStore(rootReducer)

export default store