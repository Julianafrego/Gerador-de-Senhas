import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard';


export function ModalPassword({ password, handleClose }) {

    async function handleCopyPassword() {
        await Clipboard.setStringAsync(password);
        alert("Senha copiada com sucesso!");
        handleClose()
    }

    const copiedPass = async () => {
        await Clipboard.setStringAsync('Copiado!')
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text>
                    Senha gerada
                </Text>

                <Pressable style={styles.innerPass} onLongPress={handleCopyPassword} >
                    <Text style={styles.text}> {password} </Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onLongPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.buttonSave]}>
                        <Text style={styles.buttonSave}>Salvar senha</Text>
                    </TouchableOpacity>
                </View>


            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    content: {
        backgroundColor: '#fff',
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        color: "black",
        fontSize: 20,
        marginBottom: 24,
        //paddingBottom: 24,
    },
    innerPass: {
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: '90%',
        borderRadius: 8,
        alignItems: 'center'
    },
    text: {
        color: "#fff",
        textAlign: 'center',
    },

    buttonArea: {
        flexDirection: 'row',
        width: '90%',
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 14,
        marginTop: 14,
        padding: 8,

    },
    buttonSave: {
        backgroundColor: '#392DE9',
        borderRadius: 8,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 14,
        marginTop: 14,
        marginLeft: 10,
        marginRight: 10,

    }
})