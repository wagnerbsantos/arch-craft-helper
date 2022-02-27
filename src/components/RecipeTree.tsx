import { Grid, HFlow, VFlow } from 'bold-ui'
import { Recipe } from '../model/model'
import { RecipeBox } from './RecipeBox'

export interface RecipeListProps {
  id: string
  recipeList: Map<Recipe, any>
  handleClick: (Recipe) => void
}

export const RecipeList = (props: RecipeListProps) => {
  const { id, recipeList, handleClick } = props
  const list = []
  recipeList.forEach((recipe, key) => list.push(<HFlow>{treeMaking(recipeList)}</HFlow>))

  return <VFlow>{list}</VFlow>
}

const treeMaking = (recipeList: Map<Recipe, any>): JSX.Element => {
  const list = []
  const nextList: Map<Recipe, any>[] = []
  list.push()
  recipeList.forEach((recipe, key) => list.push(<HFlow></HFlow>))
  return <Grid>{list}</Grid>
}
