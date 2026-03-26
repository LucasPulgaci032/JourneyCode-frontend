import {
  arrayCode,
  arrayDescription,
  arrayThirdContent,
  dataTypes,
  dataTypesCode,
  loopings,
  loopingsCode,
  operators,
  operatorsCode,
  varAndConstCode,
  varAndConsts,
  conditionalDescription,
  conditionalCode,
  functionDescription,
  functionCode,
} from "./text.ts";

export const initialContent = [
  {
    Variáveis: [varAndConsts, varAndConstCode],
  },
  {
    Tipagem: [dataTypes, dataTypesCode],
  },
  {
    Operadores: [operators, operatorsCode],
  },
  {
    Listas: [arrayDescription, arrayCode, arrayThirdContent],
  },
  {
    "Laços de repetição": [loopings, loopingsCode],
  },
  {
    "Estruturas de decisão": [conditionalDescription, conditionalCode],
  },
  {
    Funções: [functionDescription, functionCode],
  },
];