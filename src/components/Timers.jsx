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

            <div className=''>

                <div class="flex flex-col items-center justify-center text-center mb-12">
                    <p className='text-5xl font-semibold'> Vicky en México</p>
                    <p className='my-4 text-5xl font-semibold'> 🇨🇴  ✈️ 🇲🇽</p>
                    <p className='text-2xl font-semibold'> 01 de Diciembre 2024</p>
                </div>

                <div className="flex items-center justify-center mb-12">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        <div className="flex flex-col items-center justify-center bg-white rounded-lg w-36 h-36">
                            <div className="mb-4 text-6xl font-medium flex-grow-2"> {days} </div>
                            <div className="text-2xl font-light">Días</div>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-white rounded-lg w-36 h-36">
                            <div className="mb-4 text-6xl font-medium flex-grow-2"> {hours} </div>
                            <div className="text-2xl font-light">Horas</div>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-white rounded-lg w-36 h-36">
                            <div className="mb-4 text-6xl font-medium flex-grow-2"> {minutes} </div>
                            <div className="text-2xl font-light">Minutos</div>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-white rounded-lg w-36 h-36">
                            <div className="mb-4 text-6xl font-medium flex-grow-2"> {seconds} </div>
                            <div className="text-2xl font-light">Segundos</div>
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-center text-center mb-12">
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