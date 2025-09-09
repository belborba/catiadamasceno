import Image from "next/image";
import sectionDesktop from "../../../public/bg-desktop-section-4.png";
import sectionMobile from "../../../public/bg-mobile-section-4.png";
import wavestest from "../../../public/w.jpg";
import arrowDownCircle from "../../../public/icons/arrow-down-circle.png";
import { sedentariaList } from "../data/sectionfour";
import { atletaList } from "../data/sectionfour";

export const SectionFour = () => {
  return (
    <section className="relative flex flex-col justify-center gap-4 sm:gap-8 items-center border-y-8 border-primary py-8 px-4 sm:pt-20 sm:pb-20">
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
        <Image
          src={sectionDesktop}
          alt="Fundo Desktop"
          fill
          placeholder="blur"
          className="hidden sm:block"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      <div className="w-full sm:max-w-6xl flex flex-col items-center gap-4 sm:gap-16">
        <h2 className="text-center text-bold">
          Existem dois tipos de ppka, aquelas que dominam a modalidade do aperta
          e solta e as que não praticam nenhum exercício, ou seja, as
          sedentárias.
        </h2>
        <h4 className="mt-5 px-4 py-2 rounded-full border-2 border-primary bg-neutral-100 text-secondary ">
          PPK SENDENTÁRIA
        </h4>
        <div className="flex flex-wrap justify-center gap-6">
          <ul className="flex flex-wrap justify-center gap-6">
            {sedentariaList.map((item) => (
              <li
                className="bg-white w-[350px] flex items-center justify-start rounded-2xl text-black"
                key={item.id}
              >
                <div className="relative flex-shrink-0 rounded-l-2xl w-[60px] h-[80px]">
                  <div>
                    <Image
                      src={wavestest}
                      alt="Imagem decorativa"
                      placeholder="blur"
                      fill
                      className="rounded-l-2xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                </div>
                <div className="p-2 font-bold text-secondary">
                  <p className="text-[18px]">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <h4 className="mt-5 px-4 py-2 rounded-full border-2 border-primary text-white">
          PPK ATLETA
        </h4>
        <div className="flex flex-wrap justify-center gap-6">
          <ul className="flex flex-wrap justify-center gap-6">
            {atletaList.map((item) => (
              <li
                className="bg-primary w-[350px] flex items-center justify-start rounded-2xl text-black"
                key={item.id}
              >
                <div className="relative flex-shrink-0 rounded-l-2xl w-[60px] h-[80px]">
                  <div>
                    <Image
                      src={wavestest}
                      alt="Imagem decorativa"
                      placeholder="blur"
                      fill
                      className="rounded-l-2xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                </div>
                <div className="p-2 font-bold text-secondary">
                  <p className="text-[18px]">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={arrowDownCircle}
          alt="Fundo Desktop"
          placeholder="blur"
          className="animate-bounce"
        />
      </div>
    </section>
  );
};
