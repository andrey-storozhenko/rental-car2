
export interface MileageRangeFilter{
    from: number | null,
    to: number | null,
}

export interface FilterState{
    brand: string,
    priceRange: number | null,
    mileageRange: MileageRangeFilter,
}

export interface FilterActions{
    setFilters: (filters: Partial<FilterState>) => void;
    setBrand: (newBrand: string) => void;
    setPriceRange: (newPriceRange: number) => void;
    resetFilters: () => void;
}

export interface FilterStore extends FilterState{
    actions: FilterActions;
}