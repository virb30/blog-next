# Checklist de Migração: Nuxt para Next.js

## 1. Configuração Inicial
- [x] Criar projeto Next.js
- [x] Configurar Tailwind CSS
- [x] Configurar TypeScript
- [x] Configurar Font Awesome
- [x] Configurar variáveis de ambiente

## 2. Estrutura de Diretórios
- [ ] Criar estrutura de pastas:
  ```
  src/
  ├── app/
  │   ├── page.tsx (home)
  │   ├── about/
  │   ├── blog/
  │   └── carta/
  ├── components/
  ├── lib/
  ├── styles/
  └── utils/
  ```

## 3. Componentes a Migrar
- [ ] Header
- [ ] Logo
- [ ] Article
- [ ] Profile
- [ ] ContentRenderer
- [ ] Letter
- [ ] CookieConsent
- [ ] Pagination
- [ ] Spinner
- [ ] ThemeSwitcher

## 4. Funcionalidades
- [ ] Sistema de temas (dark/light mode)
- [ ] Integração com Ghost CMS
- [ ] Google Analytics
- [ ] Firebase
- [ ] Sistema de rotas
- [ ] SEO e meta tags

## 5. Estilos e Assets
- [ ] Migrar SCSS para CSS Modules ou Tailwind
- [ ] Configurar fontes (Roboto)
- [ ] Migrar assets estáticos

## 6. Integrações
- [ ] Configurar Ghost API
- [ ] Configurar Firebase
- [ ] Configurar Google Analytics

## 7. Otimizações
- [ ] Implementar SSR/SSG
- [ ] Configurar cache
- [ ] Otimizar imagens
- [ ] Implementar lazy loading

## 8. Testes
- [ ] Migrar testes existentes
- [ ] Configurar Vitest/Jest
- [ ] Implementar testes de componentes

## 9. Passos Detalhados para Migração
- [ ] **Etapa 1: Configuração Básica**
  - [ ] Configurar Next.js com TypeScript
  - [ ] Configurar Tailwind CSS
  - [ ] Configurar Font Awesome
  - [ ] Configurar variáveis de ambiente (Ghost, Firebase, Google Analytics)

- [ ] **Etapa 2: Estrutura de Diretórios**
  - [ ] Criar estrutura de pastas conforme o projeto Nuxt
  - [ ] Migrar arquivos estáticos (public/, assets/)

- [ ] **Etapa 3: Componentes**
  - [ ] Migrar componentes Vue para React (um por um)
  - [ ] Adaptar lógica de composables para hooks React
  - [ ] Migrar stores Pinia para gerenciamento de estado (Context API ou Redux)

- [ ] **Etapa 4: Rotas e Páginas**
  - [ ] Migrar páginas do Nuxt para o sistema de rotas do Next.js
  - [ ] Configurar layouts e templates

- [ ] **Etapa 5: Integrações**
  - [ ] Configurar Ghost API
  - [ ] Configurar Firebase
  - [ ] Configurar Google Analytics

- [ ] **Etapa 6: Estilos**
  - [ ] Migrar SCSS para CSS Modules ou Tailwind
  - [ ] Configurar fontes e assets

- [ ] **Etapa 7: Testes**
  - [ ] Configurar Vitest/Jest
  - [ ] Migrar testes existentes
  - [ ] Implementar novos testes para componentes React

- [ ] **Etapa 8: Otimizações**
  - [ ] Implementar SSR/SSG
  - [ ] Configurar cache
  - [ ] Otimizar imagens
  - [ ] Implementar lazy loading

## Notas
- Manter compatibilidade com as funcionalidades existentes
- Garantir que todas as integrações funcionem corretamente
- Manter a performance e SEO
- Documentar mudanças significativas 