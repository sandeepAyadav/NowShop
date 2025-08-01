import React from 'react'
import { FaCircle } from 'react-icons/fa';
function Hero(heroData, heroCount, setHeroCount){
  return (
    <div className="w-[40%] h-[100%] relative">
      <div
        className="absolute text-[#88d9ee] text-[20px]
    md:text-[40px] lg:text-[44px] md:left-[10%] md:top-[90px] lg:tp-[130px] left-[10px]"
      >
        <p>{heroData.text1} </p>
        <p>{heroData.text2} </p>
      </div>
      <div className="absolute md:top-[400px] lg:top-[500px] top-[160px] left-[10%] flex items-center justify-center gap-[10px]">
        <FaCircle
          className={`w -[14px] ${heroCount === 0 ? 'fill-amber-400' : 'fill-amber-50'} `}
          onClick={() => setHeroCount(0)}
        />
        <FaCircle
          className={`w -[14px] ${heroCount === 1 ? 'fill-amber-400' : 'fill-amber-50'} `}
          onClick={() => setHeroCount(1)}
        />
        <FaCircle
          className={`w -[14px] ${heroCount === 2 ? 'fill-amber-400' : 'fill-amber-50'} `}
          onClick={() => setHeroCount(2)}
        />
        <FaCircle
          className={`w -[14px] ${heroCount === 3 ? 'fill-amber-400' : 'fill-amber-50'} `}
          onClick={() => setHeroCount(3)}
        />
      </div>
    </div>
  );
}

export default Hero;
