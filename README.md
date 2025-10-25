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

## Summary

- End‑to‑end leadership: evaluation, experimentation, approach selection (Analytics / Generative AI / ML / Automation), build, deploy and scale.
- Practical, evidence‑first: prioritize ROI, validate with experiments (A/B, uplift, controlled tests) and move working solutions to production with observability and governance.
- Tech: ML, MLOps, LLMs, RAG, LangChain, Agents/MCP, Kubernetes, Docker, Azure, Databricks, MLflow, Hugging Face.

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

- ML (Prediction): propensity and uplift models with strict validation — measurable conversion uplift.
- LLMs & RAG: contextual retrieval and controlled generation to reduce hallucinations and improve user experience.
- Agents & MCP: orchestrated automation turning insights into actions (24/7 workflows).
- Infra/Stack: containerization, CI/CD and production‑ready deployments to ensure reliability and scale.

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


## 🎨 Storytelling Unificado

### Por Categoría de Proyecto

**Agentes**
- Headline: "De insights a acciones automáticas"
- Problema: Respuesta lenta a leads multicanal
- Solución: Agentes orquestados con herramientas y políticas
- Impacto: 24/7; +x% conversión inbound


## 🔧 Personalización

### Para actualizar proyectos:
1. Edita el archivo `js/projects.js` con los datos de tus proyectos
2. Agrega las imágenes en `assets/images/projects/`
3. Actualiza los enlaces de repositorios y demos

### Para cambiar colores:
1. Edita las variables CSS en `:root` en `css/styles.css`
2. Los colores principales son `--turquoise`, `--blue`, `--navy`

### Para agregar contenido:
1. Sigue la estructura de las cards existentes
2. Usa las clases CSS definidas para mantener consistencia
3. Actualiza los filtros JavaScript si agregas nuevas categorías

## 📱 Responsive Design

- **Desktop**: Layout completo con grid de 12 columnas
- **Tablet**: Adaptación de columnas y espaciado
- **Mobile**: Stack vertical, navegación simplificada

## 🌐 Language

This portfolio is available in **English** only, designed for international reach and professional opportunities.

## 🚀 Despliegue

### GitHub Pages
1. Sube los archivos a un repositorio de GitHub
2. Habilita GitHub Pages en Settings > Pages
3. Selecciona la rama main como fuente
4. El workflow de GitHub Actions se ejecutará automáticamente

### Local Development
```bash
# Install dependencies
npm install

# Development server
npx live-server

# Access portfolio: http://localhost:8080/

# Build for production
npm run build
```

### Other hosts
- Any static host (Netlify, Vercel, etc.)
- You only need HTML, CSS and JS files

## 📊 Metrics and KPIs

The landing page is designed to showcase:
- **Technical experience**: Modern stack and diverse projects
- **Business impact**: Clear metrics in each project
- **Professional evolution**: Timeline connecting ML → Agents
- **Availability**: Clear CTAs for contact

## 🎯 Next Steps

1. **Add real projects**: Replace placeholders with current projects
2. **Optimize images**: Add thumbnails and real demo GIFs
3. **SEO**: Additional meta tags and structured data
4. **Analytics**: Google Analytics or similar
5. **Contact form**: Implement backend for form
6. **Blog**: Add technical articles section

## 📞 Contact

- **Email**: heligonzalespe@gmail.com
- **LinkedIn**: [linkedin.com/in/heligonzalespe](https://linkedin.com/in/heligonzalespe)
- **GitHub**: [github.com/heligonzalespe](https://github.com/heligonzalespe)

## 📄 License

MIT License - See LICENSE file for more details.