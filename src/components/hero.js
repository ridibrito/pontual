export default function Hero() {
  return (
    <>
      <section className=" h-[600px] lg:bg-[url('/hero2.png')] bg-[url('/quadrada.png')]  bg-cover 2xl:bg-contain bg-no-repeat xl:bg-top  w-full">
        <div
          id="top"
          className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
        >
          <div className="w-3/5 place-self-center lg:col-span-7 mt-12 -ml-16 lg:ml-0">
            <h3 className="text-blue-600 font-bold">
              Diagnóstico personalizado
            </h3>
            <h1 className="max-w-2xl mb-4 text-4xl font-ebold tracking-tight leading-none md:text-3xl xl:text-4xl text-white">
              Comprometido{" "}
              <span className="text-blue-600 font-bold">
                com o bem-estar do seu negócio
              </span>{" "}
              há 14 anos
            </h1>
            <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-400">
              Ajudo sua empresa a reduzir custos encontrando o plano de saúde
              ideal... Minha equipe está sempre pronta para entregar o melhor e
              mais seguro investimento para sua empresa e/ou familia.
            </p>

            <a
              href="#contato"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-center bg-blue-600  border  rounded-lg focus:ring-4  text-white border-blue-700 hover:bg-blue-700 focus:ring-blue-800"
            >
              Fale comigo agora!
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
