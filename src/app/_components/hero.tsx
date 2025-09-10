import { useState } from "react";
import Image from "next/image";
import heroDesktop from "../../../public/images/backgrounds/bg-desktop-hero.jpg";
import heroMobile from "../../../public/images/backgrounds/bg-mobile-hero.jpg";
import Logo from "../../../public/logo-pompolimpiadas.svg";
import ButtonIcon from "../../../public/icons/button-icon.svg";

export const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Nome enviado:", email);
  };

  return (
    <section className="w-full relative flex flex-col md:items-center md:justify-center h-[925px] md:h-[700px] border-b-4 border-primary">
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroMobile}
          alt="Fundo Mobile"
          fill
          placeholder="blur"
          className="block md:hidden"
          quality={100}
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "top" }}
          priority
        />

        <Image
          src={heroDesktop}
          alt="Fundo Desktop"
          fill
          className="hidden md:block"
          quality={90}
          sizes="(max-width: 640px) 100vw,(max-width: 768px) 80vw,(max-width: 1024px) 60vw,(max-width: 1280px) 50vw, 1280px"
          style={{ objectFit: "cover", objectPosition: "top" }}
          priority
        />
      </div>
      <div className="w-full md:max-w-6xl">
        <div className="w-full md:w-[500px] flex flex-col gap-4 md:gap-6 p-6 md:p-0 items-center md:items-start text-center md:text-left">
          <Logo className="text-[250px] h-20" />
          <h1 className="text-3xl block md:hidden">
            Meu Curso de Ginástica Íntima gratuito dia 13/08
          </h1>
          <p className="md:text-2xl">
            Entrando no ritmo das Olimpíadas, eu vou realizar uma superaula
            on-line e gratuita, onde eu vou ensinar todos os exercícios do meu
            curso de Ginástica Íntima para todas as mulheres que se preocupam em
            desenvolver a própria intimidade.
          </p>
          <p className="md:text-2xl hidden md:block">
            <span className="text-primary font-bold">
              Ao vivo, dia 13 de agosto, às 20h, horário de Brasília.
            </span>
            Cadastre-se, gratuitamente, e receba o link da live.
          </p>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="relative w-full">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite o seu melhor e-mail"
                className="placeholder-secondary font-bold p-4 bg-white w-full text-secondary focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-secondary p-4 rounded-l-full cursor-pointer"
              >
                <ButtonIcon className="text-[70px] h-[24px]" />
              </button>
            </div>
          </form>
          <p className="text-[12px] hidden md:block uppercase">
            Não se preocupe, seus dados estão protegidos de acordo com a lei
            lgpd.
          </p>
        </div>
      </div>
    </section>
  );
};
