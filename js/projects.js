// Projects data and management - English version
const projectsData = {
    ml: [
        {
            id: 'cmab-banking',
            title: 'Banking personalization with CMAB',
            description: 'Contextual bandits system to optimize credit campaigns in real time.',
            thumbnail: 'assets/images/projects/cmab-thumbnail.jpg',
            tech: ['Python', 'XGBoost', 'Databricks', 'MLflow'],
            links: {
                repo: 'https://github.com/heligonzalespe/cmab-banking',
                demo: 'https://cmab-demo.vercel.app',
                case: 'assets/docs/cmab-case-study.pdf'
            },
            metrics: {
                conversion: '+12%',
                cost_savings: '18%'
            }
        }
    ],
    llms: [
        {
            id: 'customer-assistant',
            title: 'Customer service assistant with LLMs',
            description: 'Semantic understanding system for automatic ticket classification and response.',
            thumbnail: 'assets/images/projects/llm-assistant-thumbnail.jpg',
            tech: ['OpenAI', 'LangChain', 'Guardrails', 'FastAPI'],
            links: {
                repo: 'https://github.com/heligonzalespe/llm-customer-assistant',
                demo: 'https://llm-assistant-demo.vercel.app',
                hf_space: 'https://huggingface.co/spaces/heligonzalespe/customer-assistant'
            },
            metrics: {
                response_time: '-35%',
                nps: '+15'
            }
        }
    ],
    agentes: [
        {
            id: 'whatsapp-leads',
            title: 'WhatsApp leads agent',
            description: 'Agent orchestration for automatic multi-channel lead capture and qualification.',
            thumbnail: 'assets/images/projects/whatsapp-agent-thumbnail.jpg',
            tech: ['LangChain', 'WhatsApp API', 'CRM', 'Docker'],
            links: {
                repo: 'https://github.com/heligonzalespe/whatsapp-leads-agent',
                demo: 'https://whatsapp-agent-demo.vercel.app',
                case: 'assets/docs/whatsapp-agent-case.pdf'
            },
            metrics: {
                conversion: '+45%',
                response_time: '-60%',
                uptime: '24/7'
            }
        }
    ],
    mcp: [
        {
            id: 'multi-agent-coordination',
            title: 'Multi-agent coordination with MCP',
            description: 'Communication protocol between agents for complex distributed tasks.',
            thumbnail: 'assets/images/projects/mcp-coordination-thumbnail.jpg',
            tech: ['MCP Runtime', 'Event Bus', 'Redis', 'Kubernetes'],
            links: {
                repo: 'https://github.com/heligonzalespe/mcp-coordination',
                demo: 'https://mcp-demo.vercel.app',
                docs: 'https://mcp-coordination-docs.vercel.app'
            },
            metrics: {
                errors: '-80%',
                throughput: '+200%'
            }
        }
    ],
    rag: [
        {
            id: 'tech-docs-rag',
            title: 'RAG for technical documentation',
            description: 'Retrieval and generation system for queries on internal documentation.',
            thumbnail: 'assets/images/projects/rag-docs-thumbnail.jpg',
            tech: ['FAISS', 'Embeddings', 'Reranker', 'Streamlit'],
            links: {
                repo: 'https://github.com/heligonzalespe/tech-docs-rag',
                demo: 'https://rag-docs-demo.vercel.app',
                hf_space: 'https://huggingface.co/spaces/heligonzalespe/tech-docs-rag'
            },
            metrics: {
                accuracy: '+95%',
                cost_reduction: '-40%'
            }
        }
    ],
    infra: [
        {
            id: 'mlops-pipeline',
            title: 'MLOps Pipeline with K8s',
            description: 'Complete infrastructure for ML model deployment and monitoring in production.',
            thumbnail: 'assets/images/projects/mlops-pipeline-thumbnail.jpg',
            tech: ['Docker', 'Kubernetes', 'Helm', 'ArgoCD'],
            links: {
                repo: 'https://github.com/heligonzalespe/mlops-pipeline',
                demo: 'https://mlops-demo.vercel.app',
                docs: 'https://mlops-pipeline-docs.vercel.app'
            },
            metrics: {
                deployment_time: '-70%',
                reliability: '99.9%'
            }
        }
    ]
};

// Function to render project cards
function renderProjectCards(category = 'all') {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    let projectsToRender = [];

    if (category === 'all') {
        Object.entries(projectsData).forEach(([cat, categoryProjects]) => {
            categoryProjects.forEach(project => {
                projectsToRender.push({ ...project, category: cat });
            });
        });
    } else if (projectsData[category]) {
        projectsToRender = projectsData[category].map(project => ({ ...project, category }));
    }

    projectsGrid.innerHTML = projectsToRender.map(project => `
        <div class="project-card" data-category="${project.category}" data-project-id="${project.id}">
            <div class="project-thumbnail" style="background-image: url('${project.thumbnail}')">
                ${!project.thumbnail ? '📊' : ''}
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                ${Object.entries(project.links).map(([type, url]) => 
                    `<a href="${url}" class="project-link" target="_blank" rel="noopener">${getLinkText(type)}</a>`
                ).join('')}
            </div>
            ${project.metrics ? `
                <div class="project-metrics">
                    ${Object.entries(project.metrics).map(([key, value]) => 
                        `<span class="metric">${key}: ${value}</span>`
                    ).join(' | ')}
                </div>
            ` : ''}
        </div>
    `).join('');
}

// Helper function to get link text
function getLinkText(type) {
    const linkTexts = {
        repo: 'Repo',
        demo: 'Demo',
        case: 'Case PDF',
        hf_space: 'HF Space',
        docs: 'Docs'
    };
    return linkTexts[type] || type;
}

// Initialize projects on page load
document.addEventListener('DOMContentLoaded', function() {
    renderProjectCards('all');
});