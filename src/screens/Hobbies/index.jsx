import { View, Text, Image, ImageBackground, ScrollView } from 'react-native'

import styles from './styles'
import Title from '../../components/Title'
import MyButton from '../../components/Button'

export default function Hobbies() {

  return (
    <View style={styles.container}>
          <ImageBackground source={require("./../../../assets/background.jpg")} style={styles.backgroundImage} />
      <Title title="Meus Hobbies" />
      <Text style={styles.text}>veja meus Hobbies</Text>
      <ScrollView style={styles.scroll} >
        <Image source={require('./../../../assets/valorant.jpg')} style={{ width: '50%', height: '50%'}} />
</ScrollView>
<Text style={styles.text}>Clique aqui para voltar para a Home page</Text>
      <MyButton destination="Home" name="Home"/>
      <Text style={styles.text}>Click on the button below to go to the Ghibli screen</Text>
      <MyButton destination="Filmes" name="Filmes"/>
    </View>
  )
}
