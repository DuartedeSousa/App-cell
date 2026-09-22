//--------------------------------------
//ETAPA 4 - CRIAR COMPONENTE
//--------------------------------------
// Nós vamos reutilizar o componente em 03 telas diferentes (Inicio, Jogos, Favoritos)
import {view, text, Image, Pressable, StyleSheet} from "react-native";
import{ useRouter } from "expo-router";
//navegação programatica.
import { cores } from "../data/tema";

export default function GameCard ({jogo}){
    const router = useRouter();

    return (
        <Pressable
        style={StyleSheet.card}
        onPress={() => router.push(`/jogos/${jogo.id}`)} // Navega entre as costas
        >
            <Image source={jogo.imagem} style={Styles.imagem}/>
            <View style={styles.info}>
                <text style={styles.nome} numbersOfLines={1}>
                    {jogo.nome}
                </text>
                <text style={styles.genero}>{jogo.genero}</text>
                <text style={styles.nota}>⭐{jogo.nota}</text>
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    card: {
        backGroundColor: cores.fundoCard,
        borderRadius: 12,
        overflow: "hidden",
        width: 158,
        marginRight: 12,
        borderWidth: 1,
        borderColor: cores.borda,
    },
    imagem: {
        width: "100%",
        height: 110,
    },
    info: {
        padding: 10,
    },
    nome: {
        color: cores.textoPrincipal,
        fontSize: 14,
        fontWeight: "bold",
    },
    genero: {
        color: cores.textoPrincipal,
        fontSize: 12,
        margnTop: 2,
    },
    nota: {
        color: cores.verde,
        fontSize: 12,
        marginTop: 4,
        fontWeight: 600,
    },
});