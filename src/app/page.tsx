"use client";
import { useState } from "react";
import LanguageSelector from "./components/LanguageSelector";
import LogoGitHub from "./components/LogoGitHub";
import LogoLinkedIn from "./components/LogoLinkedIn";
import ParticlesBackground from "./components/ParticlesBackground";
import SecaoSobre from "./components/SecaoSobre";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import CardTecnologias from "./components/CardTecnologias";
import LogoHTML from "./components/LogoTecnologia/LogoHTML";
import LogoTailwindCSS from "./components/LogoTecnologia/LogoTailwindCSS";
import LogoJavaScript from "./components/LogoTecnologia/LogoJavaScript";
import LogoReact from "./components/LogoTecnologia/LogoReact";
import LogoNext from "./components/LogoTecnologia/LogoNext";
import LogoTypescript from "./components/LogoTecnologia/LogoTypescript";
import LogoNode from "./components/LogoTecnologia/LogoNode";
import LogoExpress from "./components/LogoTecnologia/LogoExpress";
import LogoSQL from "./components/LogoTecnologia/LogoSQL";

export default function Home() {

  const[active, setActive] = useState("");

  const navBarItems = [
    {id: "inicio", label: "Início"},
    {id: "sobre", label: "Sobre"},
    {id: "habilidades", label: "Habilidades"},
    {id: "projetos", label: "Projetos"},
    {id: "contatos", label: "Contatos"},
  ];

  return (
    <main className="relative flex flex-col items-center-safe justify-center grow">
      <ParticlesBackground />

      <div className="flex items-center-safe justify-center bg-primary-2 min-h-[65px] w-full fixed top-0 left-0 z-50">
        <div className="flex justify-evenly items-center-safe max-w-5xl w-full px-6">
          {navBarItems.map((item) => (
          <p
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`relative cursor-pointer font-chocolates text-[20px] transition-all duration-500
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
              after:bg-[#3B76BB] after:transition-all after:duration-500
              ${
                active === item.id
                  ? "text-[#3B76BB] font-semibold after:w-full"
                  : "text-white hover:text-[#3B76BB] after:w-0"
              }`}
          >
            {item.label}
          </p>
        ))}
        </div>
      </div>

      <div className="w-full flex justify-end px-6 pt-[80px]">
        <LanguageSelector/>
      </div>
      
      <div id="inicio" className="grid grid-cols-2 w-full min-h-screen">
          <div className="bg-transparent">
              <div className="pt-30 pl-30">
                <h1 className="text-white font-altone font-bold text-[58px]">Luís Otávio</h1>
                <p className="relative text-primary-6 font-chocolates text-[30px] font-semibold [text-shadow:0_0_6px_#5191DB]  pr-4 after:content-[''] after:absolute after:right-65 after:top-6 after:-translate-y-6 after:w-[6px] after:h-[75%] after:bg-[#3B76BB]  ">Desenvolvedor Front End</p>
                <p className="text-white font-creato text-[22px] mt-2 max-w-[500px]">Desenvolvedor com foco em desenvolvimento 
                de interfaces responsivas, versionamentos e 
                boas práticas de código limpo.</p>

                <button className="text-white font-chocolates bg-primary-6 mt-12 rounded-[20px] px-6 py-4 hover:bg-primary-3 hover:font-bold hover:scale-110 transition-all duration-300 w-[150px] ">Ver Currículo</button>

                <div className="flex flex-row mt-8 gap-6">
                  <LogoLinkedIn/>
                  <LogoGitHub/>
                </div>
              </div>
          </div>

          <div className="pt-20 pl-30">
              <div className="w-[350px] h-[320px] bg-primary-2
                [clip-path:polygon(120px_0%,100%_0%,100%_100%,0%_100%,0%_120px)]
                flex flex-col items-start justify-start px-4 gap-4 rounded-[15px]">

                <div className="flex items-center gap-2 mt-30">
                  <IoLocationOutline className="text-[40px]  text-white"/>
                  <p className="text-white text-[20px] font-chocolates m-2">João Pessoa, PB, Brasil</p>
                </div>

                 <div className="flex items-center gap-2">
                  <MdOutlineEmail className="text-[40px]  text-white"/>
                  <p className="text-white text-[20px] font-chocolates m-2 ">otaviopessoa999@gmail.com</p>
                </div>

                <div className="flex items-center gap-2">
                  <FiPhone className="text-[40px]  text-white"/>
                  <p className="text-white text-[20px] font-chocolates m-2 ">(81) 99140-8370</p>
                </div>
                
              </div>
          </div>
      </div>

      <div id="sobre" className= "w-full min-h-screen bg-transparent flex flex-col items-center">
        <h1 className=" text-white text-[40px] font-altone font-bold ">Sobre Mim</h1>
        <div className="bg-primary-6 h-[5px] w-1/5 rounded-[5px] mt-3 "></div>

        <div className="w-3/4 flex justify-start mt-20">
        <SecaoSobre
          titulo="Apresentação"
          texto1="Sou um desenvolvedor focado em criar interfaces modernas, funcionais e responsivas."
          texto2="Busco sempre aprender novas tecnologias e aprimorar a experiência do usuário."
          height={90}
        />
        </div>

        <SecaoSobre
          titulo="Experiência profissional"
          subtitulo="Desenvolvedor Front End"
          subtitulo2="Fábrica de Software"
          texto1="Atuei em projetos que envolveram desenvolvimento de interfaces, integração de APIs e boas práticas de código limpo."
          texto2="Tenho experiência com React, TypeScript, Next.js e Tailwind CSS."
          height={220}
        />

        <SecaoSobre
          titulo="Formação"
          subtitulo="Análise e Desenvolvimento de Sistemas"
          subtitulo2="Centro Universitário UNIPÊ"
          texto1="Minha formação..."
          height={150}
        />

      </div>

      <div 
        id="habilidades" 
        className="w-full min-h-screen bg-transparent flex flex-col items-center pt-24 sm:pt-28 md:pt-32 lg:pt-32">
        <h1 className=" text-white text-[40px] font-altone font-bold ">Habilidades</h1>
        <div className="bg-primary-6 h-[5px] w-1/5 rounded-[5px] mt-3 "></div>

        <div className="flex justify-center w-full mt-20">

          <CardTecnologias
            titulo="Front End"
            tamanho="grande"
            tecnologias= {[
            { nome: "HTML", imagem: <LogoHTML/>, cor: "#E34C26CC", shadow: "shadow-[0_0_80px_0_#E34C26CC]"},
            { nome: "Tailwind CSS", imagem: <LogoTailwindCSS/>, cor: "#00ACC1CC", shadow: "shadow-[0_0_80px_0_#4AA4EECC]"},
            { nome: "Javascript", imagem: <LogoJavaScript/>, cor: "#FFE730CC", shadow: "shadow-[0_0_80px_0_#FFE730CC]"},
            { nome: "React.js", imagem: <LogoReact/>, cor: "#5DE1EACC", shadow: "shadow-[0_0_80px_0_#5DE1EACC]"},
            { nome: "Next.js", imagem: <LogoNext/>, cor: "#D9D9D9CC", shadow: "shadow-[0_0_80px_0_#D9D9D9CC]"},
            { nome: "Typescript", imagem: <LogoTypescript/>, cor: "#5B51F3CC", shadow: "shadow-[0_0_80px_0_#5B51F3CC]"},
            ]}
          />

        </div>

        {/* TRÊS CARDS LADO A LADO */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 w-full ">
            <CardTecnologias
              titulo="Back End"
              tamanho="medio"
              tecnologias={[
              { nome: "Node.js", imagem: <LogoNode/>, cor: "#5DE850CC", shadow: "shadow-[0_0_80px_0_#5DE850CC]"},
              { nome: "Express", imagem: <LogoExpress/>, cor: "#8B8B8BCC", shadow: "shadow-[0_0_80px_0_#8B8B8B]"},
              ]}
            />

            <CardTecnologias
              titulo="Dados"
              tamanho="pequeno"
              tecnologias={[
              { nome: "MySQL", imagem: <LogoSQL/>, cor: "#ED8F3CCC", shadow: "shadow-[0_0_80px_0_#ED8F3CCC]"},
              ]}
            />

            <CardTecnologias
              titulo="DevOps"
              tamanho="pequeno"
              tecnologias={[
              { nome: "Git", imagem: <LogoHTML/>, cor: "#D34F38CC", shadow: "shadow-[0_0_80px_0_#ED8F3CCC]"},
              ]}
            />


        </div>

        {/* CARD GRANDE SOZINHO */}
        <div className="flex justify-center w-full mt-10">
          <CardTecnologias
            titulo="Outros"
            tamanho="grande"
            tecnologias= {[
            { nome: "RESTful APIs", imagem: <LogoHTML/>, cor: "#54B5F2CC", shadow: "shadow-[0_0_80px_0_#54B5F2CC]"},
            { nome: "MVC", imagem: <LogoTailwindCSS/>, cor: "#D9D9D9CC", shadow: "shadow-[0_0_80px_0_#D9D9D9CC]"},
            { nome: "Clean Code", imagem: <LogoJavaScript/>, cor: "#2CB525CC", shadow: "shadow-[0_0_80px_0_#2CB525CC]"},
            { nome: "Scrum", imagem: <LogoReact/>, cor: "#976DF9CC", shadow: "shadow-[0_0_80px_0_#976DF9CC]"},
    
            ]}
          />

        </div>

      </div>

      <div 
        id="projetos" 
        className="w-full min-h-screen bg-transparent flex flex-col items-center pt-24 sm:pt-28 md:pt-32 lg:pt-">
        <h1 className=" text-white text-[40px] font-altone font-bold ">Projetos</h1>
        <div className="bg-primary-6 h-[5px] w-1/5 rounded-[5px] mt-3 "></div>

      </div>

    </main>
  );
}
