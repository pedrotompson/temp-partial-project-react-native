import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Informe um e-mail válido")
    .required('E-mail é obrigatório'),
  senha: yup
    .string()
    .min(6, ({ min }) => `Senha deve ter no mínimo ${min} caracteres`)
    .required('Senha é obrigatória'),
  senhaRepete: yup
    .string()
    .oneOf([yup.ref('senha')], 'A repetição não está correta')
    .required('Confirmação da senha é obrigatória'),
})