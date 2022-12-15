import { useNavigation } from '@react-navigation/native'
import MapsForm from './MapsForm';

const MapsScreen = () => {
  const navigation = useNavigation()
	return <MapsForm navigation={navigation} />
}

export default MapsScreen;
