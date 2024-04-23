import { Price } from "@/types/price";

export const pricingData: Price[] = [
  {
    id: "price_1P6rLzIzTEr3BZIapodVjyJq",
    unit_amount: 100 * 99,
    nickname: "Sub básica",
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
    id: "price_1P8e0sIzTEr3BZIaRXCAD4wW",
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
    id: "price_1P8kP5IzTEr3BZIaqE65Em6R",
    unit_amount: 989 * 100,
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
