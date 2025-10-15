"use client";
import { useState } from "react";
import LanguageSelector from "./components/LanguageSelector";
import LogoGitHub from "./components/LogoGitHub";
import LogoLinkedIn from "./components/LogoLinkedIn";
import ParticlesBackground from "./components/ParticlesBackground";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

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
      
      <div id="inicio" className="grid grid-cols-2 w-full min-h-[auto] ">
          <div className="bg-transparent">
              <div className="pt-30 pl-30">
                <h1 className="text-white font-altone font-bold text-[58px]">Luís Otávio</h1>
                <p className="relative text-primary-6 font-chocolates text-[30px] font-semibold animate-fadePulse pr-4 after:content-[''] after:absolute after:right-65 after:top-6 after:-translate-y-6 after:w-[6px] after:h-[75%] after:bg-[#3B76BB]  ">Desenvolvedor Front End</p>
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
      

    </main>
  );
}
