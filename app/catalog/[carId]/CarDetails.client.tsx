"use client";
import BookForm from "@/components/BookForm/BookForm"
import CarDetails from "@/components/CardDetails/CardDetails"
import CarIdImg from "@/components/CarIdImg/CarIdImg";
import { Car } from "@/types/car"
import css from "./CarDetails.client.module.css";

interface CarDetailsClientProps{
    car: Car,
    carId:string,
}

export default function CarDetailsClient({car,carId}:CarDetailsClientProps) {
    
    return (
        <div className={css.carDetails}>
            <div className="leftColumn">
                <CarIdImg imgSrc={car.img} />
                <BookForm carId={carId} />
            </div>
            <div className="rightColumn">
                <CarDetails car={car} />
            </div>
        </div>
    )
}