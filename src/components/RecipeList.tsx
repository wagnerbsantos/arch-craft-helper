import { VFlow } from 'bold-ui'
import { Recipe } from '../model/model'
import { RecipeBox } from './RecipeBox'

export interface RecipeListProps {
  key: string
  recipeList: Recipe[]
}

export const RecipeList = (props: RecipeListProps) => {
  const { key, recipeList } = props
  const list = []
  recipeList.forEach((recipe, index) => list.push(<RecipeBox key={key + '-' + index} recipe={recipe} />))

  return <VFlow>{list}</VFlow>
}
