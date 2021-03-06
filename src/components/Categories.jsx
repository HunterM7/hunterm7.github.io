import React from 'react'

const Categories = ({ activeCategory, setActiveCategory }) => {
	const categoryItems = [
		'Все',
		'Мясные',
		'Вегетерианские',
		'Гриль',
		'Острые',
	]

	return (
		<ul className='categories'>
			{categoryItems.map((item, index) => {
				return (
					<li
						key={index}
						onClick={() => setActiveCategory(index)}
						className={`
							${'categories__item'}
							${index === activeCategory && 'active'}
						`}
					>
						{item}
					</li>
				)
			})}
		</ul>
	)
}

export default Categories
