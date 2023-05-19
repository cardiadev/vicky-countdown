import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';


const Over = () => {

  function enviarMensaje() {
    window.location.href = 'https://wa.me/?text=Ya%20voy%20en%20camino%20a%20verte…%20te%20veo%20en%20Mexico';
  }


  return (
    <div className='flex flex-col items-center justify-center h-screen font-semibold text-center'>
      <p className='mb-12 text-5xl'>"El tiempo ha valido la pena"</p>
      <p className='mb-12 text-5xl'>♥️    Te Amo    ♥️</p>
      <p className='mb-12 text-4xl'>Te veo en México</p>
      <p className='mb-12 text-5xl'>🇨🇴 😘 🇲🇽</p>
      <p className='text-3xl'>20 de Mayo 2023</p>

      <div class="flex items-center justify-center text-center mt-20">
        <div className="flex items-center justify-center text-center">
          <button className="flex items-center justify-center px-4 py-3 text-center text-white transition bg-green-500 rounded-lg hover:bg-green-600 duration-800" onClick={enviarMensaje}>

            <FaWhatsapp size={36} />
            <p className='ml-2 text-lg'>Recordarle por WhatsApp</p>

          </button>
        </div>
      </div>
    </div>
  )
}

export default Over