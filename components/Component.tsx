import { useSetAtom } from 'jotai'
import { goToLastPageAtom } from '../atoms/pageAtom'

export default function() {
    const setPage = useSetAtom(goToLastPageAtom)
    return (
        <button onClick={() => {
            setPage(6)
        }}>Component button</button>
    )
}