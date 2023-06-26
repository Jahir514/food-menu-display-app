import { FlatList, View, Text } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'
const CategoriesScreen = ({ navigation }) => {
  //this navigation is provided by react navitor
  const onPressHandler = (itemData) => {
    navigation.navigate('MealsOverview', {
      categoryId: itemData.item.id,
    })
  }
  return (
    <FlatList
      data={CATEGORIES}
      key='_' //its for changing numColumns
      keyExtractor={(item) => '_' + item.id}
      renderItem={(itemData) => (
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={() => onPressHandler(itemData)}
        />
      )}
      numColumns={2}
    />
  )
}

export default CategoriesScreen
