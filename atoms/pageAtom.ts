import { atom } from 'jotai'

export const pageAtom = atom({
    currentPage: 1,
    increment: 5,
})
export const tenTimesPageAtom = atom((get) =>{
    return get(pageAtom).currentPage * 10
})
export const goToLastPageAtom = atom(null, (get, set, payload) => {
    const currentPagination = get(pageAtom)
    set(pageAtom, {... currentPagination, currentPage: currentPagination.currentPage + payload })
})