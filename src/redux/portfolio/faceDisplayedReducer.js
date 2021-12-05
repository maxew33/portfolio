const INITIAL_STATE = {
    face: 0
}

let newFace

function faceDisplayedReducer( state = INITIAL_STATE, action){

    switch(action.type){
        case 'TURN_LEFT' : {
            state.face === 3 ? newFace = 0 : newFace = state.face + 1
            return{
                ...state,
                face: newFace
            }
        }

        case 'TURN_RIGHT' : {
            state.face === 0 ? newFace = 3 : newFace = state.face - 1
            return{
                ...state,
                face: newFace
            }
        }
    }

    return state
}

export default faceDisplayedReducer