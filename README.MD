# Hooks - React

## Custom Hooks

Em alguns casos vamos precisar ter funções, variáveis, métodos entre outros que podem ser compartilhados entre diferentes components, em algumas vezes a mesma logica podemos ser aplicada, com isso mudando somente os tipos de um estado e etc.

Neste caso, podemos criar um hook genérico que obterá a lista necessária. Esse hook pode ser utilizado em diferentes componentes, evitando a repetição de código. Além disso, podemos passar um parâmetro para esse hook, que será uma função que retorna uma promessa que, quando resolvida, fornece a lista necessária. Dessa forma, podemos obter diferentes listas em diferentes componentes usando o mesmo hook.

### Exemplo antes de criar o hook customizado

Como poderá ver no código abaixo assim estava o component Missions e Rockets, obtendo os valores da API e com o retorno setando os valores em um estado aonde esse estado será usado para renderizar as respectivas listas:

**Missions**

```tsx
const Missions: FC = () => {
  const [missions, setMissions] = useState<MissionsType[]>([]);

  async function fetchRockets(): Promise<void> {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    setMissions(data);
  }

  useEffect((): void => {
    fetchRockets();
  }, []);

  return (
    <View style={screenStyle.container}>
      <Text style={screenStyle.title}>Missões</Text>
      <MissionList mission={missions} />
    </View>
  );
};

export default Missions;


```

**Rockets**

```tsx
const Rockets: FC = () => {
  const [rockets, setRockets] = useState<RocketsType[]>([]);

  async function fetchRockets(): Promise<void> {
    const response = await fetch('https://api.spacexdata.com/v4/rockets/');
    const data = await response.json();
    setRockets(data);
  }

  useEffect((): void => {
    fetchRockets();
  }, []);

  return (
    <View style={screenStyle.container}>
      <Text style={screenStyle.title}>Foguetes</Text>
      <RocketsList rockets={rockets} />
    </View>
  );
};

```

Observe que em ambos casos eu preciso buscar valores a api e com os dados do retorno, colocar em minha lista.

### Hook useList

Baseado nisso vamos criar um hook para que isso seja feita de forma generica, assim podendo ser usado em qualquer component que aplica essa logica.

**hook useList**

```tsx
export function useList<T>(fetchApi: () => Promise<T[]>) {
  const [list, setList] = useState<T[]>([]);

  const fetchList = useCallback(async () => {
    try {
      const response: T[] = await fetchApi();
      setList(response);
    } catch (error: Error | any) {
      throw new Error(error);
    }
  }, [fetchApi]);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  return {list, fetchList};
}

```

Observe que foi usado gererics do typescript para nossa tipagem, com ele é essencial para que nosso hook tenha uma tipagem correta.

### Implementando o hook e melhorando nossos components

Agora com o hook criado, vamos implementado nos respectivos components e veremos que termos o mesmo resultado, porem com um component mais limpo.

**Missions**

```tsx
async function fetchMissions(): Promise<MissionsType[]> {
  const response: Response = await fetch(
    'https://api.spacexdata.com/v3/missions',
  );
  const data: MissionsType[] = await response.json();
  return data;
}

const Missions: FC = () => {
  const {list} = useList<MissionsType>(fetchMissions);

  return (
    <View style={screenStyle.container}>
      <Text style={screenStyle.title}>Missões</Text>
      <MissionList mission={list} />
    </View>
  );
};

export default Missions;
```

**Rockets**

```tsx
async function fetchRockets(): Promise<RocketsType[]> {
  const response: Response = await fetch(
    'https://api.spacexdata.com/v4/rockets/',
  );
  const data: RocketsType[] = await response.json();
  return data;
}

const Rockets: FC = () => {
  const {list} = useList<RocketsType>(fetchRockets);

  return (
    <View style={screenStyle.container}>
      <Text style={screenStyle.title}>Foguetes</Text>
      <RocketsList rockets={list} />
    </View>
  );
};

export default Rockets;

```

Veja agora que temos um component mais limpo com nosso hook e o mesmo podendo ser passado em varios outros components, mudando somente sua função e o seu tipo.
