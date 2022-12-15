import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Block, Button, Text, TextInput } from 'components'
import { strings, colors } from 'constant'
import { Screens, ButtonMode, ButtonType } from 'enums'
import styles from './styles'

type Props = {
  navigation: any
  selectedRecipe: any,
  inputs: any,
  handleOnChange: (id: string, value: any) => void;
  onSaveEdit: (id: number) => void,
  isLoading: boolean,
  getFreshRecipe: () => void
  onDeleteRecipe: (id: number) => void
}

const ListCrudForm = ({
  navigation,
  selectedRecipe,
  handleOnChange,
  inputs,
  onSaveEdit,
  isLoading,
  getFreshRecipe,
  onDeleteRecipe
}: Props) => {

  return (
    <Block flex={1} column style={styles.container}>
      <Block flex={10}>
        <ScrollView>
          <Block style={styles.stepperContainer}>
            <Text
              text={strings.listCrud.recipeInformation}
              h4
              style={styles.h4}
            />
          </Block>
          <Block style={styles.bodyContainer}>
            <Block>
              <TextInput
                id="title"
                label={selectedRecipe.title}
                value={inputs.title}
                onValueChange={handleOnChange}
                style={styles.txtInput}
              />
            </Block>
          </Block>
        </ScrollView>
      </Block>
      <Block style={styles.btnFooter}>
        <Button
          onPress={() => navigation.goBack()}
          text={strings.listCrud.cancel}
          color={colors.nevada}
        />
      </Block>
      <Block style={styles.btnFooter}>
        <Button
          onPress={() => {
            onSaveEdit(selectedRecipe.uuid);
            if (!isLoading) {
              getFreshRecipe()
              navigation.navigate(Screens.ListForm)
            }
          }}
          text={isLoading ? 'Loading...' : strings.listCrud.saveEdit}
        />
      </Block>
      <Block style={styles.btnFooter}>
        <Button
          onPress={() => {
            onDeleteRecipe(selectedRecipe.uuid);
            if (!isLoading) {
              getFreshRecipe()
              navigation.navigate(Screens.ListForm)
            }
          }}
          text={isLoading ? 'Deleting...' : strings.listCrud.delete}
          color={colors.cinnabar}
        />
      </Block>
    </Block>
  )
}

export default ListCrudForm
