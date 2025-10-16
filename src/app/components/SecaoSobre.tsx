"use client";
import React from "react";

interface SecaoSobreProps {
  titulo: string;
  subtitulo?: string;
  subtitulo2?: string;
  texto1: string;
  texto2?: string;
  texto3?: string;
  height?: number;
}

export default function SecaoSobre({
  titulo,
  subtitulo,
  subtitulo2,
  texto1,
  texto2,
  texto3,
  height = 150,
}: SecaoSobreProps) {
  return (
    <div className="w-3/4 flex flex-col items-start relative mb-8">
   
      <p className="text-primary-6 font-chocolates font-bold text-[32px] mb-4">
        {titulo}
      </p>

      <div className="flex relative">

        <div className="relative mr-6 flex flex-col items-center">
      
          <div className="text-[#FFFFFF80] text-[14px]">◆</div>

          <div
            style={{
              width: "2px",
              height: `${height - 28}px`, // ALTURA TOTAL MENOS OS LOSANGOS (ENCAIXE DOS LOSANGOS)
              backgroundImage:
                "repeating-linear-gradient(#FFFFFF80 0 2px, transparent 2px 12px)",
            }}
          />

          <div className="text-[#FFFFFF80] text-[14px] mt-0">◆</div>
        </div>

        <div className="flex flex-col mt-2">

          {subtitulo && (
          <p className="text-white text-[22px] leading-relaxed font-chocolates font-semibold">
            {subtitulo}
          </p>
          )}

          {subtitulo2 && (
          <p className="text-white text-[20px] leading-relaxed font-chocolates font-semibold mb-6 mt-3">
            {subtitulo2}
          </p>
          )}

          <p className="text-white text-[18px] leading-relaxed font-creato max-w-[90%] md:max-w-[650px]">
            {texto1}
          </p>

          {texto2 && (
            <p className="text-white text-[18px] leading-relaxed mt-4 font-creato max-w-[90%] md:max-w-[650px]">
              {texto2}
            </p>
          )}

          {texto3 && (
            <p className="text-white text-[18px] leading-relaxed mt-4 font-creato max-w-[90%] md:max-w-[650px]">
              {texto3}
            </p>
          )}

        </div>
      </div>
    </div>
  );
}
