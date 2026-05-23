import { Car } from "@/types/car";

export const createSelectOptions = <T>(items:T[]) => {
    return (items.map(value => ({
        value,
        label: String(value),
    })));
};