import { useState } from "react";
import Image from "next/image";
import heroDesktop from "../../../public/hero-bg-desktop.png";
import heroMobile from "../../../public/hero-bg-mobile.png";

export const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Nome enviado:", email);
  };

  return (
    <section className=" border-b-2 border-primary h-[925px] sm:h-[925px] w-full relative flex-col sm:flex items-center sm:items-start sm:justify-center justify-start overflow-hidden">
      <Image
        src={heroMobile}
        alt="Fundo Mobile"
        fill
        placeholder="blur"
        className="block sm:hidden"
        style={{ objectFit: "cover", objectPosition: "top" }}
      />

      <Image
        src={heroDesktop}
        alt="Fundo Desktop"
        fill
        placeholder="blur"
        className="hidden sm:block"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="absolute w-full sm:mx-60 sm:w-[486px] flex flex-col gap-6 p-6 sm:p-0 items-center sm:items-start text-center sm:text-left">
        <img
          src="/logo-pompolimpiadas.svg"
          alt="Logo Pompolimpíadas"
          className="w-[180px] sm:w-[300px] h-auto"
        />
        <h1 className="text-3xl block sm:hidden">
          Meu Curso de Ginástica Íntima gratuito dia 13/08
        </h1>
        <p className="sm:text-2xl">
          Entrando no ritmo das Olimpíadas, eu vou realizar uma superaula
          on-line e gratuita, onde eu vou ensinar todos os exercícios do meu
          curso de Ginástica Íntima para todas as mulheres que se preocupam em
          desenvolver a própria intimidade.
        </p>
        <p className="sm:text-2xl hidden sm:block">
          <b className="text-primary">
            Ao vivo, dia 13 de agosto, às 20h, horário de Brasília.
          </b>
          Cadastre-se, gratuitamente, e receba o link da live.
        </p>
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
        <p className="text-[12px] hidden sm:block">
          NÃO SE PREOCUPE, SEUS DADOS ESTÃO PROTEGIDOS DE ACORDO COM A LEI LGPD.
        </p>
      </div>
    </section>
  );
};
