import Image from "next/image";
import Logos from "./logos";

export default function Motivos() {
  return (
    <>
      <section className=" lg:h-[600px] lg:bg-[url('/empresa.png')]   bg-cover 2xl:bg-contain bg-no-repeat xl:bg-top  w-full bg-gradient-to-t from-blue-950">
        <div className="grid max-w-screen-xl  py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <Image
            src="/empresa300.png"
            alt="empresa"
            width={1000}
            height={300}
            className="lg:hidden"
          />
          <div className="lg:w-3/5 px-4 mx-auto lg:col-span-7 mt-12 lg:ml-0">
            <h1 className="max-w-2xl mb-4 text-4xl font-ebold tracking-tight leading-none md:text-3xl xl:text-4xl text-white">
              Porque{" "}
              <span className="text-blue-600 font-bold">
                sua empresa merece
              </span>{" "}
              um plano de saúde?
            </h1>
            <ul className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-400 lg:w-screen">
              <li className="flex items-center gap-3 mt-2 text-lg font-bold text-white">
                <Image src="/checkB.png" alt="check" width={30} height={30} />
                Descontos de até 60%
              </li>
              <li className="flex items-center gap-3 mt-2 text-lg font-bold text-white">
                {" "}
                <Image src="/checkB.png" alt="check" width={30} height={30} />
                Plano familiar através do CNPJ
              </li>
              <li className="flex items-center gap-3 mt-2 text-lg font-bold text-white">
                {" "}
                <Image src="/checkB.png" alt="check" width={30} height={30} />
                Atração e retenção de talentos
              </li>
              <li className="flex items-center gap-3 mt-2 text-lg font-bold text-white">
                {" "}
                <Image src="/checkB.png" alt="check" width={30} height={30} />
                Competitividade no Mercado de Trabalho
              </li>
            </ul>

            <a
              href="#contato"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-center bg-blue-600  border  rounded-lg focus:ring-4  text-white border-blue-700 hover:bg-blue-700 focus:ring-blue-800"
            >
              Entre em contato agora!
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
