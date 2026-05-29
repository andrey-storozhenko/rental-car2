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
            setBrand: (newBrand) => {
                set({ brand:newBrand });
            },
            setPriceRange: (newPriceRange) => {
                set({priceRange:newPriceRange})  
            },
            resetFilters: () => {

            },
            setMileageFrom: (from) => {
                set((state) => ({
                    mileageRange: {
                        ...state.mileageRange,
                        from:from,
                    }
                }));
            },
            setMileageTo: (to) => {
                set((state) => ({
                    mileageRange: {
                        ...state.mileageRange,
                        to:to,
                    }
                }));
            },
        }
    })
);
