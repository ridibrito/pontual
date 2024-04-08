import Image from "next/image";

export default function Sobre() {
  return (
    <>
      <section className="lg:bg-[url('/ric2.png')] bg-contain bg-no-repeat  bg-gradient-to-t from-blue-950 mt-4 w-full">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="w-full">
            <Image
              src="/ric1.png"
              alt="empresa"
              width={1000}
              height={300}
              className="lg:hidden"
            />
          </div>
          <div className="font-light sm:text-lg text-gray-400 mt-2">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
              Quem sou eu?
            </h2>
            <div className="text-sm">
              <p className="mb-4">
                Sou um profissional apaixonado por conectar pessoas às soluções
                certas de saúde. Com uma carreira sólida de mais de 14 anos no
                universo dos planos de saúde, estou dedicado a oferecer
                benefícios que realmente fazem a diferença na vida das pessoas e
                organizações.
              </p>
              <p className="mb-4">
                Acredito profundamente que a saúde é um ativo valioso, e meu
                trabalho vai além de vender planos - é sobre criar parcerias
                duradouras baseadas na confiança e compreensão. Minha abordagem
                é centrada no cliente, buscando entender as necessidades
                exclusivas de cada indivíduo ou empresa para oferecer soluções
                personalizadas que realmente importam.
              </p>
              <p className="mb-4">
                Nos últimos 14 anos, construí uma sólida reputação no mercado,
                alcançando metas consistentes em vendas e gestão de equipes
                desenvolvendo relações de longo prazo com clientes satisfeitos e
                consultores bem treinados. Trabalhei com empresas de todo o
                Brasil, treinei centenas de novos consultores e vi muitas vidas
                transformadas.
              </p>
              <p>
                Minha missão é facilitar o acesso a cuidados de saúde de
                qualidade, garantindo que meus clientes estejam protegidos e
                tenham a tranquilidade que merecem. Estou comprometido em
                simplificar o processo, oferecendo consultoria especializada,
                diagnostico certeiro e garantindo que cada cliente compreenda
                plenamente as opções disponíveis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
