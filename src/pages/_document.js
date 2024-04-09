import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body>
        <link
          rel="stylesheet"
          href="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-button.css"
        />
        <a
          id="robbu-whatsapp-button"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=61983555195&text=Ol%C3%A1%20Ricardo,%20gostaria%20de%20um%20diagn%C3%B3stico%20personalizado..."
        >
          <div class="rwb-tooltip">Fale comigo agora!</div>
          <img src="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-icon.svg" />
        </a>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
