import { useNavigation } from '@react-navigation/native'
import WelcomeForm from './WelcomeForm';

const WelcomeScreen = () => {
  const navigation = useNavigation()
	return <WelcomeForm navigation={navigation} />
}

export default WelcomeScreen;
