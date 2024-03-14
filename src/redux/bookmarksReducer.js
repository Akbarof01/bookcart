const defaultState = {
    bookmarks: 0
}
export function bookmarksReducer(state = defaultState, actions){
switch (actions.type) {
    case 'Qoshish':
        return {...state, bookmarks: state.bookmarks + 1}

        case 'Ochirish':
            return {...state, bookmarks: state.bookmarks - 1}

            case 'Tayinlash':
            return {...state, bookmarks: actions.payload}

    default:
        return state
}
}