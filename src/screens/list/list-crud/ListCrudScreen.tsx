import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import ListCrudForm from './ListCrudForm';
import { AppState } from '@redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { editRecipe, getRecipes, deleteRecipe } from '@redux/actions/listActions'

const ListCrudScreen = () => {
  const dispatch: any = useDispatch();
  const navigation = useNavigation()
  const selectedRecipe: any = useSelector<AppState>(
    state => state.list.selectedRecipe,
  );
  const isLoading: any = useSelector<AppState>(
    state => state.list.isLoading,
  );

  const [inputs, inputField] = useState({
    title: '',
    name: ''
  });

  const handleOnChange = (id: any, value: string) => {
    inputField((prev: any) => ({
      ...prev,
      [id]: value,
    }));
  };

  const getFreshRecipe = async() => {
    await dispatch(getRecipes())
  }

  const onSaveEdit = async (id: number) => {
    await dispatch(editRecipe(selectedRecipe, id, inputs.title))
  }

  const onDeleteRecipe = async (id: number) => {
    await dispatch(deleteRecipe(id))
  }

	return (
    <ListCrudForm
      navigation={navigation}
      selectedRecipe={selectedRecipe}
      handleOnChange={handleOnChange}
      inputs={inputs}
      onSaveEdit={onSaveEdit}
      isLoading={isLoading}
      getFreshRecipe={getFreshRecipe}
      onDeleteRecipe={onDeleteRecipe}
    />
  )
}

export default ListCrudScreen;
