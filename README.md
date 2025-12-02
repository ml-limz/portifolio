# 🎨 Portfólio Profissional - Branco & Vinho

Um portfólio elegante e moderno desenvolvido com HTML, CSS e JavaScript, seguindo uma paleta de cores sofisticada de branco e vinho (borgonha).

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Usar](#como-usar)
- [Personalização](#personalização)
- [Próximos Passos](#próximos-passos)

## 🎯 Visão Geral

Este portfólio foi criado para profissionais que desejam apresentar seu trabalho de forma elegante e profissional. O design moderno e responsivo utiliza uma paleta de cores sofisticada de branco e vinho, criando uma identidade visual única e memorável.

### 🎨 Paleta de Cores
- **Vinho Principal**: `#722f37` (cor principal)
- **Vinho Escuro**: `#5a252c` (hover e estados)
- **Vinho Claro**: `#8b3e46` (variações)
- **Branco**: `#ffffff` (fundo principal)
- **Branco Acinzentado**: `#f8f9fa` (seções secundárias)

## ✨ Funcionalidades

### 📄 Página Inicial (Portfolio)
- **Hero Section**: Apresentação impactante com call-to-action
- **Grid de Projetos**: Layout responsivo com cards de projetos
- **Galeria de Imagens**: Cada projeto suporta múltiplas imagens
- **Links de Projeto**: Botões para visualizar projeto e código fonte
- **Animações Suaves**: Efeitos hover e transições elegantes

### 👤 Página "Conheça Mais"
- **Perfil Pessoal**: Foto e descrição profissional
- **Estatísticas**: Números de projetos, experiência e clientes
- **Habilidades**: Barras de progresso por categoria (Frontend, Backend, Design)
- **Linha do Tempo**: Experiência profissional com timeline interativa
- **Certificações**: Cards com certificados e conquistas

### 📞 Página "Contato"
- **Informações de Contato**: Email, telefone, localização e disponibilidade
- **Formulário de Contato**: Validação em tempo real e envio simulado
- **Redes Sociais**: Links para LinkedIn, GitHub, Twitter, Instagram
- **FAQ**: Perguntas frequentes sobre processo de trabalho
- **Status de Disponibilidade**: Indicador visual de disponibilidade

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos modernos com variáveis CSS e animações
- **JavaScript Vanilla**: Interatividade sem dependências
- **Font Awesome**: Ícones profissionais
- **Google Fonts**: Tipografia Inter

### Features
- **Design Responsivo**: Adaptação perfeita para mobile
- **Menu Hamburguer**: Navegação otimizada para mobile
- **Animações ao Scroll**: Elementos aparecem com fade-in
- **Validação de Formulário**: Validação client-side
- **Scroll Suave**: Navegação fluida entre seções

## 📁 Estrutura do Projeto

```
portfolio-branco-vinho/
├── index.html              # Página principal (Portfolio)
├── about.html              # Pagem "Conheça Mais"
├── contact.html            # Página "Contato"
├── css/
│   └── style.css          # Estilos principais
├── js/
│   └── main.js            # JavaScript de interatividade
└── README.md              # Este arquivo
```

## 🚀 Como Usar

### 1. Estrutura Básica
O portfólio já vem com 3 projetos de exemplo. Para adicionar mais projetos:

```html
<!-- Adicionar novo projeto no index.html -->
<div class="project-card">
    <div class="project-images">
        <div class="main-image">
            <img src="caminho/para/imagem-principal.jpg" alt="Nome do Projeto" class="project-img">
        </div>
        <div class="thumbnail-images">
            <img src="caminho/para/thumb1.jpg" alt="Thumbnail 1" class="thumbnail">
            <!-- Adicionar mais thumbnails -->
        </div>
    </div>
    <div class="project-info">
        <h3 class="project-title">Nome do Projeto</h3>
        <p class="project-description">Descrição do projeto...</p>
        <div class="project-tech">
            <span class="tech-tag">Tecnologia 1</span>
            <span class="tech-tag">Tecnologia 2</span>
        </div>
        <div class="project-links">
            <a href="link-do-projeto" class="project-link">
                <i class="fas fa-external-link-alt"></i> Ver Projeto
            </a>
            <a href="link-do-codigo" class="project-link">
                <i class="fab fa-github"></i> Código
            </a>
        </div>
    </div>
</div>
```

### 2. Personalizar Informações

#### Sobre Mim (about.html)
```html
<!-- Atualizar foto de perfil -->
<img src="caminho/para/sua-foto.jpg" alt="Foto de Perfil" class="profile-img">

<!-- Atualizar estatísticas -->
<div class="stat-item">
    <h3 class="stat-number">SEU-NUMERO</h3>
    <p class="stat-label">Projetos Completos</p>
</div>

<!-- Atualizar habilidades -->
<div class="skill-progress" style="width: SEU-PERCENTUAL%"></div>
```

#### Informações de Contato (contact.html)
```html
<!-- Atualizar informações de contato -->
<p class="method-text">seu.email@dominio.com</p>
<a href="mailto:seu.email@dominio.com" class="contact-link">Enviar Email</a>

<p class="method-text">+55 (XX) X XXXX-XXXX</p>
<a href="https://wa.me/55XXXXXXXXXXX" class="contact-link">WhatsApp</a>
```

### 3. Imagens e Projetos

#### Substituição de Imagens
Substitua os placeholders `https://via.placeholder.com/` por suas imagens reais:

```html
<!-- Antes -->
<img src="https://via.placeholder.com/400x250/722f37/ffffff?text=Projeto+1" alt="Projeto 1" class="project-img">

<!-- Depois -->
<img src="images/projeto1-imagem-principal.jpg" alt="Projeto 1" class="project-img">
```

#### Organização de Imagens
Recomenda-se criar uma estrutura de pastas:
```
images/
├── projetos/
│   ├── projeto1/
│   │   ├── principal.jpg
│   │   ├── thumb1.jpg
│   │   ├── thumb2.jpg
│   │   └── thumb3.jpg
│   ├── projeto2/
│   │   └── ...
├── sobre/
│   └── foto-perfil.jpg
└── icons/
    └── ...
```

## 🎨 Personalização

### Cores
As cores são definidas com variáveis CSS no início do arquivo `css/style.css`:

```css
:root {
    --primary-color: #722f37;     /* Vinho principal */
    --primary-dark: #5a252c;      /* Vinho escuro */
    --primary-light: #8b3e46;      /* Vinho claro */
    --secondary-color: #ffffff;     /* Branco */
    --text-primary: #2c3e50;        /* Texto escuro */
    --text-light: #ffffff;          /* Texto claro */
}
```

### Tipografia
A fonte principal é a Inter do Google Fonts. Para mudar:

1. Substitua o link no `<head>` das páginas HTML
2. Atualize a fonte no CSS:
```css
body {
    font-family: 'Nova-Fonte', sans-serif;
}
```

### Animações
As animações são controladas pelas classes `.fade-in` e `.visible`. Ajuste os tempos no CSS:
```css
.fade-in {
    transition: all 0.6s ease; /* Ajuste o tempo aqui */
}
```

## 📱 Responsividade

O portfólio é totalmente responsivo com breakpoints em:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: até 767px

O menu hambúrguer é ativado automaticamente em dispositivos móveis.

## 🔧 Funcionalidades JavaScript

### Menu Mobile
```javascript
// Ativa/desativa menu hambúrguer
hamburger.addEventListener('click', toggleMenu);
```

### Animações Scroll
```javascript
// Elementos aparecem ao scrollar
window.addEventListener('scroll', animateOnScroll);
```

### Formulário de Contato
```javascript
// Validação e envio simulado
contactForm.addEventListener('submit', handleSubmit);
```

### Thumbnails de Projetos
```javascript
// Troca imagem principal ao clicar thumbnails
thumbnail.addEventListener('click', changeMainImage);
```

## 🚀 Próximos Passos

### Funcionalidades Recomendadas
1. **Sistema de Blog**: Adicionar página de blog ou artigos
2. **Dark Mode**: Alternância entre tema claro e escuro
3. **Idiomas**: Suporte para múltiplos idiomas
4. **Analytics**: Integração com Google Analytics
5. **SEO Avançado**: Meta tags dinâmicas

### Integrações Possíveis
1. **API de Email**: Integrar com EmailJS ou serviço similar
2. **CMS Headless**: Conectar a um CMS para gerenciamento de conteúdo
3. **Social Feed**: Integrar feed do Instagram ou LinkedIn
4. **Newsletter**: Sistema de inscrição para newsletter

### Melhorias de Performance
1. **Lazy Loading**: Carregamento tardio de imagens
2. **Minificação**: Comprimir CSS e JavaScript
3. **PWA**: Transformar em Progressive Web App
4. **Caching**: Implementar estratégias de cache

## 📞 Suporte

Se você encontrar problemas ou tiver dúvidas:

1. Verifique se todos os arquivos estão no lugar correto
2. Confirme que as imagens estão nos caminhos especificados
3. Teste no navegador com as ferramentas de desenvolvedor abertas (F12)
4. Verifique o console para mensagens de erro

## 📄 Licença

Este projeto é open-source e disponível para uso pessoal e comercial. Sinta-se à vontade para modificar e distribuir.

---

**Desenvolvido com ❤️ e muito código!** 🚀