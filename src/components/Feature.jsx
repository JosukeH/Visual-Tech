import React from 'react'

const Feature = () => {
  return (
    <div class="bg-vtblackligth">
      <section class="mx-auto container py-20">
        <div class="flex justify-center items-center flex-col">
          <div class="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-center text-gray-800 dark:text-white">
            <h1>Nuestros servicios</h1>
          </div>
          <div class="pt-24 grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center xl:gap-y-16 gap-y-20 gap-x-16 lg:gap-x-20 xl:gap-x-0 lg:px-10 xl:px-0">
            <div class="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div class="mb-6">
               <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_7-svg1.svg" alt="arrow-1" />
              </div> 
              <div class="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Buen flujo de trabajo</h2>
              </div>
              <div class="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>Nuestro flujo de trabajo nos apoya a realizar los proyectos en tiempo y forma.</p>
              </div>
            </div>
            <div class="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div class="mb-6">
               <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_7-svg2.svg" alt="3 bars" />
              </div>
              <div class="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Flexibilidad</h2>
              </div>
              <div class="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>Nuestra forma de trabajar es fexible lo que con lleva que sea facil de cambiar.</p>
              </div>
            </div>
            <div class="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div class="mb-6">
               <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_7-svg3.svg" alt="bars" />
              </div>
              <div class="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Amigable al usuario</h2>
              </div>
              <div class="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>Nuestros proyectos son amigables con el usuario final, para alcanzar la mayor cantidad de personas.</p>
              </div>
            </div>
            <div class="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div class="mb-6">
               <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_7-svg4.svg" alt="bars" />
              </div>
              <div class="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Multiple layouts</h2>
              </div>
              <div class="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>Realizamos una gran cantidad de interfaces dependiendo del proyecto.</p>
              </div>
            </div>
            <div class="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div class="mb-6">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_7-svg5.svg" alt="bars" />
              </div>
              <div class="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Mejores componentes</h2>
              </div>
              <div class="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>Realizamos nuestros proyectos, basados en componentes, lo que permite mejor performance.</p>
              </div>
            </div>
            <div class="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div class="mb-6">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_7-svg6.svg" alt="" />
              </div>
              <div class="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Bien organizado</h2>
              </div>
              <div class="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>No más confusión en tu proyecto, nuestros sitios son claros y bien organizados..</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    

    </div>
  
  )
}

export default Feature