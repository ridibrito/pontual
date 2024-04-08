import Image from "next/image";

export default function Servicos() {
  return (
    <>
      <section className=" w-full">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-bold  text-white">
              Soluções para o bem-estar da sua equipe ou familía.
            </h2>
            <p className=" sm:text-xl text-gray-400">
              Hoje o principal ponto de retenção de talentos está em oferecer o
              benefício certo para seus colaboradores. Veja nossas
              especialidades:
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-900">
                <Image src="/saude.png" alt="saude" width={30} height={30} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                Planos de Saúde
              </h3>
              <p className=" text-gray-400">
                Oferecemos uma seleção abrangente de planos de saúde das
                principais operadoras do Brasil. Trabalhamos em parceria com as
                melhores seguradoras para garantir que você tenha acesso a uma
                ampla rede de médicos, hospitais e serviços de saúde. Nossos
                consultores especializados ajudarão você a encontrar o plano
                ideal que atenda às suas necessidades específicas e ao seu
                orçamento, garantindo que você receba o melhor cuidado possível
                quando precisar.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-900">
                <Image src="/dental.png" alt="dental" width={35} height={30} />{" "}
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                Odontológico
              </h3>
              <p className=" text-gray-400">
                Nossos planos odontológicos são fornecidos pelas principais
                seguradoras do país, oferecendo uma variedade de opções para
                cuidar da saúde bucal de seus colaboradores. Com acesso a uma
                rede de dentistas qualificados e serviços odontológicos
                abrangentes, entregaremos sempre as melhores opções de acordo
                com as necessidades da sua empresa e colaboradores.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-900">
                <Image src="/vida.png" alt="vida" width={40} height={30} />{" "}
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                Seguro de vida
              </h3>
              <p className=" text-gray-400">
                Nosso seguro de vida é fornecido pelas principais seguradoras do
                mercado, oferecendo proteção e segurança para você e sua
                família. Trabalhamos em parceria com as seguradoras mais
                confiáveis para garantir que você receba um plano personalizado
                que atenda às suas necessidades específicas. Com benefícios
                abrangentes e suporte financeiro em momentos difíceis, nosso
                seguro de vida proporciona tranquilidade e proteção para o
                futuro de seus entes queridos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
