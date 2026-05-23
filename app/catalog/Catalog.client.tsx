"use client";
import { useState } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getCars, getFilters } from "@/services/carService";
import CarList from "@/components/CardList/CardList";
import { Car } from "@/types/car";
import FiltersSearch from "@/components/FiltersSearch/FiltersSearch";
import css from "./page.module.css";
import { FilterState } from "@/types/filters";
import { defaultFilters } from "@/stores/filterStore";
import { useFiltersStore } from '@/stores/filterStore';

export default function CatalogClient() {
        
    const [appliedFilters, setAppliedFilters] = useState(defaultFilters);
    const { brand, priceRange, mileageRange } = useFiltersStore();

    const filters:FilterState = {
        brand,
        priceRange,
        mileageRange,
    }
        
        const handleSearch = () => {
            setAppliedFilters(filters);
        }
    
        const {
        data:carsData,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey:["cars", appliedFilters],
        queryFn: ({ pageParam = 1 }) => getCars({page:pageParam, ...appliedFilters}),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.totalPages) {
            return lastPage.page + 1;
        }

        return undefined;
        },
    })

    const{
        data:filtersData,
        isError,
    } = useQuery({
        queryKey: ["car-filters"],
        queryFn:getFilters,
    })
    const allCars: Car[] = carsData?.pages.flatMap(page => page.cars) ?? [];
    
    const cars = allCars.filter((car) => {
        const matchesFromMileage = appliedFilters.mileageRange.from === null || appliedFilters.mileageRange.from === 0 || car.mileage >= appliedFilters.mileageRange.from;

        const matchesToMileage = appliedFilters.mileageRange.to === null || appliedFilters.mileageRange.to === 0 || car.mileage <= appliedFilters.mileageRange.to;

        return matchesFromMileage && matchesToMileage;
    });

    return (
        <div className={css.catalog}>
            <FiltersSearch brands={filtersData?.brands ?? []} priceRange={filtersData?.price ?? { min: 0, max: 0 }} onSearch={handleSearch}></FiltersSearch>
            <CarList cars={cars}></CarList>

            {hasNextPage && (
                <button onClick={() => fetchNextPage()}>
                    {isFetchingNextPage ? "Loading..." : "Load more"}
                </button>
            )}
        </div>
    );
}