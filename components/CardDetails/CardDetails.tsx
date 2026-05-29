import { Car } from "@/types/car"
import css from "./CardDetails.module.css";
interface CarDetailsProps{
    car:Car
}

export default function CarDetails({car}:CarDetailsProps) {
    
    return (
        <div>
            <div className={css.carInfo}>
                <h2 className={css.carInfoTitle}>{car.brand} {car.model}, {car.year}</h2>
                <p className={css.carInfoLocation}>{car.location.city}, {car.location.country}</p>
                <h2 className={css.carInfoPrice}>${car.rentalPrice}</h2>
                <p className={css.carInfoDesc}>{car.description}</p>
            </div>
            <div className={css.rentalConditions}>
                <h3>Rental conditions:</h3>
                {car.rentalConditions.map((item, index) => (
                    <p key={index}>{item}</p>
                ) )}
            </div>
            <div className={css.specifications}>
                <h3>Car Specifications:</h3>
                <p>Year: {car.year}</p>
                <p>Type: {car.type}</p>
                <p>Fuel Consumption: {car.fuelConsumption}</p>
                <p>Engine: {car.engine}</p>
                <p>Mileage: {car.mileage}</p>
            </div>
            <div className={css.features}>
                <h3>Features</h3>
                {car.features.map((item, index) => (
                    <p key={index}>{item}</p>
                ) )}
            </div>
        </div>
    )
}