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
      <ScrollView style={styles.scroll}>
        <Image source={require('./../../../assets/valorant.jpg')} style={{ width: '50%', height: '50%'}} />
        <Text style={styles.text}>Gosto muito de jogar jogos, sejam eles onlines ou offlines</Text>
        <Image source={require('./../../../assets/valorant.jpg')} style={{ width: '50%', height: '50%'}} />
        <Text style={styles.text}>Gosto muito de jogar jogos, sejam eles onlines ou offlines</Text>
        <Image source={require('./../../../assets/valorant.jpg')} style={{ width: '50%', height: '50%'}} />
        <Text style={styles.text}>Gosto muito de jogar jogos, sejam eles onlines ou offlines</Text>
        <Image source={require('./../../../assets/valorant.jpg')} style={{ width: '50%', height: '50%'}} />
        <Text style={styles.text}>Gosto muito de jogar jogos, sejam eles onlines ou offlines</Text>
</ScrollView>
<Text style={styles.text}>Clique aqui para voltar para a Home page 😎</Text>
      <MyButton destination="Home" name="Home"/>
      <Text style={styles.text}>Se quiser conhecer meus filmes favoritos clique no botão a baixo 😎</Text>
      <MyButton destination="Filmes" name="Filmes"/>
    </View>
  )
}
