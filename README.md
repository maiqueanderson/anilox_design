
# ![Anilox Design](https://lh3.googleusercontent.com/pw/ADCreHcB68b9EuGMxZBr-BMev_KThPbgYqWFfLRvoKaOcr3OJKMAV0Wm7AX0zJRrqcKQyRq78EBrQCGgV1puu4eCs4fYWJLvhCrLaMS4dgfbJH5G9_2yBQ_iiBwLEp1SVcvYft88_-CqjivXsIDvSbqfAMN6mw=w3242-h1774-s-no?authuser=0)
# Anilox Design
<table>
<tr>
<td>
O site da Anilox Design oferece um sistema completo que permite aos usuários se cadastrarem e fazerem login para solicitar novas artes, requisitar alterações e visualizar as artes solicitadas. Além disso, apresenta uma página administrativa que possibilita o gerenciamento dos clientes, incluindo funções como exclusão e adição de créditos para solicitações de artes. Conta também com um dashboard que centraliza todas as artes requisitadas por clientes, oferecendo facilidades para seu gerenciamento. Este é um portal completo não apenas para atender às demandas atuais, mas também para atrair novos clientes.
</td>
</tr>
</table>


## Demo
Aqui está um link com o a demonstração do site :  https://aniloxdesign.com.br


## O que oferecemos
Combinamos expertise técnica com criatividade para oferecer um serviço de design flexográfico excepcional. Nosso site proporciona uma experiência interativa e simplificada para nossos clientes:

### Cadastro e Login:
Os usuários podem facilmente se cadastrar e fazer login para acessar nossos serviços personalizados.

![](https://lh3.googleusercontent.com/pw/ADCreHd3iSk4KGDWQ5ATyK92V0JFKpKJJ_3j_4R2wjc99UOunsShHWi2g44I7BJKGrc4qcNy6tB1nynUXp2bFjCu3y6_3r2CQi0frsW2k61DUfn0zBmXnvDm5LypdguO5Ci25HOi8nKRiKokNBmhRrY4_Z1HQg=w3262-h1766-s-no?authuser=0)

### Dashboard do cliente:
Oferecemos uma plataforma intuitiva onde os clientes podem solicitar novas artes, requisitar alterações, visualizar as artes solicitadas proporcionando uma comunicação direta e eficiente com nossa equipe.

![dashboard](https://lh3.googleusercontent.com/pw/ADCreHeNO-J_xSgw67PUZHqFC0eJcNnkT79mhmgiNy9e57CTCb21hGbXjlj-HVp5bQQwljgSkeBUQHvzil7L1JP6rZePhO0Qm6dx37ntHCPwP9nTh8bNcxiI3zhATK4bsoz0cNm5D4GofiAQ1ppiJaCKj5TnxQ=w600-h330-s-no?authuser=0)

### Dashboard de Administração
Facilitando a gestão, nosso site dispõe de uma área administrativa dedicada ao gerenciamento de clientes, oferecendo recursos como a adição e remoção de créditos para solicitações de artes. Além disso, nosso dashboard centraliza todas as artes requisitadas por cada cliente, proporcionando uma visão abrangente do progresso e simplificando a administração.

![dashboardADM](https://lh3.googleusercontent.com/pw/ADCreHe4izi8XvenIY1JCX3v0vSdxnquCCvYZulgQFUCXcK-2tpr58bOcMPABhUYNUMDGItWQPwUlPgRP-R5tNdf8ZYZk60zx-GiCX2Xp715ySuhxZ_sABrv9GCA0wzWfd8FdmepJBDqM10esiafEYk3KJ4NOQ=w800-h440-s-no?authuser=0)


## Site Responsivo
Nossa plataforma foi cuidadosamente desenvolvida para ser totalmente responsiva, adaptando-se perfeitamente a todos os tamanhos de tela, incluindo dispositivos móveis. Isso significa que você terá uma experiência consistente e intuitiva, seja navegando em um desktop, tablet ou smartphone.

![](https://lh3.googleusercontent.com/pw/ADCreHepCi2RbXVP8pTp0nc67QaNRvtpdfdRuR70tizpNwHLReD1oIX5ZiNWSfNKeVSN9SiKoOcRJXa2TGirehw3ieOrfiCCrJK9kfZSVfq-Sl0YzVRG58Dnn-3Pp3gVQOefk94ueVyHpidz22hGMIuyDOMOmg=w1920-h1600-s-no?authuser=0)




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

Além disso, será necessário criar um projeto no Firebase e vinculá-lo ao código do site na pasta src/database/firebaseconfig.js, seguindo estas etapas:

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

Para começar, clique em 'Área do Usuário' e crie um novo usuario que será o ADM, preenchendo todos os campos. Após isso, você será redirecionado para a página de clientes. No Firebase, dentro da coleção 'users', localize o UID do usuário recém-criado e copie-o. Em seguida, crie um arquivo .env na raiz do projeto com o seguinte código: 

## Feito com




