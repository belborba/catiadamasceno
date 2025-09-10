import ArrowIcon from "../../../public/icons/arrow-icon.svg";
import profileImage from "../../../public/images/img-catia-damasceno-bio.webp";
import Image from "next/image";

export const Profile = () => {
  return (
    <section className="pt-8 px-4 md:py-0 md:flex md:justify-center md:items-center text-[18px]">
      <div className="md:flex w-full md:max-w-6xl items-center">
        <div className="hidden md:block">
          <ArrowIcon className="text-[190px] rotate-270" />
        </div>

        <div className="w-full md:w-2/5 space-y-4">
          <h2 className="text-primary text-center md:text-left">
            Quem vai te ensinar
          </h2>
          <p>
            Cátia Damasceno é fisioterapeuta especializada em uroginecologia, e
            iniciou seu trabalho ensinando exercícios de Ginástica Íntima para o
            fortalecimento da musculatura de mulheres com problema de flacidez
            íntima após o parto.
          </p>
          <p>
            Desde então, se especializou em Ginástica Íntima feminina e, ao
            longo de mais de 15 anos de carreira, seus cursos e palestras já
            ajudaram milhares de mulheres pelo Brasil. Ao todo, são mais de 150
            mil alunas participando ativamente das suas metodologias.
          </p>
          <p>
            Atualmente, Cátia é bastante reconhecida por esse trabalho e se
            tornou a precursora da Ginástica Íntima no Brasil, tornando-se a
            maior referência nacional no assunto. Já participou de vários
            programas influentes na mídia, como o “Programa do Jô”, “Tonight
            Show'' na CNN, “Se Joga”, também da Rede Globo, e vários outros.
          </p>
        </div>
        <div className="mt-2 md:z-0">
          <Image
            src={profileImage}
            alt="Foto da Cátia Damasceno"
            width={512}
            height={800}
            quality={90}
            sizes="(max-width: 640px) 100vw, 512px"
            className="md:mt-[-80px]"
          />
        </div>
      </div>
    </section>
  );
};
