import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';


const Timers = ({ days, hours, minutes, seconds }) => {
    const miEstilo = {
        outline: '1px solid red'
    }

    function enviarMensaje() {
        window.location.href = 'https://wa.me/?text=Ya%20falta%20menos%20días%20para%20verte%20hermoso';
    }


    return (
        <div className="container mx-auto">

            <div className='grid grid-rows-3 md:gap-12'>
                

                <div class="flex flex-col items-center justify-center text-center">
                    <p className='mb-12 text-5xl font-semibold'> Vicky en México</p>
                    <p className='my-4 mb-12 text-5xl font-semibold'> 🇨🇴  ✈️ 🇲🇽</p>
                    <p className='text-2xl font-semibold'> 01 de Diciembre 2024</p>
                </div>



                <div class="grid grid-cols-2 mx-auto gap-4 md:grid-cols-4">
                    <div class="bg-white rounded-lg flex flex-col justify-center items-center w-36 h-36">
                        <div class="font-medium text-6xl flex-grow-2 mb-4"> {days} </div>
                        <div class="font-light text-2xl">Días</div>
                    </div>
                    <div class="bg-white rounded-lg flex flex-col justify-center items-center w-36 h-36">
                        <div class="font-medium text-6xl flex-grow-2 mb-4"> {hours} </div>
                        <div class="font-light text-2xl">Horas</div>
                    </div>
                    <div class="bg-white rounded-lg flex flex-col justify-center items-center w-36 h-36">
                        <div class="font-medium text-6xl flex-grow-2 mb-4"> {minutes} </div>
                        <div class="font-light text-2xl">Minutos</div>
                    </div>
                    <div class="bg-white rounded-lg flex flex-col justify-center items-center w-36 h-36">
                        <div class="font-medium text-6xl flex-grow-2 mb-4"> {seconds} </div>
                        <div class="font-light text-2xl">Segundos</div>
                    </div>
                </div>



                <div class="flex items-center justify-center text-center ">
                    <div className="flex items-center justify-center text-center">
                        <button className="flex items-center justify-center px-4 py-3 text-center text-white transition bg-green-500 rounded-lg hover:bg-green-600 duration-800" onClick={enviarMensaje}>

                            <FaWhatsapp size={36}/>
                            <p className='ml-2 text-lg'>Recordarle por WhatsApp</p>

                        </button>
                    </div>
                </div>



            </div>

        </div>

    )
}

export default Timers