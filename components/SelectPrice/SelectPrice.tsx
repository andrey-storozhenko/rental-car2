import Select from 'react-select'
import { createSelectOptions } from "@/utils/createSelectOptions";
import { useFiltersStore } from '@/stores/filterStore';

interface SelectPriceProps{
    priceRange: {
        min: number,
        max:number,
    }
}

export default function SelectPrice({priceRange}:SelectPriceProps) {
    const {actions } = useFiltersStore();
    const prices = [];
    if (priceRange !== null) {
        for (let i = priceRange.min; i <= priceRange.max; i += 10){
            prices.push(i);
        }
    }
    
    const priceOptions = createSelectOptions(prices);
    return (
        <Select options={priceOptions}
            onChange={(selectedOption) => actions.setPriceRange(Number(selectedOption?.value))}
            placeholder="Select price"
        />
    )
}