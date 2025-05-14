import Profile from "@/components/Profile/Profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre"
}

export default function Page() {
  return (
    <main className="flex flex-col lg:flex-row m-auto max-w-6xl">

      <aside className="flex flex-col justify-center items-center w-full">
        <div className="my-6">
          <Profile />
        </div>
      </aside>

      <section className="p-6 mt-12">
        <div className="p-6">
          <h2 className="text-2xl">
            Sobre mim
          </h2>
          <p className="text-lg leading-6 my-2 text-justify">
            Engenheiro de Computação, especialista em segurança da informação com mais de <strong>9
              anos</strong> de experiência como desenvolvedor de sistemas.
          </p>
          <p className="text-lg leading-6 my-2 text-justify">
            Apaixonado por tecnologia, desafios e resolver problemas. Estou sempre buscando me aprimorar e
            desenvolver tanto pessoal quanto profissionalmente.
          </p>
          <p className="text-lg leading-6 my-2 text-justify">
            Minhas áreas de interesse incluem - mas não estão limitadas a - Desenvolvimento Web (Full-stack),
            Automação de processos, Data Science e Machine Learning.
          </p>
        </div>

        <div className="p-6 mt-6">
          <h2 className="text-2xl">
            Tecnologias
          </h2>
          <p className="block mt-6">
            <strong>Back-end: </strong>
            PHP / Laravel / CodeIgniter 3, Python / Django, Javascript, Typescript, Node / Express / Nestjs
          </p>
          <p className="block mt-6">
            <strong>Front-end:</strong>
            HTML, CSS, Vue.js / Nuxt, React / Next, jQuery
          </p>
          <p className="block mt-6">
            <strong>Banco de dados:</strong>
            PostgreSQL, MySQL/MariaDB, Oracle
          </p>
          <p className="block mt-6">
            <strong>Ferramentas:</strong>
            Git, Linux Docker
          </p>
        </div>
      </section>
    </main>
  )
}