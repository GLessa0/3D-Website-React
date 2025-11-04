import 'boxicons/css/boxicons.min.css';

function Hero() {
  return (
    <main className="flex lg:mt:20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">

    {/* Hero text */}

    <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">     
        <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-black to-purple-700 shadow-[0_0_15px_rgba(128,0,128,0.5)] rounded-full'>
            <div className='absolute inset-[3px] rounded-full flex items-center justify-center gap-1'>
                <i class='bx  bx-diamond'></i>   
                INTRODUCING
            </div>
        </div>
        {/* Main heading */}

        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
            EMAIL FOR
            <br />
            DEVELOPERS
        </h1>

        {/* Description */}

        <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]'>
            Desenvolvemos sites modernos e de alta performance, com design limpo, estético e funcional , unidos à tecnologia mais atual e uma estrutura otimizada para impulsionar sua presença digital. Cada detalhe é pensado para refletir a essência do seu negócio com elegância, propósito e profissionalismo.
        </p>

        
    </div>

    </main>
  )
}

export default Hero