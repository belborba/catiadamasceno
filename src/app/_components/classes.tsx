import Image from "next/image";
import sectionDesktop from "../../../public/bg-desktop-section-2.png";
import { classesList } from "../data/classes";
import waves from "../../../public/waves.png";
import arrowIcon from "../../../public/icons/arrow-icon.svg";
import arrowLeftIcon from "../../../public/icons/arrow-l-icon.svg";
import arrowRightIcon from "../../../public/icons/arrow-r-icon.svg";
import useEmblaCarousel from "embla-carousel-react";

export const ClassContent = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "min-width: 768px": { slidesToScroll: 4 },
    },
  });

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
  };

  const scrollNext = () => {
    emblaApi?.scrollNext();
  };

  return (
    <section className="relative flex flex-col items-center px-4 sm:px-0 bg-white sm:bg-none">
      <div>
        <Image
          src={sectionDesktop}
          alt="Fundo Desktop"
          fill
          placeholder="blur"
          className="hidden sm:block absolute z-0"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className="w-full sm:max-w-6xl flex flex-col gap-4">
        <div className="bg-secondary border-primary border-2 mt-[-30px] mb-4 rounded-2xl max-w-6xl p-8 text-center z-0 space-y-3">
          <h2 className="text-primary">
            O que você vai aprender nas Pompolimpíadas
          </h2>
          <p>
            Participe da superaula gratuita de Ginástica Íntima no dia 13 de
            agosto, às 20h, e tenha acesso a todo o conteúdo do curso. Aprenda a
            dominar a arte do aperta e solta e conquiste o ouro em saúde íntima,
            autoestima e prazer. Inscreva-se nas Pompolimpíadas 2024 para
            alcançar o topo em todas as suas relações.
            <b>Veja abaixo o que você vai aprender:</b>
          </p>
        </div>

        <div className="embla w-full overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-4">
            {classesList.map((item) => (
              <div
                key={item.id}
                className="embla__slide flex-shrink-0
                   w-full sm:w-1/2 lg:w-1/4
                   flex flex-col space-y-4 justify-between items-center
                   bg-secondary rounded-2xl border border-primary"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="rounded-2xl border-2 border-primary"
                />
                <Image src={arrowIcon} alt="Arrow Icon" />
                <div className="px-4 space-y-2 text-center">
                  <h3 className=" text-primary">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="relative w-full h-14 rounded-b-2xl bg-white">
                  <Image
                    src={waves}
                    alt="Imagem decorativa"
                    fill
                    placeholder="blur"
                    className="rounded-b-2xl"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex h-5 max-w-7xl gap-8 justify-center sm:justify-between">
            <button className="cursor-pointer" onClick={scrollNext}>
              <Image src={arrowLeftIcon} alt="Arrow Icon" />
            </button>
            <button className="cursor-pointer" onClick={scrollPrev}>
              <Image src={arrowRightIcon} alt="Arrow Icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
