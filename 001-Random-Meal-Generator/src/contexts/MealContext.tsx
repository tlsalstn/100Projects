import React, { createContext, ReactNode, useState } from "react"

export interface Meal {
  dateModified: null
  idMeal: string
  strArea: string
  strCategory: string
  strCreativeCommonsConfirmed: null
  strDrinkAlternate: null
  strImageSource: null
  strIngredient1: string
  strIngredient2: string
  strIngredient3: string
  strIngredient4: string
  strIngredient5: string
  strIngredient6: string
  strIngredient7: string
  strIngredient8: string
  strIngredient9: string
  strIngredient10: string
  strIngredient11: string
  strIngredient12: string
  strIngredient13: string
  strIngredient14: string
  strIngredient15: string
  strIngredient16: string
  strIngredient17: string
  strIngredient18: string
  strIngredient19: string
  strIngredient20: string
  strInstructions: string
  strMeal: string
  strMealThumb: string
  strMeasure1: string
  strMeasure2: string
  strMeasure3: string
  strMeasure4: string
  strMeasure5: string
  strMeasure6: string
  strMeasure7: string
  strMeasure8: string
  strMeasure9: string
  strMeasure10: string
  strMeasure11: string
  strMeasure12: string
  strMeasure13: string
  strMeasure14: string
  strMeasure15: string
  strMeasure16: string
  strMeasure17: string
  strMeasure18: string
  strMeasure19: string
  strMeasure20: string
  strSource: string
  strTags: string | null
  strYoutube: string
}

interface MealContext {
  isLoading: boolean
  meal: Meal
  generateRandomMeal: (() => Promise<void>) | null
}

const defaultMeal: Meal = {
  dateModified: null,
  idMeal: "",
  strArea: "",
  strCategory: "",
  strCreativeCommonsConfirmed: null,
  strDrinkAlternate: null,
  strImageSource: null,
  strIngredient1: "",
  strIngredient2: "",
  strIngredient3: "",
  strIngredient4: "",
  strIngredient5: "",
  strIngredient6: "",
  strIngredient7: "",
  strIngredient8: "",
  strIngredient9: "",
  strIngredient10: "",
  strIngredient11: "",
  strIngredient12: "",
  strIngredient13: "",
  strIngredient14: "",
  strIngredient15: "",
  strIngredient16: "",
  strIngredient17: "",
  strIngredient18: "",
  strIngredient19: "",
  strIngredient20: "",
  strInstructions: "",
  strMeal: "",
  strMealThumb: "",
  strMeasure1: "",
  strMeasure2: "",
  strMeasure3: "",
  strMeasure4: "",
  strMeasure5: "",
  strMeasure6: "",
  strMeasure7: "",
  strMeasure8: "",
  strMeasure9: "",
  strMeasure10: "",
  strMeasure11: "",
  strMeasure12: "",
  strMeasure13: "",
  strMeasure14: "",
  strMeasure15: "",
  strMeasure16: "",
  strMeasure17: "",
  strMeasure18: "",
  strMeasure19: "",
  strMeasure20: "",
  strSource: "",
  strTags: null,
  strYoutube: ""
}

export const MealContext = createContext<MealContext>({
  isLoading: false,
  meal: defaultMeal,
  generateRandomMeal: null
})

interface MealProviderProps {
  children: ReactNode
}

const MealProvider = (props: MealProviderProps) => {
  const { children } = props
  const [meal, setMeal] = useState<Meal>(defaultMeal)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const generateRandomMeal = async () => {
    setIsLoading(true)

    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    const json = await response.json()
    setMeal(json.meals[0])

    setIsLoading(false)
  }

  return <MealContext.Provider value={{ isLoading, meal, generateRandomMeal }}>{children}</MealContext.Provider>
}

export default MealProvider
