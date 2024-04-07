export const CHANGE_PAGE = "CHANGE_PAGE"

export type PaginationActions = {
    type?: string;
    payload?: number
}

export type ActionTypes = 'CHANGE_PAGE'

export const changePage = (page: number): { type: ActionTypes, payload: number } => ({
    type: CHANGE_PAGE,
    payload: page
})