import Image from "next/image";
import sectionDesktop from "../../../public/bg-desktop-section-2.png";
import { classesList } from "../data/classes";

export const ClassContent = () => {
  return (
    <section className="flex flex-col items-center px-4 sm:px-0">
      <div className="w-full sm:max-w-6xl flex flex-col gap-4">
        <div className="bg-blue-700 border-primary border-2 mt-[-30px] rounded-2xl max-w-6xl p-8 text-center z-0 space-y-3">
          <h2>O que você vai aprender nas Pompolimpíadas</h2>
          <p>
            Participe da superaula gratuita de Ginástica Íntima no dia 13 de
            agosto, às 20h, e tenha acesso a todo o conteúdo do curso. Aprenda a
            dominar a arte do aperta e solta e conquiste o ouro em saúde íntima,
            autoestima e prazer. Inscreva-se nas Pompolimpíadas 2024 para
            alcançar o topo em todas as suas relações.
            <b>Veja abaixo o que você vai aprender:</b>
          </p>
        </div>

        <div className="flex sm:max-w-6xl gap-4">
          {classesList.map((item) => (
            <div key={item.id} className="w-1/4">
              <Image src={item.src} alt={item.title} width={400} height={300} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
