import { useEffect } from 'react'
import { FaRegClock, FaDollarSign } from 'react-icons/fa6'
import { GoLocation } from 'react-icons/go'
import Container from '@components/Container'
import FlavorGrid from '@components/FlavorGrid'
import WhatsAppButton from '@components/WhatsAppButton'

export default function Home() {
	useEffect(() => document.title = 'Barack Pizza', [])
	return (
		<>
			<section className='bg-hero-home bg-cover bg-center h-dvh'>
				<Container className='flex flex-col justify-center items-center md:items-start h-full'>
					<h1 className='text-center md:text-start text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold text-white'>
						Barack
						<span className='block font-extralight italic'>
							Pizza
						</span>
					</h1>
				</Container>
			</section>
			<section className='py-14 bg-white'>
				<Container>
					<h2 className='text-4xl font-bold mb-12 text-center'>Nuestros sabores especiales</h2>
					<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
						<FlavorGrid />
					</div>
				</Container>
			</section>
			<section className='py-14 lg:py-24'>
				<Container className='grid gap-4 grid-cols-1 lg:grid-cols-3'>
					<article className='flex gap-4 items-center bg-white p-4 shadow-md'>
						<FaRegClock
							className='w-24 h-auto p-3 rounded-full stroke-1 bg-green-100 text-green-400'
						/>
						<div>
							<h4 className='font-semibold mb-1 text-lg'>Entrega rápida</h4>
							<p className='font-light text-sm'>Atendemos tu pedido en un máximo de 10 minutos</p>
						</div>
					</article>
					<article className='flex gap-4 items-center bg-white p-4 shadow-md'>
						<FaDollarSign
							className='w-24 h-auto p-3 rounded-full stroke-1 bg-green-100 text-green-400'
						/>
						<div>
							<h4 className='font-semibold mb-1 text-lg'>Pizza para todos</h4>
							<p className='font-light text-sm'>Tenemos el percio más accesible del mercado para ti: $4.000</p>
						</div>
					</article>
					<article className='flex gap-4 items-center bg-white p-4 shadow-md'>
						<GoLocation
							className='w-24 h-auto p-3 rounded-full stroke-1 bg-green-100 text-green-400'
						/>
						<div>
							<h4 className='font-semibold mb-1 text-lg'>Ubicación central</h4>
							<p className='font-light text-sm'>Estamos ubicados en la Avenida Caracolí para que puedas encontraros</p>
						</div>
					</article>
				</Container>
			</section>
			<section className='py-14 bg-white'>
				<Container className='grid gap-4 grid-cols-1 md:grid-cols-2 items-center'>
					<div className='grid gap-2'>
						<h2 className='text-4xl font-semibold'>Servicio a domicilio</h2>
						<p>Contamos con cervicio de entrega domicilio para órdenes desde de tres unidades en cualquiera de nuestros sabores disponibles por sólo <span className='font-semibold'>$ 3.000</span></p>
						<WhatsAppButton phone={import.meta.env.VITE_WHATSAPP_PHONE} />
					</div>
					<div className='overflow-hidden rounded-md'>
						<img
							src="https://img.freepik.com/foto-gratis/conductor-masculino-guapo-trabajador-feliz-scooter-casco-rojo-entregando-pizza_273609-31429.jpg?t=st=1727488287~exp=1727491887~hmac=dfc6c6e55c4d5fa15755970ed6ee9decf1292fa554e0bb36fbfe733eabb6f6f0&w=996"
							alt="Domicilio"
							className='rounded-md hover:scale-110 transition-all'
						/>
					</div>
				</Container>
			</section>
		</>
	)
}
