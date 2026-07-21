# 🏛️ Central de Regularidade Corporativa

Plataforma web corporativa para gestão, consulta e emissão de certidões fiscais, trabalhistas e judiciais.

---

## 🚀 Como Executar Localmente

1. Abra o terminal no diretório do projeto:
   ```bash
   cd "C:\Users\victo\Desktop\projetos\legaldesk-pro"
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor local:
   ```bash
   npm run dev
   ```

4. Acesse o endereço informado no terminal (ex: `http://localhost:5173`).

---

## 🌐 Publicação na Vercel

### Opção 1: Via GitHub
1. Crie um repositório no seu GitHub.
2. Envie o código do projeto:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Central de Regularidade"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
   git push -u origin main
   ```
3. No painel da [Vercel](https://vercel.com), clique em **"Add New Project"** e importe o repositório.
4. Clique em **Deploy**.

---

## ⚙️ Funcionalidades Principais

- **Certidões Fiscais, Trabalhistas e Judiciais**: Links diretos organizados para os portais oficiais.
- **Bloco Rápido de CNPJs**: Formatação automática de números de 14 dígitos com botão de cópia rápida.
- **Gestão de Links**: Adição, edição e remoção de registros com persistência local.
- **Favoritos & Busca**: Filtragem em tempo real por termo ou marcação de favoritos.
- **Interface Responsiva**: Suporte nativo a temas claro e escuro.
