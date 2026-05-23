import { create } from 'zustand'
import { FilterState, FilterStore } from "@/types/filters";


export const defaultFilters:FilterState = {
    brand: "",
    priceRange: null,
    mileageRange: {
        from: null,
        to:null,
    }
}

export const useFiltersStore = create<FilterStore>()(
    (set) => ({
        ...defaultFilters,
        actions: {
            setFilters: (newFilters) => {

            },
            setBrand: (newBrand) => {
                set({ brand:newBrand });
            },
            setPriceRange: (newPriceRange) => {
              set({priceRange:newPriceRange})  
            },
            resetFilters: () => {

            },
        }
    })
);
