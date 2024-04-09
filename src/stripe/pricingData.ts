import { Price } from "@/types/price";

export const pricingData: Price[] = [
  {
    id: "price_1NQk5TLtGdPVhGLecVfQ7mn0",
    unit_amount: 100 * 99,
    nickname: "Básico",
    offers: [
      "1 perfil",
      "Acceso a mensajes",
      "Leads cada semana",
      "Actualizaciones gratuitas",
      "Usar una clinica",
      "Posteo de procedimientos",
    ],
  },
  {
    id: "price_1NQk55LtGdPVhGLefU8AHqHr",
    unit_amount: 199 * 100,
    nickname: "Premium",
    offers: [
      "-Creación de 5 perfiles",
      "-Posteo de tratamientos ilimitados",
      "-Soporte 24h",
      "-Envio de leads todos los días",
      "-Varias clínicas",
      "-Posteo de resultados ilimitados",
      "-Posibilidad de pago de reserva",
    ],
  },
  {
    id: "price_1NQk4eLtGdPVhGLeZsZDsCNz",
    unit_amount: 599 * 100,
    nickname: "Empresa",
    offers: [
      "-Creación de 10 perfiles diferentes",
      "-Sitio destacado en la pagina",
      "-Estudio de mercado todos los meses",
      "-SEO específico",
      "-Varias clínicas posteables",
      "-Mensajes y leads ilimitados",
      "-Todo lo mencionado anteriormente"
    ],
  },
];
