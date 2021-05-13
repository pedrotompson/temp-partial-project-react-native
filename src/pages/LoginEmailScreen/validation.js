import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Informe um e-mail válido")
    .required('Preencha o e-mail'),
})