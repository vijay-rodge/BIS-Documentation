import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // ML Docs Sidebar (top left navigation)
  mlSidebar: [
    {
      type: 'category',
      label: 'AI & Multi-Agent Architecture',
      collapsed: false,
      items: [
        'ml/multi-agent-system',
        'ml/query-agent-intent',
        'ml/product-disambiguation-agent',
        'ml/mandatory-status-agent',
        'ml/testing-lab-agents',
        'ml/evaluation-benchmarks',
      ],
    },
    {
      type: 'category',
      label: 'Agent Capabilities & Fallbacks',
      collapsed: false,
      items: [
        'ai-agent/agent-overview',
        'ai-agent/gemini-agent',
        'ai-agent/intent-detection',
        'ai-agent/tool-selection',
        'ai-agent/context-management',
        'ai-agent/fallback-handling',
      ],
    },
  ],

  // Core Docs Sidebar
  coreSidebar: [
    {
      type: 'category',
      label: '01. Getting Started & Overview',
      collapsed: false,
      items: [
        'introduction/overview',
        'introduction/problem-statement',
        'introduction/objectives',
        'introduction/scope',
        'introduction/target-users',
        'introduction/use-cases',
      ],
    },
    {
      type: 'category',
      label: '02. Requirements & Solution',
      collapsed: true,
      items: [
        'requirements/functional-requirements',
        'requirements/non-functional-requirements',
        'requirements/system-requirements',
        'requirements/constraints',
        'solution/proposed-solution',
        'solution/solution-overview',
        'solution/innovation',
        'solution/benefits',
        'solution/impact',
      ],
    },
    {
      type: 'doc',
      id: 'architecture/system-architecture',
      label: '03. System Architecture',
    },
    {
      type: 'category',
      label: '04. BIS Standards & Compliance',
      collapsed: false,
      items: [
        'bis-knowledge/bis-overview',
        'bis-knowledge/standards',
        'bis-knowledge/qco',
        'bis-knowledge/amendments',
        'bis-knowledge/certification',
        'bis-knowledge/testing',
        'bis-knowledge/laboratories',
        'compliance/compliance-overview',
        'compliance/standard-applicability',
        'compliance/mandatory-certification',
        'compliance/qco-validation',
        'compliance/testing-requirements',
        'compliance/evidence-validation',
      ],
    },
    {
      type: 'doc',
      id: 'database/database-data-pipeline',
      label: '05. Database & Data Pipeline',
    },
    {
      type: 'category',
      label: '06. Backend & REST APIs',
      collapsed: true,
      items: [
        'backend/backend-overview',
        'backend/fastapi',
        'backend/project-structure',
        'backend/services',
        'backend/sqlalchemy',
        'backend/authentication',
        'backend/error-handling',
        'api/api-overview',
        'api/standards',
        'api/laboratories',
        'api/search',
        'api/chat',
      ],
    },
    {
      type: 'category',
      label: '07. Frontend Application',
      collapsed: true,
      items: [
        'frontend/frontend-overview',
        'frontend/project-structure',
        'frontend/chat-interface',
        'frontend/search-interface',
        'frontend/citations',
      ],
    },
    {
      type: 'category',
      label: '08. Security & Guardrails',
      collapsed: true,
      items: [
        'security/security-overview',
        'security/authentication',
        'security/authorization',
        'security/api-security',
        'security/prompt-injection',
      ],
    },
    {
      type: 'category',
      label: '09. Testing & Quality Assurance',
      collapsed: true,
      items: [
        'testing/testing-overview',
        'testing/unit-testing',
        'testing/api-testing',
        'testing/scenario-testing',
        'testing/evaluation-results',
      ],
    },
    {
      type: 'category',
      label: '10. Development Guide',
      collapsed: true,
      items: [
        'development/local-setup',
        'development/project-structure',
        'development/coding-guidelines',
        'development/git-workflow',
        'development/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: '11. Deployment & DevOps',
      collapsed: false,
      items: [
        'deployment/deployment-overview',
        'deployment/docker',
        'deployment/environment-variables',
        'deployment/ci-cd',
        'deployment/production',
        'deployment/monitoring',
      ],
    },
  ],

  // RAG Docs Sidebar
  ragSidebar: [
    {
      type: 'category',
      label: 'Retrieval-Augmented Generation (RAG)',
      collapsed: false,
      items: [
        'rag/architecture',
        'rag/embeddings-vector-store',
        'rag/hybrid-retrieval',
        'rag/clause-chunking',
        'rag/reranking-engine',
        'rag/citation-engine',
      ],
    },
  ],
};

export default sidebars;
