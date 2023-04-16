import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';


const Over = () => {

  function enviarMensaje() {
    window.location.href = 'https://wa.me/?text=Ya%20voy%20en%20camino%20a%20verte…%20te%20veo%20en%20Mexico';
  }


  return (
    <div className='flex flex-col items-center justify-center text-center font-semibold h-screen'>
      <p className='text-5xl mb-12'>"El tiempo ha valido la pena"</p>
      <p className='text-4xl mb-12'>Te veo en México</p>
      <p className='text-3xl mb-12'>😘 🇲🇽</p>
      <p className='text-3xl'>20 de Mayo 2023</p>

      <div class="flex items-center justify-center text-center mt-20">
        <div className="flex items-center justify-center text-center">
          <button className="bg-green-500 flex items-center justify-center text-center hover:bg-green-600 transition duration-800 text-white py-3 px-4 rounded-lg" onClick={enviarMensaje}>

            <FaWhatsapp size={36} />
            <p className='text-lg ml-2'>Recordarle por WhatsApp</p>

          </button>
        </div>
      </div>
    </div>
  )
}

export default Over