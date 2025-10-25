# 🚀 Professional Portfolio - Helí Gonzales Pérez

Modern landing page to showcase experience in Advanced Analytics, ML, Generative AI (LLMs & RAG), Agents (MCP) and Production Infrastructure.

## Project structure

```
portafolio/
├── index.html
├── css/styles.css
├── js/
├── assets/
│   ├── images/
│   │   ├── projects/
│   │   └── tech/
│   └── docs/
└── README.md
```


## Sections implemented

- Hero, About, Projects (filterable), Timeline (value path), Spotlight, Tech Stack, CTA, Footer.

## How to update

- Projects: edit `js/projects.js` and add thumbnails to `assets/images/projects/`.
- Colors: edit CSS variables in `css/styles.css`.
- Tech logos: place SVGs in `assets/images/tech/`.

## Local development

```bash
# optional: install deps
npm install

# serve locally
npx live-server
# open http://localhost:8080/
```

## Deployment

- Static hosts: GitHub Pages, Netlify, Vercel recommended.
- CI: GitHub Actions workflow (optional).

## Design & accessibility

- Responsive layout, accessible contrast, keyboard navigation and alt text for images.
- Interactions: hover effects, smooth scroll, lightweight animations.

## Storytelling highlights (examples)

- Agents: by now just a conversational bot to know more about my professional experience and get contact info.

## Next steps

1. Add real project entries and measurable outcomes.  
2. Optimize assets and accessibility.  
3. Integrate analytics and contact backend.  

## Contact

- Email: heligonzalespe@gmail.com  
- LinkedIn: https://linkedin.com/in/heligonzalespe  
- GitHub: https://github.com/heligonzalespe

## License

MIT
# 🚀 Professional Portfolio - Helí Gonzales Pérez

A modern and professional landing page that implements the specified wireframe and storytelling to showcase experience in ML, LLMs, Agents, MCP, RAG and Infrastructure.

## 📁 Estructura del Proyecto

```
portafolio/
├── 📄 index.html                 # Página principal
├── 📄 package.json              # Configuración del proyecto
├── 📄 .gitignore               # Archivos a ignorar en Git
├── 📁 .github/
│   └── 📁 workflows/
│       └── 📄 deploy.yml        # CI/CD para GitHub Pages
├── 📁 css/
│   ├── 📄 styles.css           # Estilos principales
│   └── 📄 forms.css            # Estilos para formularios
├── 📁 js/
│   ├── 📄 main.js              # JavaScript principal
│   ├── 📄 projects.js          # Gestión de proyectos
│   └── 📄 contact.js           # Funcionalidad de contacto
├── 📁 pages/
│   ├── 📄 about.html           # Página sobre mí
│   └── 📄 contact.html         # Página de contacto
├── 📁 assets/
│   ├── 📁 images/
│   │   ├── 📄 logo.svg         # Logo personalizado
│   │   ├── 📄 placeholder.svg  # Imagen placeholder
│   │   ├── 📁 projects/        # Thumbnails de proyectos
│   │   │   ├── 📄 cmab-thumbnail.jpg
│   │   │   ├── 📄 llm-assistant-thumbnail.jpg
│   │   │   ├── 📄 whatsapp-agent-thumbnail.jpg
│   │   │   ├── 📄 mcp-coordination-thumbnail.jpg
│   │   │   ├── 📄 rag-docs-thumbnail.jpg
│   │   │   └── 📄 mlops-pipeline-thumbnail.jpg
│   │   └── 📁 tech/            # Logos de tecnologías
│   │       ├── 📄 databricks.svg
│   │       ├── 📄 mlflow.svg
│   │       ├── 📄 azure.svg
│   │       ├── 📄 docker.svg
│   │       ├── 📄 kubernetes.svg
│   │       ├── 📄 langchain.svg
│   │       ├── 📄 vowpalwabbit.svg
│   │       └── 📄 huggingface.svg
│   └── 📁 docs/
│       └── 📄 cv.pdf           # CV en PDF
└── 📄 README.md                # Documentación
```