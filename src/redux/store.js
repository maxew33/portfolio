import { createStore, combineReducers} from "redux"
import faceDisplayedReducer from './portfolio/faceDisplayedReducer'
import dragWatchReducer from "./portfolio/dragWatchReducer"

const rootReducer = combineReducers({
    //My reducers
    faceDisplayedReducer,
    dragWatchReducer
})

const store = createStore(rootReducer)

export default store