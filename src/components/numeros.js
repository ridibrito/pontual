export default function Numeros() {
  return (
    <>
      <section className="w-screen">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">14 +</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                Anos de Experiência
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                Clientes atendidos
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1M+</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                Empresas
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
