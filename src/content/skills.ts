export type SkillGroup = {
  labelFr: string;
  labelEn: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    labelFr: "Langages",
    labelEn: "Languages",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "PHP", "Python", "SQL"],
  },
  {
    labelFr: "Backend",
    labelEn: "Backend",
    items: [
      "Laravel",
      "Node.js / Express",
      "NestJS",
      "FastAPI",
      "API REST",
      "Spatie",
      "Sanctum",
      "Swagger / OpenAPI",
      "JWT",
    ],
  },
  {
    labelFr: "Frontend",
    labelEn: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    labelFr: "Bases de données",
    labelEn: "Databases",
    items: ["MySQL / MariaDB", "PostgreSQL", "MongoDB", "SQLite", "Supabase"],
  },
  {
    labelFr: "CMS",
    labelEn: "CMS",
    items: ["WordPress", "Moodle"],
  },
  {
    labelFr: "Intégrations API",
    labelEn: "API integrations",
    items: [
      "WhatsApp Business API",
      "PayDunya",
      "PayTech",
      "DExchange SMS",
      "DExapay",
      "Jitsi Meet",
    ],
  },
  {
    labelFr: "DevOps & Infra",
    labelEn: "DevOps & Infra",
    items: [
      "Docker",
      "Docker Compose",
      "GitHub Actions (CI/CD)",
      "OVH VPS",
      "AWS",
      "Cloudflare",
      "Nginx",
      "Apache",
      "cPanel",
    ],
  },
  {
    labelFr: "Systèmes & sécurité",
    labelEn: "Systems & security",
    items: ["Linux", "SSL/TLS", "DNS", "DHCP", "VPN", "iptables", "Fail2ban"],
  },
  {
    labelFr: "Mobile",
    labelEn: "Mobile",
    items: ["Flutter"],
  },
  {
    labelFr: "Outils",
    labelEn: "Tools",
    items: [
      "Git",
      "Postman",
      "Figma",
      "Jira / Trello",
      "Notion",
      "ESLint",
      "Prettier",
      "Vite",
      "GitHub Copilot",
    ],
  },
];
