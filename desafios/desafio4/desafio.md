<br />
<p align="center">
  <h3 align="center">Desafio 4 - Teste de digitação</h3>

  <p align="center">
   DevChallenge Hacktoberfest 2022
  </p>

## Índice

- [Índice](#índice)
- [Desafio](#desafio)
  - [Aplicação](#aplicação)
  - [Objetivo](#objetivo)
  - [Requisitos](#requisitos)
  - [Extras](#extras)
  - [Dicas](#dicas)
- [Exemplos](#exemplos)
- [Comunidade](#comunidade)

## Desafio  

### Aplicação
Digitar rápido agiliza muito nossos processos do dia a dia e para melhorar nesse quesito, você gostaria de praticar. Então
resolveu um site para testar seu tempo de digitação.

### Objetivo
Você deverá criar um site com um teste de digitação em um tempo definido e a exibição da quantidade de acertos e erros ao final.

### Requisitos
- Criar uma tela que deverá conter: 
  1. O texto a ser digitado
  ```
  Para o texto a ser digitado, você pode fazer como preferir, seja deixando alguns exemplos salvos, utilizando alguma api ou gerando seus textos aleatórios.
  ```
  2. Um campo de texto para digitação
  ```
  Ao apertar a tecla espaço, significa que a pessoa finalizou a escrita de uma palavra e irá partir para a próxima. Utilize esta ação para comparar as palavras e contabilizar os erros e acertos
  ```
  3. Um contador de tempo que começa em 60 segundos e termina em 0.
    ```
  O tempo começa a rodar assim que a primeira tecla for digitada no campo de texto
  ```
 - Quando o tempo chegar em 0, deverá exibir a quantidade de palavras certas e erradas
<br>

### Extras
- Destaque com alguma cor no texto modelo a palavra que a pessoa está digitando no momento
- Adicione um botão caso o usuário queira iniciar um novo teste com um novo texto

### Dicas
- Nesse desafio você poderá criar o design da forma que preferir, então pode deixar a criatividade agir o/
- Você pode utilizar algumas funções do javascript para ouvir a ação de digitação, como:
```js
element.addEventListener("keydown", (event) => {
//criar sua lógica aqui
})
```

## Exemplos
- https://10fastfingers.com/typing-test/portuguese


## Comunidade
Caso tenha alguma dúvida sobre os desafios, fique à vontade para pedir ajuda na comunidade do [discord](https://discord.gg/yvYXhGj)

<br><br>

Site: <https://www.devchallenge.com.br/> 

<br>

<table style="border-color:transparent">
   <th>
    <td>
      <a href="https://discord.gg/yvYXhGj"><img src="https://cdn3.iconfinder.com/data/icons/discord/64/discord_20-512.png" width="30px" height="30px" alt="Discord">      
      </a>
    </td>
    <td>
      <a href="https://www.linkedin.com/company/devchallenge/"><img src="https://cdn3.iconfinder.com/data/icons/glypho-social-and-other-logos/64/logo-linkedin-512.png" width="35px" height="35px"  alt="Linkedin">
      </a>
    </td>
    <td>
      <a href="https://twitter.com/dev_challenge">
        <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png" width="30px" height="30px" alt="Twitter">
      </a>
    </td>
    <td>
      <a href="https://www.instagram.com/devchallenge/"><img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-3-512.png" width="30px"            height="30px" alt="Instagram">
      </a>
    </td>
   </th>
</table>
