import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  nomeStartup: yup
    .string()
    .required('O nome da startup é obrigatório'),
  cnpj: yup
    .string()
    .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/, 'Informe um CNPJ válido')
    .required('CNPJ é obrigatório'),
  valuation: yup
    .string()
    .required('Valuation é obrigatório'),
  estado: yup
    .string()
    .required('Selecione o estado'),
  cidade: yup
    .string()
    .required('Selecione a cidade'),
})