import { useState } from "react";
import sectionMobile from "../../../public/images/backgrounds/bg-mobile-section-3.jpg";
import ButtonIcon from "../../../public/icons/button-icon.svg";
import Image from "next/image";

export const SectionThree = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Nome enviado:", email);
  };

  return (
    <section className="relative block p-8 md:hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={sectionMobile}
          alt="Fundo Mobile"
          fill
          placeholder="blur"
          className="block md:hidden object-cover object-top"
          quality={78}
          sizes="100vw"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="text-center text-[20px] font-bold text-secondary">
          Para aprender tudo isso e treinar comigo, ao vivo, todos os exercícios
          do meu curso de Ginástica Íntima, basta cadastrar o seu e-mail
          gratuitamente.
        </h3>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="relative w-full">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite o seu melhor e-mail"
              className="placeholder-secondary text-bold p-4 bg-white w-full text-secondary focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-secondary p-4 rounded-l-full cursor-pointer"
            >
              <ButtonIcon className="text-[70px] h-[24px] text-white" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
