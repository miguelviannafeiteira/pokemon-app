import { PropsWithChildren, RefObject } from "react";

type Props = PropsWithChildren & {
    isVisible: boolean
    modalRef: RefObject<HTMLDivElement>
}

export function Modal({ isVisible, modalRef, children }: Props) {
    return isVisible ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" >
            <div className="rounded-3xl shadow-lg" ref={modalRef}>
                {children}
            </div>
        </div>
    ) : null
}