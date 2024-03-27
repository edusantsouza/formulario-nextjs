# Componente de Formulário

Formulário desenvolvido em Javascript dentro de um projeto NextJS, com
a estilização feita em Tailwind CSS.

- Requisitos:
  - Criar projeto React com NextJS:  [Começar um novo projeto React](https://react.dev/learn/start-a-new-react-project);
  - Instalar Tailwind: [Instalar Tailwind CSS com NextJS](https://tailwindcss.com/docs/guides/nextjs)
  - Importar o arquivo `form.css` para o componente raiz do projeto.


### ResponsiveForm

```bash
  <ResponsiveForm 
  maxWidth=" *tailwind max-width* " 
  width=" *tailwind width* " 
  />
```

O componente `ResponsiveForm.js` é o form em si, o componente princial, e espera receber duas props: `maxWidth` e `Width`. Essas duas props não possuem
valor padrão e são obrigatórias. No entanto, o valor delas esperar uma class Tailwind CSS relacionada a seus respectivos nomes.

- Veja [Width - Tailwind CSS](https://v2.tailwindcss.com/docs/width) na documentação.
- Veja [Max-Width - Tailwind CSS](https://v2.tailwindcss.com/docs/maxwidth) na documentação.

### InputField

```bash
 <InputField
          label="Nome"
          name="nome"
          placeholder="John"
          width="*tailwind width*"
          setContent={setName}
          content={name}
          display={displayState}
          reset={goBack}
        />
```
O componente `InputField.js` é o input personalizável do form e espera receber as props:

- label* -> Label do Input
- name* -> Name do Input
- placeholder* -> Placeholder do Input
- display* -> State criado no `ResponsiveForm.js` responsável pro controlar se  o Input será ou não mostrado na tela;
- setContent* -> setState criado no `ResponsiveForm.js` responsável por setar o value inserido no Input pelo usuário;
- content* ->  State criado no `ResponsiveForm.js` responsável por armazenar o value inserido no Input pelo usuário;
- reset* -> State criado no `ResponsiveForm.js` responsável por resetar os campos do Input ao finalizar a action do Form após submit;
- type -> Tipo do Input que já possui o **valor padrão como `text`**, mas que pode ser passado via prop alterando o type para: `text`, `email`, `number` e `date`
- width = Width do Input que já possui como **valor padrão a class do Tailwind `w-full`**, mas que pode variar o tamanho do Input conforme o necessário via Tailwind class.
- disabled -> Booleano que controla se o campo de Input está disabled ou não. **Seu valor padrão é `false`.**
- messageBool -> Booleano que controla se o aviso de erro abaixo do Input está visível ou não. **Seu valor padrão é `true` e o aviso do input só tem variações entre `* Esse campo deve ser preenchido ` (que é exibido para todos os tipos de input) e `* Esse campo deve ser possuir um e-mail válido ` (exibido para inputs do tipo email).**
   
As props que contém "*" são obrigatórias para o correto funcionamento do componente dentro do Form.

Veja [Passando Props para um componente](https://react.dev/learn/passing-props-to-a-component) na documentação.



### InputButton

```bash
 <InputButton
         value="Enviar"
        type="submit"
        name="submit"
        width="w-full"
        disabled={buttonState}
        display={displayState}
        />
```
O componente `InputButton.js` é o botão personalizável do form e espera receber as props:

- name -> Name do botão
- value* -> Texto que aparecerá no botão
- display* -> State criado no `ResponsiveForm.js` responsável pro controlar se  o botão será ou não mostrado na tela;
- setContent* -> setState criado no `ResponsiveForm.js` responsável por setar uma ação ao clicar no botão particularmente;
- content* ->  State criado no `ResponsiveForm.js` responsável por armazenar uma ação ao clicar no botão particularmente;
- type -> Tipo do botão que já possui o **valor padrão como `button`**, mas que pode ser passado via prop alterando o type para `submit`.
- width = Width do Input que já possui como **valor padrão a class do Tailwind `w-24`**, mas que pode variar o tamanho do Input conforme o necessário via Tailwind class.
- disabled -> Booleano que controla se o campo de Input está disabled ou não. **Seu valor padrão é `false`.**
- bgColor -> Cor do botão passada como class Taillwind.  **Seu valor padrão é `bg-blue-500`.**
- bgDisabled -> Cor do botão quando desabilitado passada como class Taillwind.  **Seu valor padrão é `bg-blue-300`.**
- bgHover -> Cor do botão quando em hover passada como class Taillwind.  **Seu valor padrão é `hover:bg-blue-600`.**
   
As props que contém "*" são obrigatórias para o correto funcionamento do componente dentro do Form.

### InputSelect

```bash
  <SelectField
          label="Gênero"
          name="gênero"
          standardValue="Selecione o seu gênero"
          width="*tailwind width*"
          display={displayState}
          content={itemSelect}
          setContent={setItemSelect}
          options={optionsSelect}
          reset={goBack}
        />
```
O componente `InputSelect.js` é o select personalizável do form e espera receber as props:

- label* -> Label do Input
- name* -> Name do Input
- standardValue* -> Primeiro valor do select
- display* -> State criado no `ResponsiveForm.js` responsável pro controlar se  o Input será ou não mostrado na tela;
- setContent* -> setState criado no `ResponsiveForm.js` responsável por setar o value selecionado no Input pelo usuário;
- content* ->  State criado no `ResponsiveForm.js` responsável por armazenar o value selecionado no Input pelo usuário;
- reset* -> State criado no `ResponsiveForm.js` responsável por resetar a seleção do Input ao finalizar a action do Form após submit;
- options* -> Essa é a lista de opções que o select vai possuir. **Deve ser uma `array` declarada em uma const dentro do `ResponsiveForm.js`**.
- width = Width do Input que já possui como **valor padrão a class do Taillwind `w-48`**, mas que pode variar o tamanho do Input conforme o necessário via Tailwind class.
- disabled -> Booleano que controla se o campo de Input está disabled ou não. **Seu valor padrão é `false`.**
   
   
As props que contém "*" são obrigatórias para o correto funcionamento do componente dentro do Form.

### FormStatus

```bash
     <FormStatus 
     setGoBack={setGoBack} 
     goBack={goBack} 
     />
```
O componente `FormStatus.js` é o input personalizável do form e espera receber as props:

- status -> Determina o tipo de mensagem que será exibida no final do formulário. 
Seu valor padrão é `success` e exibe uma mensagem de envio bem sucedido. Sua única variação é o valor `deleted`, que
exibe uma mensagem que o item foi deletado.
- setGoBack* -> setState criado no `ResponsiveForm.js` responsável por setar uma ação que retorna ao Form principal;
- goBack* ->  State criado no `ResponsiveForm.js` responsável por armazenar uma ação que retorna ao Form principal;

As props que contém "*" são obrigatórias para o correto funcionamento do componente dentro do Form.