Food - row 1
- name (String)
- imageUrl (String)
- nutritionInfo (NutritionInfo)
- tags (Array of Strings)

Type of food/ category
- foodGroup (String), Enum?


NutritionInfo - row 2
- Calories (Number) - Number of calories per portion
- totalFat (Number)
- sodium (Number)
- sugar (Number)
- protein (Number)
- fiber (Number)
- servingSizeDescription (String)
- servingUnitAmount (Number)
- servingSizeUnit (String)



<!-- FoodLogr+
FoodDiary
FoodList+
NutritionDiary
MealList+ -->
<!-- MealHistory
MacroCounter+ -->

MealTracker - row 3
- name (String)
- meals (Array of MealEntry)


MealEntry - row 4
- numServings (Number)
- time (Date)
- foodItems (Array of FoodServing)

FoodServing
- food (Food)
- numServings
