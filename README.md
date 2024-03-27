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
  width=" *taillwind width* " 
  />
```

O componente `ResponsiveForm.js` é o form em si e espera receber duas props: `maxWidth` e `Width`. Essas duas props não possuem
valor padrão e são obrigatórias. No entanto, o valor delas esperar uma class Tailwind CSS relacionada a seus respectivos nomes.

- Veja [Width - Tailwind CSS](https://v2.tailwindcss.com/docs/width) na documentação.
- Veja [Max-Width - Tailwind CSS](https://v2.tailwindcss.com/docs/maxwidth) na documentação.



### InputField

```bash
 <InputField
          label="Nome"
          name="nome"
          placeholder="John"
          width="*taillwind width*"
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
- display* -> State criado no `ResponsiveForm.js` responsável pro controlarse  o Input será ou não mostrado na tela;
- setContent* -> setState criado no `ResponsiveForm.js` responsável por setar o value inserido no Input pelo usuário;
- content* ->  State criado no `ResponsiveForm.js` responsável por armazenar o value inserido no Input pelo usuário;
- reset* -> State criado no `ResponsiveForm.js` responsável por resetar os campos do Input ao finalizar a action do Form após submit;
- type -> Tipo do Input que já possui o **valor padrão como `text`**, mas que pode ser passado via prop alterando o type para: `text`, `email`, `number` e `date`
- width = Width do Input que já possui como **valor padrão a class do Taillwind `w-full`**, mas que pode variar o tamanho do Input conforme o necessário via Tailwind class.
- disabled -> Booleano que controla se o campo de Input está disabled ou não. **Seu valor padrão é `false`.**
- messageBool -> Booleano que controla se o aviso de erro abaixo do Input está visível ou não. **Seu valor padrão é `true` e o aviso do input só tem variações entre `* Esse campo deve ser preenchido ` (que é exibido para todos os tipos de input) e `* Esse campo deve ser possuir um e-mail válido ` (exibido para inputs do tipo email).**
   
As props que contém "*" são obrigatórias para o correto funcionamento do componente dentro do Form.

Veja [Passando Props para um componente](https://react.dev/learn/passing-props-to-a-component) na documentação.