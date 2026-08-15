export type ProjectStatus = "production" | "tests" | "dev";

export type Project = {
  slug: string;
  name: string;
  taglineFr: string;
  taglineEn: string;
  descriptionFr: string;
  descriptionEn: string;
  stack: string[];
  status: ProjectStatus;
  yearFrom: number;
  yearTo?: number;
  role: string;
  url?: string;
  repo?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "nurapic",
    name: "Nurapic",
    taglineFr: "Photos événementielles + reconnaissance faciale",
    taglineEn: "Event photography + facial recognition",
    descriptionFr:
      "Plateforme de vente de photos événementielles avec reconnaissance faciale et QR code. Les invités retrouvent leurs propres photos en trois secondes ; le photographe garde 70 %.",
    descriptionEn:
      "Event photography sales platform with facial recognition and QR codes. Guests find their own photos in three seconds; photographers keep 70%.",
    stack: ["Next.js", "NestJS", "FastAPI", "Docker", "OVH"],
    status: "production",
    yearFrom: 2026,
    role: "Co-founder · Tech lead",
    url: "https://nurapic.com",
    featured: true,
  },
  {
    slug: "ecomed24",
    name: "ecoMed24",
    taglineFr: "Plateforme SaaS de gestion médicale",
    taglineEn: "Medical practice SaaS",
    descriptionFr:
      "Plateforme SaaS de gestion médicale. Quatre modules livrés : consultation (digitalisation du registre papier), téléconsultation (Jitsi Meet auto-hébergé sur AWS), portail patient et pharmacie. Collaboration avec un intégrateur basé au Népal.",
    descriptionEn:
      "Medical practice SaaS. Four modules shipped: consultations (digitizing the paper register), teleconsultations (Jitsi Meet self-hosted on AWS), patient portal, and pharmacy management. Collaborated with an integrator based in Nepal.",
    stack: ["React", "Express", "AWS", "WhatsApp API", "Jitsi"],
    status: "production",
    yearFrom: 2025,
    yearTo: 2026,
    role: "Fullstack Developer",
    featured: true,
  },
  {
    slug: "sap",
    name: "Société Africaine de Pétrole",
    taglineFr: "Gestion d'une station de carburant marin & auto",
    taglineEn: "Management platform for a marine & auto fuel station",
    descriptionFr:
      "Plateforme de gestion interne pour une station de distribution de carburant marin et automobile. API Laravel documentée et sécurisée, actuellement en phase de tests auprès des équipes administratives.",
    descriptionEn:
      "Internal management platform for a marine & auto fuel station. Documented, secured Laravel API. Currently under testing with the administrative teams.",
    stack: ["Laravel", "Sanctum", "Swagger", "React", "cPanel"],
    status: "tests",
    yearFrom: 2025,
    role: "Lead Backend",
    featured: true,
  },
  {
    slug: "creneau",
    name: "Creneau",
    taglineFr: "SaaS de gestion d'auto-écoles",
    taglineEn: "Driving school management SaaS",
    descriptionFr:
      "SaaS de gestion d'auto-écoles — planning, élèves, formateurs, paiements. Conteneurisé, CI/CD complet, déployé chez plusieurs auto-écoles clientes au Sénégal.",
    descriptionEn:
      "Driving school management SaaS — scheduling, students, instructors, payments. Containerized, full CI/CD, in production with several Senegalese driving schools.",
    stack: ["Laravel", "React", "Docker", "GitHub Actions", "OVH"],
    status: "production",
    yearFrom: 2024,
    yearTo: 2026,
    role: "Co-founder · Fullstack Dev",
    url: "https://creneau-sn.com",
    featured: true,
  },
  {
    slug: "ticket-events",
    name: "Ticket-Events",
    taglineFr: "Billetterie pour événements culturels et sportifs",
    taglineEn: "Ticketing for cultural and sports events",
    descriptionFr:
      "SaaS de billetterie pour événements culturels et sportifs, ciblant le marché ouest-africain. En développement.",
    descriptionEn:
      "Ticketing SaaS for cultural and sports events, targeting West Africa. In development.",
    stack: ["Next.js", "NestJS"],
    status: "dev",
    yearFrom: 2026,
    role: "Co-founder · Product",
    featured: false,
  },
  {
    slug: "hydrautech",
    name: "HYDRAUTECH — SI complet",
    taglineFr: "Système d'information d'une PME de 15 employés",
    taglineEn: "Complete IT system for a 15-person SME",
    descriptionFr:
      "Gestion complète et autonome du système d'information d'une PME de 15 employés (web, messagerie, outils métier). Site institutionnel, système de gestion de stock, module RH & finance en cours en remplacement de Zoho Books.",
    descriptionEn:
      "End-to-end IT management for a 15-person SME (web, mail, business tools). Institutional website, inventory management system, HR & finance module in development to replace Zoho Books.",
    stack: ["Laravel", "PHP", "MySQL", "cPanel", "Zoho"],
    status: "production",
    yearFrom: 2024,
    role: "Responsable IT",
    url: "https://hydrautech-sn.com",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
