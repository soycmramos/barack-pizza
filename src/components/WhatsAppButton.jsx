import { FaWhatsapp } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function WhatsAppButton({ phone }) {
	return (
		<Link
			to={import.meta.env.VITE_WHATSAPP_API_URL + phone}
			target='blank'
			className='block w-fit py-2 px-6 bg-[#25D366] hover:bg-[#21BD5B] rounded-sm active:bg-[#1DA851] text-white text-lg font-semibold'
		>
			<FaWhatsapp className='inline-block mr-1 mb-1 w-6 h-6 font-semibold' />
			Pedir domicilio
		</Link>
	)
}
