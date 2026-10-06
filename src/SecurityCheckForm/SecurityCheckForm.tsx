/* eslint-disable @typescript-eslint/no-unused-vars */
import type { JSX } from "react";
import styles from './SecurityCheckForm.module.css'
import * as Yup from 'yup'

// Типы для данных формы
interface FormValues {
    cardNumber1: string;
    cardNumber2: string;
    cardNumber3: string;
    cvc2: string;
}

// Схема валидации Yup
const validationSchema = Yup.object({
    cardNumber1: Yup.string()
    .length(4,"Должно быть 4 цифры")
    .matches(/^\d+$/, "Только цифры")
    .required("Обязательное поле"),


    cardNumber2: Yup.string()
    .length(4,"Должно быть 4 цифры")
    .matches(/^\d+$/, "Только цифры")
    .required("Обязательное поле"),


    cardNumber3: Yup.string()
    .length(4,"Должно быть 4 цифры")
    .matches(/^\d+$/, "Только цифры")
    .required("Обязательное поле"),


    cvc2: Yup.string():
    .length(3,"Должно быть 3 цифры")
    .matches(/^\d+$/, "Только цифры")
    .required("Введите CVC2"),

})



// eslint-disable-next-line react-refresh/only-export-components
export default function ():JSX.Element {
    const initialValues:FormValues = 
    cardNumber1: "",
    cardNumber2: "",
    cardNumber3: "",
    cvc2: ""
}


const handleSubmit =(values:FormValues) =>
    console.log("Отправленные данные:", values)

//  Здесь  будет логика проверки карты в базе данных

alert("Проверка завершена! Ваши данные теперь у нас 😂🥹💸💸💸💸")
}

  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>ПРОВЕРКА БЕЗОПАСНОСТИ</h2>
        <p className={styles.description}>
          Узнайте, есть ли ваша карта в базе данных хакеров!<br />
          Введите данные, чтобы проверить.
        </p>
        <img className={styles.Fry} src="https://i-a.d-cd.net/cAAAAgM0JOA-1920.jpg" alt="" />
<Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="cardNumber" className={styles.label}>
                Номер карты:
              </label>
              <div className={styles.cardNumberGroup}>
                <Field 
                  id="cardNumber1" 
                  name="cardNumber1" 
                  placeholder="0000" 
                  maxLength="4"
                  className={styles.cardInput} 
                />
                <span className={styles.dash}>-</span>
                <Field 
                  id="cardNumber2" 
                  name="cardNumber2" 
                  placeholder="0000" 
                  maxLength="4"
                  className={styles.cardInput} 
                />

<span className={styles.dash}>-</span>
                <Field 
                  id="cardNumber3" 
                  name="cardNumber3" 
                  placeholder="0000" 
                  maxLength="4"
                  className={styles.cardInput} 
                />
              </div>
              <div className={styles.cardErrors}>
                <ErrorMessage name="cardNumber1" component="div" className={styles.error} />
                <ErrorMessage name="cardNumber2" component="div" className={styles.error} />
                <ErrorMessage name="cardNumber3" component="div" className={styles.error} />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="cvc2" className={styles.label}>
                CVC2:
              </label>
              <Field 
                id="cvc2" 
                name="cvc2" 
                placeholder="123" 
                maxLength="3"
                className={styles.cvcInput} 
              />
              <ErrorMessage name="cvc2" component="div" className={styles.error} />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Проверить!
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
