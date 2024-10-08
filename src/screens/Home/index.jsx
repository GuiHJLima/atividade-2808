import { View, Text, ImageBackground, Image} from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import MyButton from '../../components/Button';

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./../../../assets/background.jpg")} style={styles.backgroundImage} />
      <Title title="Bem-Vindo a Minha Pagina :)" />
      <Image source={require('./../../../assets/me.jpeg')} style={{ width: '50%', height: '25%'}} />
      <Text style={styles.text}>Me Chamo Guilherme Henrique Jerônimo de Lima, mas pode me chamar so de Lima, Estudo no SESI 299 Valinhos e no SENAI 564 tambem em Valinhos</Text>
      <Text style={styles.text}>Se quiser conhecer meus Hobbies clique no botão a baixo 😎</Text>
      <MyButton destination="Hobbies" name="Hobbies"/>
      <Text style={styles.text}>Se quiser conhecer meus filmes favoritos clique no botão a baixo 😎</Text>
      <MyButton destination="Filmes" name="Filmes"/>
    </View>
  )
}
