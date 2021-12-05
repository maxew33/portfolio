const INITIAL_STATE = {
    drag : false
}

let newDrag

function dragWatchReducer( state = INITIAL_STATE, action){

    switch(action.type){
        case 'DRAG_START' : {
            newDrag = true
            return{
                ...state,
                drag: newDrag
            }
        }

        case 'DRAG_STOP' : {            
            newDrag = false
            return{
                ...state,
                drag: newDrag
            }
        }
    }

    return state
}

export default dragWatchReducer