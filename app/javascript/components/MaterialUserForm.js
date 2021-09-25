import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import axios from 'axios'
import setAxiosHeaders from './AxionHeaders'
import Container from '@material-ui/core/Container';
import Input from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {console.log(data);
        //data.preventDefault();
        setAxiosHeaders();
        axios
            .post('/usuarios', data )
            .then(response => {
                const todoItem = response.data
                this.props.createTodoItem(todoItem)
                this.props.clearErrors()
            })
            .catch(error => {
                this.props.handleErrors(error)
            });
        //data.target.reset()
      };

  return (
    <Container>
    <FormProvider onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="label_nombre">Nombre</label>
      <Input id="nombre" {...register('nombre', { required: true, maxLength: 30 })} />
      <label htmlFor="label_mail">eMail</label>
      <Input id="email" {...register('mail', { required: true, maxLength: 30 })} />
      {errors.nombre && errors.nombre.type === "required" && <span>This is required</span>}
      {errors.nombre && errors.nombre.type === "maxLength" && <span>Max length exceeded</span> }
      <br/><br/>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit(onSubmit)}
      >
        SUBMIT
      </Button>


    </FormProvider>
    </Container>
  );
}
