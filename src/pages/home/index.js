import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import Slider from '@react-native-community/slider'
import { useState } from 'react'
import { ModalPassword } from '../../components/modal'

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export function Home() {
    const [size, setSize] = useState(6) // estado, sem que o user faça algo, o valor atualiza
    const [passwordValue, setPasswordValue] = useState("") // estado para guardar a senha criada
    const [modalVisible, setModalVisible] = useState(false); // estado da visibilidade do modal


    function generatePassword() {
        // console.log("oi");

        let password = "";
        for (let i = 0, n = charset.length; i < size; i++) {
            password += charset.charAt(Math.floor(Math.random() * n)) // flor = numero inteiro, ega um numero inteiro, aleatorio com base em n , vezes n
        }
        setPasswordValue(password)
        setModalVisible(true);
        //console.log(password);
    }


    return (
        <View style={styles.container}>

            <Image source={require("../../assets/logo.png")} style={styles.logo} />

            <Text style={styles.title}> {size} caracteres</Text>

            <View style={styles.area}>
                <Slider style={{ height: 50 }}
                    minimumValue={6}
                    maximumValue={20}
                    maximumTrackTintColor='#000'
                    minimumTrackTintColor='#392DE9'
                    thumbTintColor='#392DE9'
                    value={size}
                    onValueChange={(value) => setSize(value.toFixed(0))} // TOFIXED(0) PARA 0 CASAS DECIMAIS
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={generatePassword}>
                <Text style={styles.buttonText}>         Gerar senha </Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType="fade" transparent={true}>
                <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)} />
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3FF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    area: {
        marginTop: 1,
        marginBottom: 14,
        width: "80%",
        padding: 8
    },

    logo: {
        marginBottom: 40,
        width: 80,
        height: 100
    },
    button: {
        backgroundColor: "#392de9",
        width: "80%",
        height: 50,
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 8
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        textAlign: "center",
        justifyContent: "center",
        marginTop: 20,
        fontWeight: "bold",
        width: "80%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    },

    title: {
        fontSize: 30,
        fontWeight: "bold"
    }


})