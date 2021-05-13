import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  nomeResponsavel: yup
    .string()
    .required('Informe um nome'),
  sobrenomeResponsavel: yup
    .string()
    .required('Informe um sobrenome'),
  cpfCnpj: yup
    .string()
    .min(8, ({ min }) => `Informe um CPF ou CNPJ válido`)
    .max(14, ({ max }) => `Informe um CPF ou CNPJ válido`)
    .required('O CPF ou CNPJ é obrigatório'),
  dataNascimento: yup
    .string()
    .required('Informe a data de nascimento'),
  telefone: yup
    .string()
    .required('Informe seu telefone'),
})