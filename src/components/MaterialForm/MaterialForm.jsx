import {Formik, Form, Field} from 'formik';

export const MaterialForm = ({onSubmit}) => {
   const handleSubmit = async(values, action) => {
     await onSubmit(values);
     action.setSubmitting(false);
     action.resetForm();
   }
     return (
     <Formik initialValues={{title:'', link:''}}
     onSubmit={handleSubmit}>
          {({isSubmitting}) => (
               <Form>
               <label>
                    Опис
                    <Field name="title" type="text"/>
               </label>
               <br />
               <label>
                    Посилання
                    <Field name="link" type="text"/>
               </label>
               <br />
               <button type="submit" disabled={isSubmitting}>
                    Додати матеріали
               </button>
          </Form>
          )}
     </Formik>
   );
};