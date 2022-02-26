import { HFlow } from 'bold-ui'
import { useState } from 'react'
import { recipeList } from '../constants/Recipe'
import { Recipe } from '../model/model'
import { NeededRecipes } from './NeededRecipes'

export const Body = () => {
  const [selectedRecipes, setSelectedRecipes] = useState<Recipe[]>(recipeList)
  const [ownedRecipes, setOwnedRecipes] = useState<Recipe[]>([])
  return (
    <HFlow alignItems='flex-end'>
      <NeededRecipes ownedRecipes={ownedRecipes} selectedRecipes={selectedRecipes} />
    </HFlow>
  )
}
