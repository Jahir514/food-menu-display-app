import { View, FlatList, StyleSheet } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'
const MealsOverViewScreen = ({ route }) => {
  const categoryId = route.params.categoryId
  const displayedMeal = MEALS.filter((mealInfo) =>
    mealInfo.categoryIds.includes(categoryId)
  )
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeal}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <MealItem meal={itemData.item} />}
      />
    </View>
  )
}

export default MealsOverViewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
