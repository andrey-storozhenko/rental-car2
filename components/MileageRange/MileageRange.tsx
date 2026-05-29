import { useFiltersStore } from '@/stores/filterStore';

export default function MileageRange() {
    const {actions } = useFiltersStore();
    return (
        <div>
            <input type="number"  onChange={(e) => actions.setMileageFrom(Number(e.target.value))} placeholder="From" />
            <input type="number"  onChange={(e) => actions.setMileageTo(Number(e.target.value))} placeholder="To"/>
        </div>
    )
}