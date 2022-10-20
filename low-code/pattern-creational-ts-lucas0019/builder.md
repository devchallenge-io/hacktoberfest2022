# Patterns

Padrões de projeto (design patterns) são soluções típicas para problemas comuns em projeto de software. Cada padrão é como uma planta de construção que você pode customizar para resolver um problema de projeto particular em seu código.

Padrões são como um conjunto de ferramentas
para soluções de problemas comuns em design
de software. Eles definem uma linguagem
comum que ajuda sua equipe a se
comunicar mais eficientemente.


## Pattern Creational

Os pa­drões cri­a­ci­o­nais for­ne­cem vá­rios me­ca­nis­mos de cri­a­ção de ob­je­tos, que au­men­tam a fle­xi­bi­li­dade e reu­ti­li­za­ção de có­digo já existente.

## Builder

O Buil­der é um pa­drão de pro­jeto cri­a­ci­o­nal que per­mite você cons­truir ob­je­tos com­ple­xos passo a passo. O pa­drão per­mite que você pro­duza di­fe­ren­tes tipos e re­pre­sen­ta­ções de um ob­jeto usando o mesmo có­digo de construção.

**Exemplo básico**

```ts
// ...

class HotDog {
  constructor(
    public bread: string,
    public ketchup?: boolean,
    public mustard?: boolean,
    public kraut?: boolean
  ) {}

  addKetchup() {
    this.ketchup = true;
    return this;
  }
  addMustard() {
    this.mustard = true;
    return this;
  }
  addKraut() {
    this.kraut = true;
    return this;
  }
}

const myLunch = new HotDog('gluten free')
  .addKetchup()
  .addMustard()
  .addKraut();

  //...
```

**Como implementar o pattern**

1 - Certifique-se que você pode definir claramente as etapas comuns de construção para construir todas as representações do produto disponíveis. Do contrário, você não será capaz de implementar o padrão.

2 - Declare essas etapas na interface builder base.

3 - Crie uma classe builder concreta para cada representação do produto e implemente suas etapas de construção.

4 - Não se esqueça de implementar um método para 5 - recuperar os resultados da construção. O motivo pelo qual esse método não pode ser declarado dentro da interface do builder é porque vários builders podem construir produtos que não tem uma interface comum. Portanto, você não sabe qual será o tipo de retorno para tal método. Contudo, se você está lidando com produtos de uma única hierarquia, o método de obtenção pode ser adicionado com segurança para a interface base.

6 - Pense em criar uma classe diretor. Ela pode encapsular várias maneiras de construir um produto usando o mesmo objeto builder.

7 - O código cliente cria tanto os objetos do builder como do diretor. Antes da construção começar, o cliente deve passar um objeto builder para o diretor. Geralmente o cliente faz isso apenas uma vez, através de parâmetros do construtor do diretor. O diretor usa o objeto builder em todas as construções futuras. Existe uma alternativa onde o builder é passado diretamente ao método de construção do diretor.

8 - O resultado da construção pode ser obtido diretamente do diretor apenas se todos os produtos seguirem a mesma interface. Do contrário o cliente deve obter o resultado do builder.

## Exemplo conceitual

Este exemplo ilustra a estrutura do padrão de projeto Builder. Ele se concentra em responder a estas perguntas:

- De quais classes ele consiste?
- Quais papéis essas classes desempenham?
- De que maneira os elementos do padrão estão relacionados?

[Exemplo](./builder/exemplo.ts)

**Output do exemplo**

```txt
Standard basic product:
Product parts: PartA1

Standard full featured product:
Product parts: PartA1, PartB1, PartC1

Custom product:
Product parts: PartA1, PartC1
```

**Fonte**
- https://refactoring.guru/pt-br
- https://refactoring.guru/pt-br/design-patterns/book
- https://fireship.io/lessons/typescript-design-patterns/