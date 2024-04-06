import { PropsWithChildren, RefObject } from "react";

type Props = PropsWithChildren & {
    onClose(): void
    isVisible: boolean
    modalRef: RefObject<HTMLDivElement>
}

export function Modal({ isVisible, onClose, modalRef, children }: Props) {
    return isVisible ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" >
            <div className="bg-white p-8 rounded-lg shadow-lg" ref={modalRef}>
                {children}
                <button
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={onClose}
                >
                    Fechar Modal
                </button>
            </div>
        </div>
    ) : null
}