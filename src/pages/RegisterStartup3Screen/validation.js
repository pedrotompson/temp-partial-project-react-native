import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  nomeResponsavel: yup
    .string()
    .required('Informe um nome'),
  sobrenomeResponsavel: yup
    .string()
    .required('Informe um sobrenome'),
  cpf: yup
    .string()
    .min(8, ({ min }) => `Informe um CPF válido`)
    .max(11, ({ max }) => `Informe um CPF válido`)
    .required('CPF é obrigatório'),
  dataNascimento: yup
    .string()
    .required('Informe a data de nascimento'),
  telefone: yup
    .string()
    .required('Informe seu telefone'),
})