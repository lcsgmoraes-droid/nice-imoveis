import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import hero from "@/assets/hero-house.jpg";

export type PropertyType = "Casa" | "Apartamento" | "Cobertura" | "Terreno";
export type PropertyStatus = "Venda" | "Aluguel";

export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  status: PropertyStatus;
  location: string;
  city: string;
  price: number;
  beds: number;
  baths: number;
  parking: number;
  area: number;
  badge?: string;
  description: string;
  features: string[];
  gallery: string[];
  // Public 360° demo tour (Kuula)
  tour360?: string;
  cover: string;
}

export const properties: Property[] = [
  {
    id: "cobertura-vista-cidade",
    title: "Cobertura Vista Cidade",
    type: "Cobertura",
    status: "Venda",
    location: "Centro",
    city: "Porto Velho",
    price: 1480000,
    beds: 3,
    baths: 2,
    parking: 2,
    area: 142,
    badge: "Tour 360°",
    description:
      "Cobertura linear com vista panorâmica da cidade, acabamentos em porcelanato e marcenaria planejada. Sala ampla integrada à varanda gourmet com churrasqueira.",
    features: ["Varanda gourmet", "Vista panorâmica", "Marcenaria planejada", "Lazer completo", "2 vagas"],
    gallery: [p1, hero, p2, p3],
    tour360: "https://kuula.co/share/collection/7l8sj?logo=1&info=1&fs=1&vr=1&sd=1&autorotate=0.34&thumbs=1",
    cover: p1,
  },
  {
    id: "casa-piscina-alphaville",
    title: "Casa com Piscina",
    type: "Casa",
    status: "Venda",
    location: "Alphaville",
    city: "Porto Velho",
    price: 2250000,
    beds: 4,
    baths: 3,
    parking: 4,
    area: 320,
    badge: "Exclusivo",
    description:
      "Casa contemporânea em condomínio fechado, piscina com deck, espaço gourmet integrado e suíte master com closet. Segurança 24h.",
    features: ["Piscina com deck", "Condomínio fechado", "Suíte master", "Home office", "Energia solar"],
    gallery: [p2, hero, p1, p3],
    tour360: "https://kuula.co/share/collection/7l8sj?logo=1&info=1&fs=1&vr=1&sd=1&autorotate=0.34&thumbs=1",
    cover: p2,
  },
  {
    id: "penthouse-sunset",
    title: "Penthouse Sunset",
    type: "Cobertura",
    status: "Venda",
    location: "Jardins",
    city: "Porto Velho",
    price: 3100000,
    beds: 3,
    baths: 4,
    parking: 3,
    area: 220,
    badge: "Novo",
    description:
      "Penthouse de altíssimo padrão com pé-direito duplo, vista para o pôr do sol e rooftop privativo com spa.",
    features: ["Rooftop privativo", "Spa", "Pé-direito duplo", "Automação", "3 vagas cobertas"],
    gallery: [p3, hero, p1, p2],
    tour360: "https://kuula.co/share/collection/7l8sj?logo=1&info=1&fs=1&vr=1&sd=1&autorotate=0.34&thumbs=1",
    cover: p3,
  },
  {
    id: "apto-centro-2quartos",
    title: "Apartamento Compacto Centro",
    type: "Apartamento",
    status: "Aluguel",
    location: "Centro",
    city: "Porto Velho",
    price: 2800,
    beds: 2,
    baths: 1,
    parking: 1,
    area: 62,
    description:
      "Apartamento bem localizado, próximo ao comércio e transporte. Ideal para quem busca praticidade no dia a dia.",
    features: ["Próximo ao centro", "Portaria 24h", "Pet friendly"],
    gallery: [p1, p2, p3],
    cover: p1,
  },
  {
    id: "casa-jardins-4suites",
    title: "Casa Térrea 4 Suítes",
    type: "Casa",
    status: "Venda",
    location: "Jardins",
    city: "Porto Velho",
    price: 1850000,
    beds: 4,
    baths: 5,
    parking: 3,
    area: 290,
    badge: "Tour 360°",
    description:
      "Projeto contemporâneo de arquiteto, integração total entre área social e jardim interno. Quatro suítes amplas.",
    features: ["Jardim interno", "Quatro suítes", "Espaço gourmet", "Lavabo social"],
    gallery: [p2, hero, p3],
    tour360: "https://kuula.co/share/collection/7l8sj?logo=1&info=1&fs=1&vr=1&sd=1&autorotate=0.34&thumbs=1",
    cover: p2,
  },
  {
    id: "terreno-condominio-premium",
    title: "Terreno em Condomínio Premium",
    type: "Terreno",
    status: "Venda",
    location: "Setor Sul",
    city: "Porto Velho",
    price: 480000,
    beds: 0,
    baths: 0,
    parking: 0,
    area: 600,
    description: "Lote plano em condomínio fechado com infraestrutura completa. Pronto para construir.",
    features: ["Condomínio fechado", "Infraestrutura completa", "Pronto para construir"],
    gallery: [p3, p1],
    cover: p3,
  },
];

export const formatPrice = (n: number, status: PropertyStatus) =>
  status === "Aluguel"
    ? `R$ ${n.toLocaleString("pt-BR")}/mês`
    : `R$ ${n.toLocaleString("pt-BR")}`;

export const getProperty = (id: string) => properties.find((p) => p.id === id);
