import Logo from "../../../public/logo-pompolimpiadas.svg";

export const Footer = () => {
  return (
    <footer className="bg-primary flex justify-center items-stretch p-6 text-center md:text-left text-black text-[14px]">
      <div className="w-full sm:max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="md:w-1/3">
          <p>suporte@mulheresbemresolvidas.com.br</p>
          <p>
            CNPJ: 23.705.563.0001/80. SHTN Bloco D RUV, SHCS CLS 216 - Asa Sul,
            Brasília - DF, 70294-530
          </p>
        </div>

        <div>
          <Logo className="text-black text-[200px] h-20" />
        </div>

        <div className="md:w-1/4">
          <p>
            Política de privacidade | Termos de uso © 2022 Todos os direitos
            reservados
          </p>
        </div>
      </div>
    </footer>
  );
};
