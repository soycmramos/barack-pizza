import PizzaCard from '@components/PizzaCard'
import flavors from '../assets/pizza-flavors.json'

export default function FlavorGrid() {
	return (
		flavors.map(({ id, img, flavor, ingredients, availableEveryDay, price }) => {
			return (
				<PizzaCard
					key={id}
					img={img}
					flavor={flavor}
					ingredients={ingredients}
					availableEveryDay={availableEveryDay}
					price={price}
				/>
			)
		})
	)
}
