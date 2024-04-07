import { CHANGE_PAGE, PaginationActions } from "./paginationActions"

const initialState = {
    value: 1
}

export const paginationReducer = (state = initialState, actions: PaginationActions) => {
    switch (actions.type) {
        case CHANGE_PAGE:
            return { value: actions.payload }
        default:
            return state
    }
}