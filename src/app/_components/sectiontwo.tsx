import Image from "next/image";
import sectionDesktop from "../../../public/images/backgrounds/bg-desktop-section-2.jpg";
import { classesList } from "../data/sectiontwo";
import waves from "../../../public/images/backgrounds/img-waves.jpg";
import bgbluebox from "../../../public/images/backgrounds/bg-blue-box.jpg";
import ArrowIcon from "../../../public/icons/arrow-icon.svg";
import ArrowLeftIcon from "../../../public/icons/arrow-l-icon.svg";
import ArrowRightIcon from "../../../public/icons/arrow-r-icon.svg";
import useEmblaCarousel from "embla-carousel-react";

export const SectionTwo = () => {
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
    <section className="relative flex flex-col items-center px-4 md:px-0 bg-white md:bg-none">
      <div className="w-full">
        <Image
          src={sectionDesktop}
          alt="Fundo Desktop"
          fill
          placeholder="blur"
          className="hidden md:block absolute z-0 object-fill object-top"
          quality={80}
          sizes="(max-width: 640px) 100vw,(max-width: 768px) 80vw,(max-width: 1024px) 60vw,(max-width: 1280px) 50vw, 1280px"
          loading="lazy"
        />
      </div>
      <div className="w-full md:max-w-6xl flex flex-col gap-4">
        <div className="bg-secondary relative border-primary border-2 mt-[-30px] mb-4 rounded-2xl max-w-6xl p-8 text-center z-0 space-y-3">
          <Image
            src={bgbluebox}
            alt="Fundo"
            fill
            placeholder="blur"
            quality={80}
            className="-z-10 absolute inset-0 rounded-2xl object-cover object-top"
            loading="lazy"
          />

          <h2 className="text-primary relative z-10">
            O que você vai aprender nas Pompolimpíadas
          </h2>
          <p className="relative z-10 text-white">
            Participe da superaula gratuita de Ginástica Íntima no dia 13 de
            agosto, às 20h, e tenha acesso a todo o conteúdo do curso. Aprenda a
            dominar a arte do aperta e solta e conquiste o ouro em saúde íntima,
            autoestima e prazer. Inscreva-se nas Pompolimpíadas 2024 para
            alcançar o topo em todas as suas relações.
            <span className="font-bold">
              Veja abaixo o que você vai aprender:
            </span>
          </p>
        </div>

        <div className="embla w-full overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex md:justify-center gap-4">
            {classesList.map((item) => (
              <div
                key={item.id}
                className="embla__slide flex-shrink-0
                   w-full md:max-w-[272px]
                   flex flex-col space-y-4 justify-between items-center
                   bg-secondary rounded-2xl border-2 border-primary"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={400}
                  height={300}
                  quality={80}
                  sizes="100vw"
                  className="rounded-2xl border border-primary"
                  loading="lazy"
                />
                <ArrowIcon className="text-[100px] h-[10px]" />
                <div className="px-4 space-y-2 text-center">
                  <h3 className=" text-primary uppercase">{item.title}</h3>
                  <p className="text-white">{item.description}</p>
                </div>
                <div className="relative w-full h-14 rounded-b-2xl bg-white">
                  <Image
                    src={waves}
                    alt="Imagem decorativa"
                    fill
                    placeholder="blur"
                    className="rounded-b-2xl "
                    quality={80}
                    sizes="100vw"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="my-4 flex h-5 max-w-7xl gap-8 justify-center md:justify-between">
            <button className="cursor-pointer" onClick={scrollPrev}>
              <ArrowLeftIcon className="text-[60px] h-[10px]" />
            </button>
            <button className="cursor-pointer" onClick={scrollNext}>
              <ArrowRightIcon className="text-[60px] h-[10px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
