import Image from "next/image";
import sectionDesktop from "../../../public/images/backgrounds/bg-desktop-section-4-min.jpg";
import sectionMobile from "../../../public/images/backgrounds/mobile-section-4.jpg";
import waves from "../../../public/images/backgrounds/img-waves.jpg";
import ArrowDownCircle from "../../../public/icons/arrow-down.svg";
import { sedentariaList } from "../data/sectionfour";
import { atletaList } from "../data/sectionfour";

export const SectionFour = () => {
  return (
    <section className="relative flex flex-col gap-4 items-center border-y-6 border-primary px-5 py-4 md:py-10">
      <div className="inset-0 -z-10">
        <Image
          src={sectionMobile}
          alt="Fundo Mobile"
          fill
          placeholder="blur"
          className="block md:hidden object-cover object-top"
          quality={80}
          sizes="100vw"
          loading="lazy"
        />
        <Image
          src={sectionDesktop}
          alt="Fundo Desktop"
          fill
          placeholder="blur"
          className="hidden md:block object-cover object-top"
          quality={80}
          sizes="(max-width: 640px) 100vw,(max-width: 768px) 80vw,(max-width: 1024px) 60vw,(max-width: 1280px) 50vw, 1280px"
          loading="lazy"
        />
      </div>
      <div className="w-full md:max-w-6xl flex flex-col items-center gap-6">
        <h3 className="text-center md:w-3/4 text-white">
          Existem dois tipos de ppka, aquelas que dominam a modalidade do aperta
          e solta e as que não praticam nenhum exercício, ou seja, as
          sedentárias.
        </h3>
        <hr className="border-2 border-primary rounded-full w-10" />
        <div className="flex flex-wrap justify-center gap-6">
          <h4 className="mt-2 px-4 py-2 rounded-full border-2 border-primary bg-neutral-100 text-secondary font-bold uppercase">
            ppk sedentária
          </h4>
          <ul className="flex flex-wrap justify-center gap-6">
            {sedentariaList.map((item) => (
              <li
                className="bg-white w-full md:w-[340px] flex items-center justify-start rounded-2xl text-secondary"
                key={item.id}
              >
                <div className="relative flex-shrink-0 rounded-l-2xl w-[60px] h-[80px]">
                  <div>
                    <Image
                      src={waves}
                      alt="Imagem decorativa"
                      placeholder="blur"
                      fill
                      className="rounded-l-2xl object-cover object-center"
                      sizes="100vh"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="px-4 font-bold text-secondary">
                  <p className="text-[18px] leading-5">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <h4 className="px-4 py-2 rounded-full border-2 border-primary text-white font-bold uppercase">
            ppk atleta
          </h4>
          <ul className="flex flex-wrap justify-center gap-6">
            {atletaList.map((item) => (
              <li
                className="bg-primary w-full md:w-[340px] flex items-center justify-start rounded-2xl text-secondary"
                key={item.id}
              >
                <div className="relative flex-shrink-0 rounded-l-2xl w-[60px] h-[80px]">
                  <div>
                    <Image
                      src={waves}
                      alt="Imagem decorativa"
                      placeholder="blur"
                      fill
                      className="rounded-l-2xl object-cover object-center"
                      sizes="100vw"
                    />
                  </div>
                </div>
                <div className="px-4 py-2 font-bold text-secondary">
                  <p className="text-[18px] leading-5">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <ArrowDownCircle className="text-[80px] text-secondary h-12 mt-5 animate-bounce" />
      </div>
    </section>
  );
};
