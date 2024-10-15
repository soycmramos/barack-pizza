import { IoCalendarNumberOutline } from 'react-icons/io5'

export default function PizzaCard({ img, flavor, ingredients, availableEveryDay, price }) {
	const ingredientList = ingredients.map((ingredient, index) => {
		return (
			<li className="text-md before:content-['-'] before:mr-1" key={index}>{ingredient}</li>
		)
	})

	return (
		<article className='px-4 py-8 rounded-md shadow-md hover:shadow-lg border hover:bg-neutral-50 transition-all'>
			<img src={img} alt="Pizza" className='rounded-full w-3/4 mx-auto hover:scale-105 transition-all mb-4' />
			<h3 className='text-xl font-semibold mb-1'>{flavor}</h3>
			<ul className='mb-2'>{ingredientList}</ul>
			<div className="flex justify-between items-center">
				<p className='w-fit font-semibold text-yellow-900 text-sm'>
					<IoCalendarNumberOutline className='inline-block align-middle mr-1 mb-1 w-6 h-6' />
					{`${availableEveryDay ? 'Todos los días' : 'Fines de semana'}`}
				</p>
				<p className='py-2 px-4 w-fit text-center text-xl font-semibold bg-green-500/25 text-green-900'>$ {price}</p>
			</div>
		</article>
	)
}
