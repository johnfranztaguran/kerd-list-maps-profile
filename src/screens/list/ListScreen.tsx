import React, { useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native'
import { Loader } from 'components'
import ListForm from './ListForm';
import { selectRecipe } from '@redux/actions/listActions'
import { AppState } from '@redux/reducers';

const ListScreen = () => {
  const dispatch: any = useDispatch();
  const navigation = useNavigation()

  const recipes: any = useSelector<AppState>(
    state => state.list.recipes,
  );
  const categories: any = useSelector<AppState>(
    state => state.list.categories,
  );
  const isLoading: any = useSelector<AppState>(
    state => state.list.isLoading,
  );

  const setCategoryName = (categoryId: any) => {
    let name;
    categories.map((data: any) => {
      if (data.id == categoryId) {
        name = data.name;
      }
    });
    return name;
  };

  const onPressRecipe = (item: any) => {
    dispatch(selectRecipe(item))
  };

	return (
    <>
    {
      isLoading ? (<Loader />) : (
        <ListForm
          navigation={navigation}
          setCategoryName={setCategoryName}
          recipes={recipes}
          categories={categories}
          onPressRecipe={onPressRecipe}
        />
      )
    }
    </>
  )
}

export default ListScreen;
