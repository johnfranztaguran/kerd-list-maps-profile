import React from 'react'
import { ScrollView, View, TouchableOpacity, FlatList, TouchableHighlight, Image } from 'react-native'
import moment from 'moment'
import { Block, Button, Text, Header, AvatarThumbnail } from 'components'
import { ButtonMode, ButtonType, Screens } from 'enums'
import { images, colors, strings } from 'constant'
import styles from './styles'

type Props = {
  navigation: any
  setCategoryName: any
  recipes: any
  categories: any
  onPressRecipe: any
}

const { Profile } = images
const date = moment(Date.now()).format('ddd, MMMM DD, YYYY')

const LisForm = ({
  navigation,
  setCategoryName,
  recipes,
  categories,
  onPressRecipe
}: Props) => {

  const renderRecipes = (item: any) => {
    const { item: recipe } = item;
    return (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => {
          onPressRecipe(recipe)
          navigation.navigate(Screens.ListCrud, { recipe });
        }}
      >
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: recipe.photo_url }} />
          <Text text={recipe.title} style={styles.title}/>
          <Text text={setCategoryName(recipe.categoryId)} style={styles.category}/>
        </View>
      </TouchableHighlight>
    );
  }

  return (
    <Block>
      <Header
        title={`${strings.list.foodRecipes} Home`}
        subtitle={`${strings.home.todayIs} ${date}`}
        isBack={false}
        leftComponent={() => (
          <TouchableOpacity onPress={() => {}}>
            <AvatarThumbnail
              size={32}
              photo={Profile}
              hasPhoto
              initialsName="Joanne Bisnar"
              customStyle={styles.avatar}
            />
          </TouchableOpacity>
        )}
      />
      <Block column style={styles.mainContainer}>
        <Block column style={styles.simpleAppContainer}>
          <Text h5 text={strings.list.foodRecipes} style={styles.title} />
          <View style={styles.panelBox}>
            <Text
              body
              text={strings.list.viola}
              align="center"
              color={colors.grayishBlue}
            />
            <Text
              body
              text={strings.list.chooseYourRecipe}
              align="center"
              color={colors.grayishBlue}
            />
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={recipes}
            renderItem={renderRecipes}
            keyExtractor={(item) => `${item.uuid}`}
          />
        </Block>
      </Block>
    </Block>
  )
}

export default LisForm
