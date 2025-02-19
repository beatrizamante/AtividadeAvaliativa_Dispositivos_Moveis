# PDM - Atividade Avaliativa 2

## Diferença entre Testes Unitários e Testes End-to-End  

**Testes de unidade** testam as menores unidades da aplicação, nas assinaturas de entradas e saídas, procurando validar dados válidos e inválidos de I/O, geralmente sendo mockados.  

**Testes end-to-end (E2E)** atravessam toda a arquitetura do sistema, avaliando sua funcionalidade de fim a fim.  

---

## Configuração do Jest  

- **Jest** : Configuração padrão do Expo (https://docs.expo.dev/develop/unit-testing/), adicionar também dependências abaixo em package.json:  

### `package.json`:  

```json
"jest": {
    "preset": "jest-expo",
    "transformIgnorePatterns": [
      "node_modules/(?!((jest-)?react-native|@react-native/.*|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg|firebase|@firebase/.*))"
    ]
  }
```

---

## Executando os Testes  

Execute testes em **Jest**, por:  

```sh
npm run test
```

Execute testes **end-to-end (E2E)** com **Cypress**, por:  

```sh
cypress open
```

ou para escolher o ambiente em  

```sh
cypress run
```
