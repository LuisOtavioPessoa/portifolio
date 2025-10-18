 "use client";
 import React, {ReactNode} from "react";

 interface Tecnologia {
   nome: string;
   imagem: ReactNode;
   cor: string;
   shadow: string;
 }

 interface CardTecnologiasProps{
    titulo: string;
    tecnologias: Tecnologia[];
    tamanho?: "pequeno" | "medio" | "grande";
 }

 export default function CardTecnologias({
    titulo,
    tecnologias,
    tamanho = "grande"
 }: CardTecnologiasProps){

   const tamanhoCard = {
      pequeno: "h-60 w-[320px]",
      medio: "h-60 w-[620px]",
      grande: "h-84 w-[1300px]"
   };

    return(
      <div 
         className= {` bg-[#3B76BB1A] border-[#F5F5F580] border-2 rounded-[30px]  p-8  shadow-[4px_4px_4px_0_#3B76BB] ${tamanhoCard[tamanho]} flex flex-col`}>
         <p className="text-[#3B76BB] text-[36px] font-altone font-bold [text-shadow:0_0_9px_#3B76BB] mb-10">
            {titulo}
         </p>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-x-4 gap-y-10 justify-items-center">
            
                  {tecnologias.map((tec, index) => (
                     <div
                        key={index}
                        className={`flex-none flex items-center justify-center w-[240px] h-[56px] gap-3  rounded-[15px] ${tec.shadow}`}
                        style={{ backgroundColor: tec.cor }}
                     >

                     <div className="flex items-center justify-center">
                        {tec.imagem}
                     </div>

                     <p className="text-white font-chocolates font-semibold text-[26px]">
                        {tec.nome}
                     </p>
                  </div>
               ))}
            </div>
         </div>
    );
 }