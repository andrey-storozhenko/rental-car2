import Select from 'react-select'
import { createSelectOptions } from "@/utils/createSelectOptions";
import { useFiltersStore } from "@/stores/filterStore";

interface SelectBrandProps {
    brands: string[];
}

export default function SelectBrand({ brands }: SelectBrandProps) {
    const brandOptions = createSelectOptions(brands);
    const { brand, actions } = useFiltersStore();
    return (
        <Select options={brandOptions} onChange={(selectedOption) => actions.setBrand(selectedOption?.value ?? "")}/>
    )
}