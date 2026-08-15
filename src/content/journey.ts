export type JourneyEntry = {
  year: string;
  roleFr: string;
  roleEn: string;
  entityFr: string;
  entityEn: string;
  descriptionFr?: string;
  descriptionEn?: string;
  kind: "job" | "founder" | "education";
  ongoing?: boolean;
};

export const journey: JourneyEntry[] = [
  {
    year: "2026 —",
    roleFr: "Co-founder",
    roleEn: "Co-founder",
    entityFr: "Nurapic",
    entityEn: "Nurapic",
    descriptionFr:
      "Startup de photos événementielles avec reconnaissance faciale",
    descriptionEn:
      "Event photography startup with facial recognition",
    kind: "founder",
    ongoing: true,
  },
  {
    year: "2025 —",
    roleFr: "Lead Backend",
    roleEn: "Lead Backend",
    entityFr: "Société Africaine de Pétrole",
    entityEn: "Société Africaine de Pétrole",
    descriptionFr:
      "Coordination d'une équipe de 3 devs backend · API Laravel",
    descriptionEn:
      "Coordinating a team of 3 backend devs · Laravel API",
    kind: "job",
    ongoing: true,
  },
  {
    year: "2025 → 26",
    roleFr: "Développeur Fullstack",
    roleEn: "Fullstack Developer",
    entityFr: "ecoMed24 SAS",
    entityEn: "ecoMed24 SAS",
    descriptionFr:
      "4 modules livrés sur une plateforme de gestion médicale en production",
    descriptionEn:
      "4 modules shipped on a medical practice SaaS in production",
    kind: "job",
  },
  {
    year: "2024 —",
    roleFr: "Responsable Informatique",
    roleEn: "IT Manager",
    entityFr: "HYDRAUTECH",
    entityEn: "HYDRAUTECH",
    descriptionFr: "Gestion du SI complet d'une PME de 15 employés",
    descriptionEn: "End-to-end IT management for a 15-person SME",
    kind: "job",
    ongoing: true,
  },
  {
    year: "2023 —",
    roleFr: "Co-founder & Software Engineer",
    roleEn: "Co-founder & Software Engineer",
    entityFr: "Teranga Dev",
    entityEn: "Teranga Dev",
    descriptionFr:
      "Studio produit sénégalais · 4 SaaS internes livrés à ce jour",
    descriptionEn:
      "Senegalese product studio · 4 in-house SaaS shipped so far",
    kind: "founder",
    ongoing: true,
  },
  {
    year: "2022 → 25",
    roleFr: "Licence en Génie Logiciel & Administration Réseaux",
    roleEn: "BSc in Software Engineering & Network Administration",
    entityFr: "ESTM Dakar",
    entityEn: "ESTM Dakar",
    kind: "education",
  },
];
