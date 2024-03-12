import Ingredient from './Ingredient'

export const IngredientsList = ({ list }) =>
    <ul className="ingredients">
        {/* 리스트 형식은 인덱스를 넣어주는게 안전하다 */}
        {list.map((ingredient, i) =>
            // 한 줄이라서 return 생략
            <Ingredient key={i} {...ingredient} />
        )}
    </ul>

IngredientsList.displayName = 'IngredientsList'

export default IngredientsList
