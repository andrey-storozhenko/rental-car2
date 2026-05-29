import { createBookCar } from "@/services/carService";
import { Field, Form, Formik, FormikHelpers } from "formik";
import css from "./BookForm.module.css";
interface BookFormValues {
  name: string;
  email: string;
  comment:string,
}

const initialValues: BookFormValues = {
  name: "Name*",
  email: "Email*",
  comment: "Comment"
};

type IdProps = {
  carId: string;
};

export default function BookForm({carId}:IdProps) {
    const handleSubmit = async (values: BookFormValues, actions: FormikHelpers<BookFormValues>) => {
        try {
            const data = await createBookCar(carId, values);
            actions.resetForm();
        } catch (error) {
            console.log(error);
        }
        
    };
    return (
        <div className={css.bookFormContainer}>
            <h3 className={css.bookFormTitle}>Book your car now</h3>
            <p className={css.bookFormText}>Stay connected! We are always ready to help you.</p>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className={css.bookForm}>
                    <Field type="text" name="name" />
                    <Field type="email" name="email" />
                    <Field type="textarea" name="comment" />
                    <button className={css.bookFormButton} type="submit">Send</button>
                </Form>
            </Formik>
        </div>
       
    )
}