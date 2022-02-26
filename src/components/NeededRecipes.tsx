import { VFlow } from 'bold-ui'
import { Recipe } from '../model/model'
import { RecipeBox } from './RecipeBox'
import { RecipeList } from './RecipeList'

export interface NeededRecipesProps {
  selectedRecipes: Recipe[]
  ownedRecipes: Recipe[]
}

export const NeededRecipes = (props: NeededRecipesProps) => {
  const { selectedRecipes, ownedRecipes } = props
  const neededRecipes = neededRecipesCalculator(selectedRecipes, [...ownedRecipes])
  return <RecipeList recipeList={neededRecipes} key={'NeededRecipes'} />
}

const neededRecipesCalculator = (selectedRecipes: Recipe[], ownedRecipes: Recipe[]): Recipe[] => {
  var newList = []
  selectedRecipes.forEach((recipe) => {
    const foundIndex = ownedRecipes.findIndex((owned) => owned.id === recipe.id)
    if (foundIndex !== -1) {
      ownedRecipes.splice(foundIndex, 1)
    } else {
      if (recipe.components.length === 0) {
        newList.push(recipe)
      } else {
        newList = [neededRecipesCalculator(recipe.components, ownedRecipes), ...newList]
      }
    }
  })
  return newList
}
