import { useState } from "react";
import sectionMobile from "../../../public/bg-mobile-section-3.png";
import Image from "next/image";

export const Cta = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Nome enviado:", email);
  };

  return (
    <section className="block p-8 sm:hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={sectionMobile}
          alt="Fundo Mobile"
          fill
          placeholder="blur"
          className="block sm:hidden"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="text-center text-[20px]">
          Para aprender tudo isso e treinar comigo, ao vivo, todos os exercícios
          do meu curso de Ginástica Íntima, basta cadastrar o seu e-mail
          gratuitamente.
        </h3>
        <form onSubmit={handleSubmit} className="w-full flex">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o seu melhor e-mail"
            className="placeholder-blue-700 border rounded-l-2xl p-4 bg-white flex-1 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-primary text-blue-700 px-4 py-2 rounded-r-2xl"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};
