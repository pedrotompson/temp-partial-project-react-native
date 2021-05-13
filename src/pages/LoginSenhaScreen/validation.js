import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  senha: yup
    .string()
    .required('Preencha a senha'),
})