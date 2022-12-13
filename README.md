# React-native

## Criacao de projetos react-native

#### Componente de renderização em tela ( inicia, renderiza, termina )

**componentDidMount:** 
```
executado quando o componente termina de renderizar;
```

**componentDidUpdate:** 
```
executado quando o componente recebe alguma atualização	e não é executado 
na primeira vez que o componente carrega;
```

**componentWillUnmount:**
```
executado quando o componente é removido da tela;
```

**componentDidCatch:** 
```
chamado quando a aplicação encontra algum erro durante a renderização, em 
algum método do ciclo de vida ou no construtor de componentes filhos.
```

### > *REACT*

> *Hooks Básicos:*

**useState:**

```
usado para gerenciar estados;
```
**useEffect:**

```
usado para gerar efeitos colaterais a certas atualizações;
```
**useContext:**

```
usado para gerenciar contextos entre componentes distintos.
```

> *Hooks Adicionais:*

**useReducer:**

```
uma alternativa ao useState quando há lógicas complexas;
```
**useCallback:**

```
memoriza uma função, que só é atualizada quando os valores recebidos como argumento são atualizados;
```
**useMemo:**

```
semelhante ao useCallback, mas ao invés de função, armazena um valor;
```
**useRef:**

```
usado normalmente para acessar propriedades de componentes “filhos”;
```
**useImperativeHandle:**

```
usado para personalizar o valor da instância que será acessível aos componentes “pais”;
```
**useLayoutEffect:**

```
semelhante ao useEffect, porém é disparado na mesma fase que componentDidMount e componentDidUpdate. 
É preferível o uso do useEffect;
```
**useDebugValue:**

```
usado para definir um "label" em hooks customizados que irá aparecer somente em ferramentas de debug.
```
