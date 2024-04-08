import Image from "next/image";

export default function Logos() {
  return (
    <>
      <section className="">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <p className="flex justify-center items-center">
              <Image src="/amil.png" alt="amil" width="100" height="100" />
            </p>
            <p className="flex justify-center items-center">
              <Image
                src="/bradesco.png"
                alt="bradesco"
                width="150"
                height="100"
              />
            </p>
            <p className="flex justify-center items-center">
              <Image
                src="/sulamerica.png"
                alt="sulamerica"
                width="150"
                height="100"
              />
            </p>
            <p className="flex justify-center items-center">
              <Image src="/porto.png" alt="porto" width="150" height="100" />
            </p>
            <p className="flex justify-center items-center">
              <Image src="/unimed.png" alt="unimed" width="150" height="100" />
            </p>
            <p className="flex justify-center items-center">
              <Image src="/mag.png" alt="mag" width="150" height="100" />
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
