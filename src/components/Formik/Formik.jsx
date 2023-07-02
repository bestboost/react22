import {Formik, Form, Field, ErrorMessage} from 'formik';
import styled from '@emotion/styled';
import * as yup from 'yup';

const schema = yup.object().shape({
     login: yup.string().required(),
     password: yup.string().min(6).max(10).required(),
});

const initialValues={ 
     login: '', 
     password: '' 
};

const Input = styled(Field)`
  color: red;
`;

const LoginForm = () => {
  const handleSubmit = (values, {resetForm}) => {
     resetForm();
  console.log("handleSubmit  values:", values)
};

     return(
          <Formik 
               initialValues={initialValues}
               validationSchema={schema}
               onSubmit={handleSubmit}>
         <Form autoComplete="off">
          <label htmlFor="login">
               Login <br/>
               <Input type="text" name="login"/>
               <ErrorMessage name="login" component="div" />
          </label>
          <br/>
          <label htmlFor="password">
               Password <br/>
               <Input type="password" name="password"/>
               <ErrorMessage name="password" component="div" />
          </label>
          <br/>
          <button type="submit">Submit</button>
         </Form>
         </Formik>
     );
};

export default LoginForm;