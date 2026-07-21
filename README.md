## cuida facil

## 📖 Sobre o Projeto

O Cuida Fácil é um aplicativo de monitoramento de saúde pessoal desenvolvido para auxiliar usuários no acompanhamento de informações importantes do dia a dia. A plataforma centraliza registros de saúde em um único ambiente, promovendo organização, prevenção e qualidade de vida.

Com uma interface simples e intuitiva, o aplicativo permite registrar e acompanhar indicadores de saúde, medicamentos, exames e hábitos saudáveis, facilitando o controle das informações médicas pessoais.

---

## Funcionalidades

Aplicativo contém 19 Telas Atualmente.

- 💧 Controle diário de consumo de água
- 💊 Gerenciamento de medicamentos e horários
- 🦠 Cadastro de alergias
- 🩸 Monitoramento da glicemia
- 🩺 Controle da pressão arterial
- ⚖️ Cálculo automático do IMC
- 🧘 Área de meditação e bem-estar
- 🥗 Planejamento alimentar
- 💡 Mensagens motivacionais dinânmicas com opção de compartilhamento
- 🚨 Informações Sobre Ubs mais próxima e contatos de emergência
- ⚙️ Tela De Menu
- 👤 Perfil, onde o usuario poderá ver suas informações pessoais, editar e exlcluir se desejar
- Opçao de traduzir idioma para o o inglês

---

## Objetivo 🎯 

Meu Objetivo é Oferecer uma solução prática para que usuários possam acompanhar sua saúde de forma organizada, armazenando informações importantes e incentivando hábitos saudáveis por meio de ferramentas de monitoramento e prevenção.

---


## Tecnlogias Utilizadas


<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,laravel,mysql&theme=light" />
  </a>
</p>




## Preview 📸

<p align="center">
  <img width="250"  alt="image" src="https://github.com/user-attachments/assets/81ae6a5e-bad3-4f0c-b447-02c8821c5210" />

  <img src="https://github.com/user-attachments/assets/fec5492e-8a05-4415-895a-516b1c2d6621" width="250"/>

  <img src="https://github.com/user-attachments/assets/77cfe6cd-243f-4025-bb7a-29f54d50b39e" width="250"/>
</p>


## 🚀 Como executar o projeto


### 1. Clone o repositório

```bash
git clone https://github.com/NkAndre/backendCuidaFacil.git
cd backendCuidaFacil
```

### 2. Instale as dependências

```bash
composer install
```

### 3. Configure o arquivo de ambiente

Copie o arquivo de exemplo:

```bash
copy .env.example .env
```

> No Linux ou macOS:

```bash
cp .env.example .env
```

### 4. Configure o banco de dados

Abra o arquivo `.env` e altere as credenciais conforme sua configuração. Exemplo:

```env
DB_DATABASE=db_cuidafacil
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
```

### 5. Gere a chave da aplicação

```bash
php artisan key:generate
```

### 6. Inicie o servidor

```bash
php artisan serve
```

A aplicação estará disponível em:

```
http://127.0.0.1:8000
```
