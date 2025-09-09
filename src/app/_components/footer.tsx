import Image from "next/image";
import Logo from "../../../public/logo-pompolimpiadas.svg";

export const Footer = () => {
  return (
    <footer className="bg-primary flex justify-center items-stretch p-6 text-center sm:text-left text-black text-[14px]">
      <div className="w-full sm:max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="sm:w-1/3">
          <p>suporte@mulheresbemresolvidas.com.br</p>
          <p>
            CNPJ: 23.705.563.0001/80. SHTN Bloco D RUV, SHCS CLS 216 - Asa Sul,
            Brasília - DF, 70294-530
          </p>
        </div>

        <div>
          <Image
            src={Logo}
            alt="Logo Pompolimpíadas"
            className="w-[180px] sm:w-36 h-auto"
          />
        </div>

        <div className="sm:w-1/4">
          <p>
            Política de privacidade | Termos de uso © 2022 Todos os direitos
            reservados
          </p>
        </div>
      </div>
    </footer>
  );
};
