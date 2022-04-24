import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View} from 'react-native';
import { Alert, Button } from 'react-native';

function Login() {
  return (
    <View style={styles.container}>

    <View style={styles.upperContainer}>
        <Text style={styles.title}>Wonderful Books</Text>
    </View>
    <View style={styles.midContainer}>

    <Text>Name</Text>

    <TextInput
      placeholder='Enter your Name'
      style={styles.input}
      onSubmitEditing={(inputData)=>{
        alert(inputData.nativeEvent.text)
      }}
      keyboardType={"name-phone-pad"}
      />

      <Text>Email</Text>

      <TextInput
        placeholder='Enter your email'
        style={styles.input}
        onSubmitEditing={(inputData)=>{
          alert(inputData.nativeEvent.text)
        }}
        keyboardType={"email-address"}
      />


      <Text>Password</Text>

      <TextInput
        placeholder='Enter your Password'
        style={styles.input}
        secureTextEntry={true}
      />
        
        <Button
          title=" Enter "
          color="#308BFF"
          onPress={() => Alert.alert('Simple Button pressed')}
        />

    </View>
    <View style={styles.bottomContainer}></View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  upperContainer:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  midContainer:{
    flex:2,
    padding:30,
  },
  bottomContainer:{
    flex:1,
    backgroundColor:'white'
  },

  title:{
      color: '#308BFF',
      fontWeight: 'bold',
      fontSize:30
  },
  input:{
    borderWidth:1,
    height:50
  }

});


export default Login;