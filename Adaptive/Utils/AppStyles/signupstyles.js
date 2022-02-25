import { StyleSheet } from 'react-native';

const signupstyles = { container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  loginText: {
    color: '#dcdcdc',
  }, 
 
  image: {
    marginBottom: 30,
    width: 100,
    height: 100,
    resizeMode: 'stretch'
  },
 
  inputView: {
    backgroundColor: "#dcdcdc",
    borderRadius: 10,
    width: "90%",
    height: 45,
    marginBottom: 20, 
    alignItems: "flex-start",
  },
 
  TextInput: {
    height: 20,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color:'green'
  },
 
  forgot_button: {
    height: 22,
    marginBottom: 20,
    alignItems:"flex-end",
    color:'green'
  },
  TouchableOpacity : {
    height: 20,
    marginBottom: 10,

  },

  loginBtn: {
    width: "90%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#2e8b57",
  },}
  export default signupstyles;