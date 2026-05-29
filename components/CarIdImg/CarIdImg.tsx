import css from "./CarIdImg.module.css";
interface CardIdImgProps{
    imgSrc: string;
}

export default function CarIdImg({imgSrc}:CardIdImgProps) {
    return (
        <div>
            <img className={css.imageDetail} src={imgSrc} alt="car" />
        </div>
    )
}