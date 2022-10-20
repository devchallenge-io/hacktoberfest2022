/**
* A interface Builder especifica métodos para criar as diferentes partes do
* os objetos Produto.
*/
 interface Builder {
  producePartA(): void;
  producePartB(): void;
  producePartC(): void;
}

/**
* As classes ConcreteBuilder seguem a interface do Builder e fornecem
* implementações específicas das etapas de construção. Seu programa pode ter vários
* variações de Builders, implementadas de forma diferente.
*/
class ConcreteBuilder1 implements Builder {
  private product: Product1;

  /**
  * Uma nova instância do construtor deve conter um objeto de produto em branco, que é
  * usado em montagem posterior
  */
  constructor() {
      this.reset();
  }

  public reset(): void {
      this.product = new Product1();
  }

  /**
   * Todas as etapas de produção funcionam com a mesma instância do produto. 
   * usado em montagem posterior.
   */
  public producePartA(): void {
      this.product.parts.push('PartA1');
  }

  public producePartB(): void {
      this.product.parts.push('PartB1');
  }

  public producePartC(): void {
      this.product.parts.push('PartC1');
  }

  /**
  * Os construtores de concreto devem fornecer seus próprios métodos para
   * recuperar resultados. Isso porque vários tipos de construtores podem criar
   * produtos totalmente diferentes que não seguem a mesma interface.
   * Portanto, tais métodos não podem ser declarados na interface base do Builder
   * (pelo menos em uma linguagem de programação estaticamente tipada).
   *
   * Normalmente, após retornar o resultado final ao cliente, uma instância do construtor
   * deverá estar pronto para começar a produzir outro produto. É por isso
   * é uma prática comum chamar o método reset no final do
   * Corpo do método `getProduct`. No entanto, este comportamento não é obrigatório, e
   * você pode fazer seus construtores esperarem por uma chamada de reset explícita do
   * código do cliente antes de descartar o resultado anterior.
   */
  public getProduct(): Product1 {
      const result = this.product;
      this.reset();
      return result;
  }
}

/**
* Faz sentido usar o padrão Builder somente quando seus produtos são bastante
* complexo e requer configuração extensa.
*
* Ao contrário de outros padrões de criação, diferentes construtores de concreto podem produzir
* produtos não relacionados. Em outras palavras, os resultados de vários construtores podem não
* siga sempre a mesma interface.
*/

class Product1 {
  public parts: string[] = [];

  public listParts(): void {
      console.log(`Product parts: ${this.parts.join(', ')}\n`);
  }
}

/**
* O Diretor é responsável apenas por executar as etapas de construção em um
* sequência específica. É útil ao produzir produtos de acordo com um
* pedido ou configuração específica. Estritamente falando, a classe Director é
* opcional, pois o cliente pode controlar diretamente os construtores.
*/
class Director {
  private builder: Builder;

  /**
   * O Director trabalha com qualquer instância do construtor que o código do cliente passa
   * a ele. Desta forma, o código do cliente pode alterar o tipo final do novo
   *produto montado.
   */
  public setBuilder(builder: Builder): void {
      this.builder = builder;
  }

  /**
   * O Diretor pode construir diversas variações de produtos usando o mesmo
   * etapas de construção. * a ele. Desta forma, o código do cliente pode alterar o tipo final do novo
   *produto montado.
   */
  public buildMinimalViableProduct(): void {
      this.builder.producePartA();
  }

  public buildFullFeaturedProduct(): void {
      this.builder.producePartA();
      this.builder.producePartB();
      this.builder.producePartC();
  }
}

/**
* A interface Builder especifica métodos para criar as diferentes partes do
 * os objetos Produto.
 */


function clientCode(director: Director) {
  const builder = new ConcreteBuilder1();
  director.setBuilder(builder);

  console.log('Standard basic product:');
  director.buildMinimalViableProduct();
  builder.getProduct().listParts();

  console.log('Standard full featured product:');
  director.buildFullFeaturedProduct();
  builder.getProduct().listParts();

// Lembre-se, o padrão Builder pode ser usado sem uma classe Director.
  console.log('Custom product:');
  builder.producePartA();
  builder.producePartC();
  builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);