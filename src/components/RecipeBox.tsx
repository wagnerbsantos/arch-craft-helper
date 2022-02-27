import { Cell, Tag, VFlow } from 'bold-ui'
import { Recipe } from '../model/model'

export interface RecipeBoxProps {
  recipe: Recipe
  handleClick: (Recipe) => void
}

export const RecipeBox = (props: RecipeBoxProps) => {
  const { recipe, handleClick } = props
  return (
    <Cell>
      <Tag
        onClick={(e) => {
          handleClick(recipe)
        }}
      >
        {recipe.name}
      </Tag>
    </Cell>
  )
}
