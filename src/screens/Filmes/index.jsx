import { View, Text, ImageBackground, ScrollView, Image} from 'react-native';

import styles from './styles';
import Title from '../../components/Title';
import MyButton from '../../components/Button';

export default function Filmes() {
  return (
    <View style={styles.container}>
          <ImageBackground source={require("./../../../assets/background.jpg")} style={styles.backgroundImage} />
      <Title title="Meus Filmes Favoritos" />
      <Text style={styles.text}>veja meus Hobbies</Text>
      <ScrollView style={styles.scroll}>
        <Image source={require('./../../../assets/scale.png')} style={{ width: '50%', height: '50%'}} />
        <Text style={styles.text}>Gosto muito de do filme Vingadores Endgame</Text>
        <Image source={require('./../../../assets/scale.png')} style={{ width: '50%', height: '50%'}} />
        <Text style={styles.text}>Gosto muito de do filme Vingadores Endgame</Text>
        <Image source={require('./../../../assets/scale.png')} style={{ width: '50%', height: '50%'}} />
        <Text style={styles.text}>Gosto muito de do filme Vingadores Endgame</Text>
        <Image source={require('./../../../assets/scale.png')} style={{ width: '50%', height: '50%'}} />
        <Text style={styles.text}>Gosto muito de do filme Vingadores Endgame</Text>
</ScrollView>
      <Text style={styles.text}>Se quiser conhecer meus Hobbies clique no botão a baixo 😎</Text>
      <MyButton destination="Hobbies" name="Hobbies"/>
      <Text style={styles.text}>Clique aqui para voltar para a Home page 😎</Text>
      <MyButton destination="Home" name="Home"/>
    </View>
  )
}
