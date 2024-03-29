
# ![Anilox Design](https://lh3.googleusercontent.com/pw/ABLVV84J309X3DRLYFbwpfEuHHHzxblI__7vPIvb7Yp3eRvzcDp3xF3w1lLQExuq7eJAAZXtovaTiUva4TDwR-bt_D0W2EHu4CnS7boPUEoQsgtDo0tVt3Oc6yHINTnvC4uryZpnd4KQTe0QQe8KrTNLJZoxLA=w3224-h1606-s-no?authuser=0)
# Anilox Design
<table>
<tr>
<td>
O site da Anilox Design oferece um sistema completo que permite aos usuários se cadastrarem e fazerem login para solicitar novas artes, requisitar alterações e visualizar as artes solicitadas. Além disso, apresenta uma página administrativa que possibilita o gerenciamento dos clientes, incluindo funções como exclusão e adição de créditos para solicitações de artes. Conta também com um dashboard que centraliza todas as artes requisitadas por clientes, oferecendo facilidades para seu gerenciamento. Este é um portal completo não apenas para atender às demandas atuais, mas também para atrair novos clientes.
</td>
</tr>
</table>


## Demo
Aqui está um link com o a demonstração do site :  https://aniloxdesign.000webhostapp.com/


## O que oferecemos
Combinamos expertise técnica com criatividade para oferecer um serviço de design flexográfico excepcional. Nosso site proporciona uma experiência interativa e simplificada para nossos clientes:

### Cadastro e Login:
Os usuários podem facilmente se cadastrar e fazer login para acessar nossos serviços personalizados.

![](https://github.com/maiqueanderson/anilox_design/blob/main/src/assets/cadastro.png?raw=true)

### Dashboard do cliente:
Oferecemos uma plataforma intuitiva onde os clientes podem solicitar novas artes, requisitar alterações, visualizar as artes solicitadas proporcionando uma comunicação direta e eficiente com nossa equipe.

![dashboardADM](https://github.com/maiqueanderson/anilox_design/blob/main/src/assets/dashboard.gif?raw=true)

### Dashboard de Administração
Facilitando a gestão, nosso site dispõe de uma área administrativa dedicada ao gerenciamento de clientes, oferecendo recursos como a adição e remoção de créditos para solicitações de artes. Além disso, nosso dashboard centraliza todas as artes requisitadas por cada cliente, proporcionando uma visão abrangente do progresso e simplificando a administração.

![dashboardADM](https://github.com/maiqueanderson/anilox_design/blob/main/src/assets/admDashboard.gif?raw=true)


## Site Responsivo
Nossa plataforma foi cuidadosamente desenvolvida para ser totalmente responsiva, adaptando-se perfeitamente a todos os tamanhos de tela, incluindo dispositivos móveis. Isso significa que você terá uma experiência consistente e intuitiva, seja navegando em um desktop, tablet ou smartphone.

![](https://github.com/maiqueanderson/anilox_design/blob/main/src/assets/responsivo.gif?raw=true)




## Como Usar

Para clonar e executar esta aplicação, você precisará ter o Git e o Node.js (que vem com o npm) instalados no seu computador. A partir da linha de comando:

```bash
# Clone este repositório
$ git clone https://github.com/maiqueanderson/anilox_design.git

# Vá para o repositório
$ cd anilox_design

# Instalar dependências
$ npm install

# Inicizlizar o site
$ npm rum start
```

[Firebase Authentication Documentação](https://firebase.google.com/docs/firestore?hl=pt-br)

Este projeto utiliza a funcionalidade de autenticação do Firebase para permitir a criação de usuários através do método de autenticação por e-mail e senha. Para habilitar essa funcionalidade no seu próprio projeto Firebase, siga os passos para ativar a autenticação por e-mail/senha.

[Cloud Firestore Documentação](https://firebase.google.com/docs/firestore?hl=pt-br)

O projeto utiliza o Cloud Firestore como banco de dados. Para configurar o Firestore no seu projeto Firebase, siga as instruções fornecidas e insira as credenciais no código conforme descrito abaixo:

- Insira o objeto de configuração do Firebase que contém as chaves e identificadores no arquivo firebaseconfig.js que está no diretorio src/database/firebaseconfig.js

```yaml
const firebaseConfig = {
  apiKey: "COLOQUE_AQUI_API_KEY",
  authDomain: "COLOQUE_AQUI_AUT_DOMAIN",
  projectId: "COLOQUE_AQUI_PROJECT_ID",
  storageBucket: "COLOQUE_AQUI_STORAGE_BUCKET",
  messagingSenderId: "COLOQUE_AQUI_SENDER_ID",
  appId: "COLOQUE_AQUI_APP_ID"
  };
```

- Crie um arquivo com nome Uid.js no seguinte diretorio: 

```bash
src/components/auth/Uid.js
```

- Dentro desse Arquivo Uid.js cole o código abaixo, salve o arquivo para poder iniciar o projeto com npm rum start

```yaml
const AdmUid = "COLOQUE_AQUI_UID_DO_ADM";

const getAdmUid = () => {
  return AdmUid;
};

export default getAdmUid;
```

- Após iniciar o projeto, vá para 'Área do Usuário' e crie um novo usuário que será designado como administrador. Preencha todos os campos de forma completa e precisa. Uma vez concluído, você será redirecionado para a página do usuário comum. Prossiga para o próximo passo.

- Acesse o console do Firebase e na coleção 'users', encontre o UID do usuário que acabou de ser criado e faça uma cópia dele. Em seguida, vá para o arquivo recém-criado 'Uid.js' e substitua "COLOQUE_AQUI_UID_DO_ADM" pelo UID do usuário recém-criado. Esse usuário será designado como Administrador do site."

## Acesso à Página de Administração

Após seguir corretamente os passos anteriores, você terá acesso à página de administração. Basta acessar o link:

```bash
localhost:3000/AdmLogin
```

Utilize o e-mail e senha do usuário que você criou para acessar o painel de controle administrativo.

## Desenvolvido utilizando as tecnologias:

- [React](https://www.w3schools.com/REACT/DEFAULT.ASP) - Este site foi desenvolvido usando React, uma biblioteca JavaScript popular para a criação de interfaces de usuário dinâmicas e interativas.
- [Firebase](https://firebase.google.com/docs/build?hl=pt-br) - O Firebase desempenhou um papel essencial neste projeto, atuando como o banco de dados central, fornecendo autenticação segura e permitindo o armazenamento de arquivos de forma eficiente.
- [React Bootstrap](https://react-bootstrap.netlify.app/docs/getting-started/introduction) - O React Bootstrap foi fundamental para o design do front-end deste site. Utilizando componentes prontos e responsivos, o React Bootstrap agregou agilidade e consistência ao desenvolvimento, garantindo uma interface visual moderna e adaptável.
- [React Router Dom](https://www.w3schools.com/react/react_router.asp) - O React Router DOM foi empregado para facilitar a navegação neste site. Com sua capacidade de criar rotas dinâmicas, o React Router DOM proporcionou uma experiência de usuário mais fluida, permitindo a transição entre diferentes páginas de forma eficiente e organizada.
- [Font Awesome](https://fontawesome.com/docs) - O Font Awesome foi utilizado para aprimorar a experiência visual deste site. Com sua vasta biblioteca de ícones, o Font Awesome adicionou elementos visuais atraentes e personalizados, complementando o design e a usabilidade da interface.


## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para obter mais detalhes.

---

© [Anilox Design](https://aniloxdesign.000webhostapp.com/) | Criado por Máique Anderson


