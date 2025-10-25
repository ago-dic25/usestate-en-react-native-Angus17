import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { FlatList } from 'react-native-web';

export default function App() {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [listaAlumnos, setListaAlumnos] = useState([]);

  function actualizarMensaje(nuevoMensaje) {
    if (nuevoMensaje.length > 0) {
      setMensaje(nuevoMensaje);
    } else {
      setMensaje('Por favor, escribe un mensaje');
    }
  }

  function contadorCaracteresNombre(nombreIngresado){
    if(nombreIngresado.length <= 5){
      setNombre("Hola!" + nombreIngresado + " 🙂");
    }
    else{
      setNombre("Hola!" + nombreIngresado + " 🙃");
    }
  }

  function agregarAlumnoALista(nombreAlumno){
    setListaAlumnos([...listaAlumnos, nombreAlumno]);
  }

  return (
    <View style={styles.container}>
      <Text>Haz hecho click: {contador} veces</Text>
      <Button title="Aumenta el contador" onPress={() => setContador(c => c + 1)} />
      <br />
      <TextInput
        placeholder="Escribe un mensaje"
        onChangeText={setMensaje}
      />
      <TextInput
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
        onSubmitEditing={(event) => console.log(event.nativeEvent.text)}
      />
      <br />
      
      <Text>{mensaje}</Text>
      <br />
      <Button title='Mostrar Nombre' onPress={() => contadorCaracteresNombre(nombre)} />
      <br />
      <Button title="Limpiar el nombre" onPress={() => setNombre('')} />
      <br />
      <Button title="Mostrar mensaje" onPress={() => actualizarMensaje(mensaje)} />
      <br />
      <Button title="Agregar Alumno" onPress={() => agregarAlumnoALista(nombre)} />

      <FlatList
        data={listaAlumnos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});