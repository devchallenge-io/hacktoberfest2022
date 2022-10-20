# Single Responsibility Principle (SRP)

```Uma classe/função ou componente deve sempre fazer exatamente uma coisa```.

Inicialmente, este é o princípio mais importante a seguir ao desenvolver components em React. O SRP nos encoraja a fragmentar nosso código, de arquivos monolíticos contendo milhares de linhas, em dezenas de arquivos menores de 50 a 100 linhas.  

Isso porque nos encoraja a extrair funcionalidades de nossos arquivos em funções separadas, de modo que nossa base de código se torne mais modular. Isso o torna muito mais fácil de manter, pois fica fácil ver as várias partes divididas de alguma funcionalidade específica. Também torna nossa base de código muito mais robusta, pois fica muito mais fácil testar muitos arquivos separados menores do que um arquivo grande.  

Em resumo, se você está lutando para implementar bons testes, ou seus arquivos estão rotineiramente ficando acima de 150 linhas de código, provavelmente é um sinal de que você precisa fragmentar mais seu código. O ob­je­tivo prin­ci­pal deste prin­cí­pio é re­du­zir a com­ple­xi­dade. Você não pre­cisa in­ven­tar um pro­jeto so­fis­ti­cado para um pro­grama que tem ape­nas 150 li­nhas de có­digo. Faça uma dúzia de mé­to­dos bo­ni­tos, e você fi­cará bem.

Sendo assim, se em de­ter­mi­nado mo­mento você sente que está se tor­nando di­fí­cil focar em as­pec­tos es­pe­cí­fi­cos de um pro­grama, lem­bre-se do prin­cí­pio da res­pon­sa­bi­li­dade única e ve­ri­fi­que se já não é hora de di­vi­dir al­gu­mas funções/components/clas­ses em partes menores.

## Implementado no React

Vamos implementar a ideia de SRP em React, nota-se que você já pode está fazendo isso no dia-a-dia, isso é ótimo.

Devemos modularizar nossos componentes de modo que cada componente seja responsável por uma coisa, em vez de fazer componentes inchados que contenham toda a nossa aplicação. No entanto, isso significa "uma parte da interface do usuário" ou "uma parte da lógica associada a uma parte da interface do usuário"

Tomemos, por exemplo, o componente ***```<TodosPage />```*** abaixo, que buscará uma lista de todos de uma API, dividirá os 10 primeiros e exibirá isso para o usuário (não obstante o tratamento de erros).  

[Caso de estudo inicial](./react//exemplo-sem-srp.jsx)

No caso de uso acima vamos pensar sobre o que estamos realmente fazendo aqui:

1 - Estamos buscando alguns todos de uma API externa.
2 - Estamos transformando isso em uma lista de elementos a serem exibidos.
3 - Estamos exibindo a lista para nossos usuários.

Realmente, nosso componente ***```<TodosPage />```*** não deve se importar de onde vêm os todos, ou em que formato eles são exibidos.

Vamos implementar a ideia de SRP agora nesse simples componente, a idéia aqui é entender como e quando usar esse principio, vale lembrar que o mesmo não é uma regra e sim uma boa prática a ser seguida, agora vamos lá!

[Caso de estudo com SRP implementado](./react/exemplo-com-srp.jsx)

- ***```<TodosPage />```*** não se importa com os todos, como eles são recuperados ou como eles são formatados. Ele apenas sabe que precisa exibir uma página que os contenha.
- ***```<APIWrapper />```*** não se importa em formatar nada nem os todos. Trata apenas de recuperá-los e enviá-los pela TodosList.

- ***```<TodosList />```*** não se importa com a origem dos todos, apenas sabe que obtém uma lista de todos e deve exibir alguma área para renderizá-los.
  
- ***```<TodoItem />```*** não se importa com quantos todos existem, de onde vieram ou em que página serão exibidos. Ele apenas sabe que receberá um idand titlee deve retornar um contendo essa informação. ***```<li>```***

Isso torna nossa base de código muito mais modular e fácil de manter, pois cada componente lida apenas com uma coisa.

---

**Fontes:**

- <https://refactoring.guru/>
- <https://refactoring.guru/design-patterns/book>
- <https://www.youtube.com/watch?v=6SfrO3D4dHM>
- <https://medium.com/backticks-tildesthe-s-o-l-i-d-principles-in-pictures-b34ce2f1e898>
  