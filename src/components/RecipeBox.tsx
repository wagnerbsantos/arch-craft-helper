import { Tag, VFlow } from 'bold-ui'
import { Recipe } from '../model/model'

export interface RecipeBoxProps {
  recipe: Recipe
}

export const RecipeBox = (props: RecipeBoxProps) => {
  const { recipe } = props
  return <Tag>{recipe.name}</Tag>
}
