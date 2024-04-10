type Props = {
    label: string
    value: string | number
}

export function LabelValueComponent({ label, value }: Props) {
    return (
        <div data-testid="labelValueComponent" className="flex justify-between pb-1 border-b-[1px] border-b-[#f4f4f4f4]">
            <span className="text-[#C4C6C9] font-bold">{label}</span>
            <p className="text-[#222222] font-bold">{value}</p>
        </div>
    )
}