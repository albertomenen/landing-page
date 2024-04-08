import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Ramon Villalobos Masties",
    designation: "Cirujano plástico en Madrid",
    content:
      "Estamos actualmente muy contentos en como funciona y como podemos gestionar a todos nuestros clientes con la plataforma .",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Nicolas Alonso",
    designation: "Cirujano plástico en Barcelona",
    content:
      "Mi equipo ahora gestiona todas las solicutudes que nos llegan de una manera mucho más eficiente y cercana.",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Esther Fernandez",
    designation: "Cirujana plástica en Alicante",
    content:
      "Hemos experimentado un incremento en el número de clientes que recibimos durante estos meses, nos ha encantado lo intuitiva que es la plataforma.",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What our Client Say"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
