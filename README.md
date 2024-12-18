﻿# nintendo-copy-fan


# Como visualizar o projeto localmente

## Pré-requisitos
- Certifique-se de ter o [Node.js](https://nodejs.org/) instalado no seu computador. Se você não tiver, baixe e instale a versão mais recente.
- Você também pode precisar de um editor de código como o [Visual Studio Code](https://code.visualstudio.com/), para editar e visualizar os arquivos de forma mais eficiente.

## Passos para visualizar o projeto localmente

1. **Baixe o projeto**
   - Crie uma pasta no seu computador para o projeto.
   - Dentro dessa pasta, crie as subpastas necessárias (como `imgs`, `css`, `js`) e adicione os arquivos que você compartilhou (HTML, CSS, JavaScript).
   - Se o projeto já estiver em um repositório Git, você pode cloná-lo para o seu computador usando o comando:
     ```bash
     git clone <url-do-repositório>
     ```

2. **Abrindo o projeto no navegador**
- Para visualizar o projeto, abra o arquivo `index.html` diretamente no seu navegador. Você pode fazer isso clicando com o botão direito sobre o arquivo `index.html` e selecionando "Abrir com" o seu navegador preferido.
- Ou, se você preferir, pode usar um servidor local para rodar o projeto (usando uma ferramenta como [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)).

3. **Verificando a funcionalidade**
- Após abrir o arquivo HTML, navegue pelas páginas e interaja com os elementos. O formulário de contato, por exemplo, deve ser capaz de enviar dados se configurado corretamente.
- Se tiver integração com a API (como FormSubmit), verifique se a resposta (sucesso ou erro) aparece conforme o esperado após enviar o formulário.

---

## APIs utilizadas

### 1. FormSubmit API
- A API **FormSubmit** é usada para enviar formulários por e-mail sem precisar de um backend. Você apenas define o `action` do formulário com o seu e-mail de destino, e ele cuida do resto.
- No seu caso, o formulário de contato envia os dados para `https://formsubmit.co/ajax/pedrocaetanolessa@gmail.com` (um e-mail específico) quando o usuário preenche o formulário.

**Como funciona:**
- O formulário é enviado via método `POST` para a URL fornecida.
- Quando o envio é bem-sucedido, a API exibe uma mensagem de sucesso, e, em caso de erro, uma mensagem de falha.

---

## Bibliotecas externas aplicadas no projeto

### 1. Swiper.js
- **Link**: [Swiper.js](https://swiperjs.com/)
- **Função**: Swiper é uma biblioteca de carrossel de slides altamente flexível e com suporte a toques, arrastos e outros gestos. É utilizada no seu projeto para exibir os slides de "Destaques" e "Depoimentos".

**Como funciona:**
- A biblioteca permite que você crie slides interativos com navegação (botões para avançar e voltar), além de ter opções de paginar os slides.
- O código que você forneceu inicializa a biblioteca, configura os slides e seus controles, e também aplica o efeito de loop e navegação.

### 2. FontAwesome
- **Link**: [FontAwesome](https://fontawesome.com/)
- **Função**: FontAwesome é uma biblioteca de ícones que você usou para os ícones de navegação no Swiper (setas de navegação).

**Como funciona:**
- O código utiliza a classe `swiper-button-prev::after` e `swiper-button-next::after` para adicionar os ícones de navegação no Swiper, utilizando os ícones de seta `\f053` (esquerda) e `\f054` (direita).

### 3. Google Fonts (Poppins)
- **Link**: [Google Fonts](https://fonts.google.com/)
- **Função**: A fonte **Poppins** é aplicada em todo o site para dar um estilo moderno e legível ao conteúdo.

**Como funciona:**
- O `@import` que você incluiu no CSS carrega a fonte **Poppins** da Google Fonts para que todos os textos do projeto utilizem essa fonte.

### 4. CSS3 e Flexbox
- **Função**: Não é uma biblioteca externa, mas o seu projeto utiliza técnicas de layout moderno com **Flexbox** para posicionar os elementos de forma responsiva e garantir que o design se adapte a diferentes tamanhos de tela.

---

## Explicação do funcionamento geral do projeto

1. **Formulário de contato:**
- O formulário envia dados (nome, e-mail e mensagem) para um serviço de terceiros (FormSubmit) que processa e envia os dados para o e-mail que foi configurado na URL de ação (`pedrocaetanolessa@gmail.com`).
- Após o envio, o formulário exibe uma mensagem de sucesso ou erro.

2. **Seções dinâmicas (Swiper e Cards):**
- **Swiper.js** é utilizado para criar os carrosséis de imagens (exibindo "Destaques" e "Depoimentos").
- As **Cards** são utilizadas para exibir jogos ou consoles, com interatividade adicional, como a exibição de conteúdo extra quando o mouse passa sobre as cartas.

3. **Responsividade:**
- Através de consultas de mídia (`@media`), o layout do site é ajustado para se adaptar a diferentes tamanhos de tela, proporcionando uma experiência agradável tanto em desktop quanto em dispositivos móveis.

4. **Footer e Navegação:**
- O **footer** contém informações de copyright e links. A navegação é simples, com links para diferentes seções do site e uma loja externa.
