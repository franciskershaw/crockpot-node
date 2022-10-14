import Header from '../../layout/header/Header'
import Icon from '../../components/icons/Icon'
import RecipeCard from '../../components/recipeCard/RecipeCard';
import RecipeCardLong from '../../components/recipeCard/RecipeCardLong';
import Toggle from '../../components/toggles/Toggle';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUtensils} from '@fortawesome/free-solid-svg-icons'

const MenuPage = () => {
	return (
		<>
		<Header title='Menu'>
			<Icon classes={"mr-3"} type={"no-hover"}>
				<FontAwesomeIcon icon={faUtensils}/>
			</Icon>
		</Header>
		<div className='container'>
			<Toggle left={"My favourites (8)"} right={"My recipes (5)"} fixed>
				<div className="flex flex-wrap justify-evenly space-y-3">
					<RecipeCardLong></RecipeCardLong>
					<RecipeCard></RecipeCard>
					<RecipeCard></RecipeCard>
					<RecipeCardLong></RecipeCardLong>
					<RecipeCardLong></RecipeCardLong>
					<RecipeCardLong></RecipeCardLong>
					<RecipeCardLong></RecipeCardLong>
					<RecipeCardLong></RecipeCardLong>
					<RecipeCardLong></RecipeCardLong>
				</div>
				<div className="flex flex-wrap justify-evenly">
				</div>
			</Toggle>
		</div>
		</>
		
	)
}

export default MenuPage