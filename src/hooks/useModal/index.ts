import { RefObject, useMemo, useState } from "react"
import { useDispatch } from "react-redux"
import { getPokemonDetailsUseCase } from "../../useCases/GetPokemonDetailsUseCase"
import { Pokemon } from "../../types"

export interface useModalGateway {
    showModal(pokemon: Pokemon): void
    hideModal(): void
    isModalVisible: boolean
    outSideClick(modalRef: RefObject<HTMLDivElement>): void
}

export function useModal(): useModalGateway {
    const [isModalVisible, shouldDisplayModal] = useState(false)

    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getPokemonDetails = useMemo(() => new getPokemonDetailsUseCase(dispatch), [])

    function showModal(pokemon: Pokemon): void {
        shouldDisplayModal(true)
        getPokemonDetails.getDetails(pokemon)
    }

    function hideModal(): void {
        shouldDisplayModal(false)
    }

    function outSideClick(modalRef: RefObject<HTMLDivElement>) {
        const outSideClickOnModal = (e: Event) => {
            if (!modalRef?.current?.contains(e.target as Node)) {
                hideModal()
            }
        }
        document.addEventListener("mousedown", outSideClickOnModal)
    }

    return {
        hideModal,
        showModal,
        outSideClick,
        isModalVisible,

    }
}