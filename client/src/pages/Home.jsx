import React from "react";
import imgHome from "../assets/images/Professor_Nonato.png"; // importar imagens aqui
import imgSombraHome from "../assets/images/SombraBruna2.png"; // importar imagens aqui
import imgJaquelineHome from "../assets/images/professora_01.png"; // importar imagens aqui
import ProfessoraLucyCarrossel from "../assets/images/ProfessoraLucyCarrossel.jpg"; // importar imagens aqui
import ProfessorNathanCarrossel from "../assets/images/ProfessorNathanCarrossel.jpg"; // importar imagens aqui
import ProfessorWillameCarrossel from "../assets/images/ProfessorWillameCarrossel.jpg"; // importar imagens aqui
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

{
  /* Abandonai toda a esperança, vós que entrais */
}

const Home = () => {
  return (
    <>
      {/* SESSÃO 1 — AZUL Inicio */}
      <section className="overflow-hidden bg-gradient-to-r from-blue-600 to-blue-400 py-20">
        <section className="mx-auto flex max-w-7xl items-center justify-between px-6">
          {/* Lado esquerdo (textos) */}
          {/* Linha 1 */}
          <div className="max-w-xl">
            <p className="font-lato-bold text-lg tracking-wide text-white">
              CURSINHO ONLINE PARA ENEM E VESTIBULARES
            </p>

            {/* Linha 2 – título */}
            <h1 className="font-momo mt-4 text-4xl text-white">
              APRENDIZAGEM <span className="tracking-widest">ONLINE</span>
            </h1>

            {/* Descrição */}
            <p className="font-lato-italic mt-6 text-lg leading-relaxed text-white">
              Empresa Especializada e registrada desde 2020 com serviços de
              Reforço Escolar, Aulas Particulares e Cursos para crianças e
              adolescentes estudantes na Educação Básica
            </p>

            {/* Botões */}
            <div className="mt-8 flex gap-6">
              <button className="!font-momo !rounded-full bg-yellow-400 px-6 py-3 text-blue-900 shadow-md transition hover:bg-yellow-300">
                COMECE AGORA
              </button>

              <button className="!font-momo !rounded-full bg-yellow-400 px-6 py-3 text-blue-900 shadow-md transition hover:bg-yellow-300">
                VER AULA DE APRESENTAÇÃO
              </button>
            </div>
          </div>

          {/* Círculo com gradiente atrás da imagem */}
          <img
            src={imgSombraHome}
            alt="Sombra"
            className="absolute right-0 bottom-13 w-[655px] object-contain"
          />
          {/* Lado direito (imagem) */}
          <img
            src={imgHome}
            alt="Professor"
            className="absolute right-35 bottom-13 w-[390px] object-contain"
          />
        </section>
      </section>

      {/* SESSÃO 2 — BRANCA */}
      <section className="bg-white py-25">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
          
          {/* Imagem à esquerda */}
          <div className="flex justify-center md:justify-start">
            <img
              src={imgJaquelineHome}
              alt="Imagem ilustrativa"
              className="absolute top-149 left-35 w-[370px] object-contain"
            />
          </div>

          {/* Texto à direita */}
          <div>
            <h2 className="!font-momo !mb-6 !text-4xl !text-blue-700">
              Apoio Escolar para Todas as Etapas da Educação!
            </h2>

            <p className="!text-lg !leading-relaxed !text-gray-700">
              Oferecemos acompanhamento completo e de qualidade para alunos do
              1º ao 9º ano do Ensino Fundamental e também do Ensino Médio. Nosso
              objetivo é fortalecer o aprendizado, promover autonomia nos
              estudos e garantir o sucesso escolar.
            </p>

            <div className="mt-8 flex gap-6">
              <button className="!font-momo !rounded-full bg-yellow-400 px-6 py-3 text-blue-900 !shadow-md !transition hover:bg-yellow-300">
                SEJA UM ALUNO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SESSÃO 3 — AZUL Carrossel */}
      <section className="overflow-hidden bg-gradient-to-r from-blue-600 to-blue-400 py-20">
      <section className="mx-auto max-w-7xl px-6">

      {/* TÍTULO CENTRALIZADO */}
      <div className="text-center mb-12">
        <h2 className="font-momo text-4xl text-white">
          NOSSOS PROFESSORES!
        </h2>
      </div>

      {/* CARROSSEL CENTRALIZADO */}
      <div className="flex justify-center">
        <div
          id="carouselExample"
          className="carousel slide relative max-w-3xl w-[300px] h-[300px] rounded-2xl overflow-visible shadow-2xl border-10 border-white"
          data-bs-ride="carousel"
        >
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src={ProfessoraLucyCarrossel}
              className="d-block w-100"
              alt="Slide 1"
            />
            <div className="carousel-caption text-white text-base !bottom-2 !font-lato-bold bg-black/40 p-1 rounded-xl">
             Professora Lucy <br/> Inglês
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={ProfessorNathanCarrossel}
              className="d-block w-100"
              alt="Slide 2"
            />
            <div className="carousel-caption text-white text-base !bottom-2 !font-lato-bold bg-black/40 p-1 rounded-xl">
             Professor Nathan <br/> Redes de Computadores
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={ProfessorWillameCarrossel}
              className="d-block w-100"
              alt="Slide 3"
            />
            <div className="carousel-caption text-white text-base !bottom-2 !font-lato-bold bg-black/40 p-1 rounded-xl">
             Professor Willame <br/> Engenharia de Software
            </div>
          </div>
        </div>

      {/* CONTROLES LATERAIS */}
        <button
          className="carousel-control-prev !absolute !top-1/2 -translate-y-1/2 !left-[-60px] !w-auto !h-auto"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next !absolute !top-1/2 -translate-y-1/2 !right-[-60px] !w-auto !h-auto"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
       </div>
      </div>
      </section>
      </section>
    </>
  );
};

export default Home;
