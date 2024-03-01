import { createSlice } from '@reduxjs/toolkit'

export const mealSlice = createSlice({
  name: 'meal',
  initialState: {
    value: "",
  },
  reducers: {
    setDinner: (state) => {
      state.value = "Dinner"
    },
    setLunch: (state) => {
      state.value = "Lunch"
    },
    setBreakfast: (state) => {
      state.value= "Breakfast"
    },
  },
})

export const { setBreakfast, setLunch, setDinner } = mealSlice.actions

export const selectMeal = (state) => state.meal.value

export default mealSlice.reducer