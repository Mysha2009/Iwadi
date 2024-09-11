import React from 'react';

const Stat = () => {
  return (
    
    <div className="container">
      <h1>Quelques résultats des Orientations effectuées</h1>
      <div class=" pt-8 mb-8 grid grid-cols-4 gap-4">
        <div style={{ borderRadius: '7px', textAlign: 'center'}} class=" bg-white row-end-2  ... flex h-20 text-black ">
          <div class="bg-blue-600 h-full w-2 text-center"></div>
          <div>
            <span class="text-bold  px-10" aria-label="orientation">+85</span>
            <p> Orientations effectuées</p>
          </div>
        </div>
        <div style={{ borderRadius: '7px', textAlign: 'center'}} class=" bg-white row-end-2  ... flex h-20 text-black ">
          <div class="bg-blue-600 h-full w-2 text-center"></div>
          <div style={{ textAlign: 'center'}}>
            <span class="text-bold  px-10" aria-label="orientation">+66</span>
            <p> Satisfactions</p>
          </div>
        </div>
        <div style={{ borderRadius: '7px', textAlign: 'center'}} class=" bg-white row-end-2  ... flex h-20 text-black ">
          <div class="bg-blue-600 h-full w-2 text-center"></div>
          <div style={{ textAlign: 'center'}}>
            <span class="text-bold  px-10" aria-label="orientation">84%</span>
            <p> Users find team comfort</p>
          </div>
        </div>
        <div style={{ borderRadius: '7px', textAlign: 'center'}} class=" bg-white row-end-2  ... flex h-20 text-black ">
          <div class="bg-blue-600 h-full w-2 text-center"></div>
          <div style={{ textAlign: 'center'}}>
            <span class="text-bold  px-10" aria-label="orientation">+30</span>
            <p>Témoignages</p>
          </div>
        </div>
      </div>


      <div>
      
        <div class="flex min-h-screen items-center justify-center">
          <div class="relative flex w-full max-w-[48rem] flex-row rounded-lg bg-blue-600 bg-clip-border text-gray-700 shadow-md">
            <div style={{textAlign: 'left'}} class="p-6">
              <h1 class="mb-2 block font-sans text-4xl font-semibold leading-snug tracking-normal text-white antialiased">
                Lancez-Vous!
              </h1>
              <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-white antialiased">
              Nous vous permettons de lancer votre chèque pour 
              tous les jeunes qui cherchent à tracer leur propre 
              voie, en s'appuyant sur leurs talents et en 
              construisant un avenir aligé avec leurs passions et leurs objectifs
              </p>
              <a class="inline-block" href="#">
                <button style={{backgroundColor: 'white'}}
                  class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black transition-all hover:bg-blue-500/10 active:bg-blue-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Démarrer maintenant
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
            <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src="src\assets\image.png"
                alt="image"
                class="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div class="flex items-center rounded-lg justify-center">
        </div>
      </div>
    </div>
  );
};

export default Stat;