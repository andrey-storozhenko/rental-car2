import SelectBrand from "../SelectBrand/SelectBrand";
import SelectPrice from "../SelectPrice/SelectPrice";
import MileageRange from "../MileageRange/MileageRange";

interface FiltersSearchProps{
    brands: string[],
    priceRange: {
        min: number,
        max:number,
    }
    onSearch: () => void;
}

export default function FiltersSearch({brands,priceRange, onSearch}:FiltersSearchProps) {
    return (
        <div>   
            <SelectBrand brands={brands}/>
            <SelectPrice priceRange={priceRange}/>
            <MileageRange/>
            <button onClick={onSearch}>Search</button>
        </div>
       
    )
}