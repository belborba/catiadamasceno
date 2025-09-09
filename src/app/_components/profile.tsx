import arrowIcon from "../../../public/icons/arrow-icon.svg";
import profileImage from "../../../public/images/catia-damasceno.png";
import Image from "next/image";

export const Profile = () => {
  return (
    <section className="sm:mt-[-90px] pt-8 px-4 sm:p-0 sm:flex sm:justify-center sm:items-center text-[18px]">
      <div className="sm:flex w-full sm:max-w-6xl items-center">
        <div className="hidden sm:block">
          <Image
            src={arrowIcon}
            alt="Arrow Icon"
            width={170}
            height={0}
            className="rotate-270"
          />
        </div>
        <div className="w-full sm:w-2/5 space-y-4">
          <h2 className="text-primary text-center sm:text-left">
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
        <div className="mt-2 sm:z-0">
          <Image
            src={profileImage}
            alt="Foto da Cátia Damasceno"
            width={545}
            height={852}
          />
        </div>
      </div>
    </section>
  );
};
