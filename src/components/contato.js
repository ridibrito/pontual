import { useState } from "react";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

export default function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_57rx1ng",
        "template_jyqh019",

        form.current,
        {
          publicKey: "l2zyFhkURDWq9aGoY",
        }
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setEmail("");
          setName("");
          setMessage("");
          setPhone("");
          setShowConfirmation(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900 w-screen">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2
            id="contato"
            className="mb-4 text-4xl tracking-tight font-extrabold  text-gray-900 dark:text-white "
          >
            Fale <span className="text-blue-600 font-bold">comigo agora!</span>
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
            Gostaria de um contato personalizado? Mande a maior quantidade de
            detalhes possível para um diagnóstico preciso ou agende um horário
            comigo!
          </p>
          {showConfirmation ? (
            <div className="text-green-600 font-bold text-center">
              <p>Mensagem enviada com sucesso!</p>
              <p>Retornarei seu contato o mais breve possível!.</p>
            </div>
          ) : (
            <form ref={form} className="space-y-8" onSubmit={sendEmail}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Seu nome
                </label>
                <input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  name="name"
                  placeholder="Digite seu nome..."
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Seu e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  name="email"
                  placeholder="digite seu melhor e-mail..."
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Telefone / WhatsApp
                </label>
                <input
                  type="phone"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  name="phone"
                  placeholder="(xx) xxxx-xxxx"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  name="message"
                  placeholder="Descreva seu caso ou agende um horário para falarmos por telefone, meet ou reunião presencial..."
                ></textarea>
              </div>
              <button
                type="submit"
                value="Send"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-center bg-blue-600  border  rounded-lg focus:ring-4  text-white border-blue-700 hover:bg-blue-700 focus:ring-blue-800"
              >
                Entre em contato comigo agora!
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
