# Logotipos de empresas SVG

Por padrão, este programa usa fundos de cores simples e rótulos de texto para criar tokens de empresa.
Se desejar, você pode usar [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) logotipos SVG.
SVG é o único formato suportado.

## Opções de logotipo da empresa

Existem quatro configurações para a opção "Logotipos da empresa" na página de [config](/config):

- `none` - Esta é a configuração padrão. Isso não usa SVGs e renderiza tokens como texto simples com fundo colorido da empresa.
- `original` - Utiliza os arquivos SVG fornecidos pela empresa sem edição em fundo branco.
- `match` - Isso usa o arquivo SVG da empresa fornecido, mas alterna todas as cores com a cor mais próxima do tema da empresa atualmente selecionado.
- `main` - Isso usa o arquivo SVG da empresa fornecido da mesma forma, `match` mas também altera a cor principal do logotipo para a cor da empresa definida no arquivo json do jogo.

Aqui estão alguns exemplos, `none`, `original`, `match` e finalmente `main` :

![none](/images/company-none.png)
![original](/images/company-original.png)
![match](/images/company-match.png)
![main](/images/company-main.png)

## Criando os arquivos SVG

Você pode usar qualquer programa ou método SVG normal para criar os SVGs necessários para o modo `original`.
A única parte importante é definir a caixa delimitadora viewBox / Document como uma caixa compacta contendo um círculo.
Eu recomendo usar um círculo (mesmo que você o remova antes de salvar) para saber como o logotipo ficará quando exibido em um circulo de cidade.

Lembre-se também de que o logotipo terá fundo branco.
Se você deseja que o logotipo tenha uma cor de fundo sólida,
recomendo permitir que essa cor passe pelo viewBox para que funcione bem ao imprimir tokens.

## Edição de cores

Para que as opções de cores acima funcionem, você precisa adicionar atributos de classe a qualquer coisa que seja uma cor.
Para qualquer coisa que tenha `fill` uma cor, adicione uma classe `color-<name>`.
Por exemplo, qualquer coisa vermelha no logotipo deve ter uma classe `color-red`.

Qualquer coisa que seja a cor “principal” de um logotipo TAMBÉM deve ter uma classe `color-main`.

Qualquer coisa que tenha uma cor de traço deve incluir `color-stroke-<name>` se for relevante e também (por exemplo: `color-stroke-purple`).

## Adicionando logotipos

Nomeie o logotipo com base na abreviatura da empresa desejada e coloque-o na pasta [/src/data/logos](https://github.com/18xx-maker/18xx-maker/tree/master/src/data/logos).
Feito isso, certifique-se de fazer um backup e executar:

```sh
yarn svgo
```

Isso otimizará o SVG e removerá qualquer coisa desnecessária dele. Isso é necessário para garantir que o aplicativo react possa carregá-lo.
Depois de executar isso, verifique seu SVG e certifique-se de que ainda esteja correto.
Se isso não acontecer ou você tiver problemas, por favor me avise. [let me know](mailto:kelsin@valefor.com).

Você também precisa executar:

```sh
yarn generate:logos:index
```

para gerar automaticamente um arquivo `index.js` com todos os logotipos.
Costumávamos editar esse arquivo manualmente, mas isso é mais fácil.
Isso será executado automaticamente como parte do `yarn build`.
