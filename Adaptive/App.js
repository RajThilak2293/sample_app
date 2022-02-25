import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import { Headline } from 'react-native-paper';
import styles from './Utils/AppStyles/AppStyles';
import signupstyles from './Utils/AppStyles/signupstyles';
import CardStyles from './Utils/AppStyles/CardStyles';
import UserProfileStyles from '../Adaptive/Utils/AppStyles/UserProfileStyles';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WorkStyles from './Utils/AppStyles/WorkStyles';

function LogInScreen({ navigation }) {

  const [textInputEmail, setTextInputEmail] = useState('');
  const [textInputPassword, setTextInputPassword] = useState('');

  const checkTextInput = () => {
    if (!textInputEmail.trim()) {
      alert('Please Enter Email');
      return;
    }
    if (!textInputPassword.trim()) {
      alert('Please Enter Password');
      return;
    }

    alert('Welcome Back');
    navigation.navigate('Dashboard')
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../Adaptive/assets/logo.png")} />
      <View>
        <View>
          <Headline style={{ fontSize: 30, fontWeight: 'bold', }}> Welcome Back</Headline>
          <Headline style={{ fontSize: 15, textAlign: "center", borderRadius: 25, }}>Login to continue</Headline>
        </View>
      </View>


      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Email"
          placeholderTextColor="#003f5c"
          onChangeText={
            (value) => setTextInputEmail(value)
          }
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={
            (value) => setTextInputPassword(value)
          }
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { checkTextInput() }} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <View>
        <Text>
          Don't have account?
        </Text>
      </View>
      <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }} style={{ height: 50, borderRadius: 5, alignItems: 'center', justifyContent: 'flex-end', }}>
        <Text style={styles.forgot_button}>Create a new Account</Text>
      </TouchableOpacity>
    </View>
  );
}

function SignUpScreen() {
  return (
    <View style={signupstyles.container}>

      <View>
        <Headline style={{ fontSize: 30, fontWeight: 'bold', }}> Create Account</Headline>
        <Headline style={{ fontSize: 15, textAlign: "center", borderRadius: 25, }}>create anew account</Headline>

      </View>
      <View style={signupstyles.inputView}>
        <TextInput
          style={signupstyles.TextInput}
          placeholder="First Name"
          placeholderTextColor="#000000"

        />
      </View>
      <View style={signupstyles.inputView}>
        <TextInput
          style={signupstyles.TextInput}
          placeholder="Last Name"
          placeholderTextColor="#000000"

        />
      </View>

      <View style={signupstyles.inputView}>
        <TextInput
          style={signupstyles.TextInput}
          placeholder="Enter Email"
          placeholderTextColor="#000000"

        />
      </View>
      <View style={signupstyles.inputView}>
        <TextInput
          style={signupstyles.TextInput}
          placeholder="Phone"
          placeholderTextColor="#000000"

          keyboardType="numeric"
        />
      </View>

      <View style={signupstyles.inputView}>
        <TextInput
          style={signupstyles.TextInput}
          placeholder="Enter Password"
          placeholderTextColor="#000000"
          secureTextEntry={true}


        />
      </View>
      <View style={signupstyles.inputView}>
        <TextInput
          style={signupstyles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="#000000"
          secureTextEntry={true}

        />
      </View>
      <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }} style={signupstyles.loginBtn}>
        <Text style={signupstyles.loginText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

function Profile({ navigation: { navigate } }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);


  const getUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    console.log("====> data", data)
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={CardStyles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          console.log("======>", item)
          return (
            <TouchableOpacity onPress={() => navigate('Profile', {
              name: item.name,
              phone: item.phone,
              email: item.email,
              website: item.website
            })}>
              <View style={CardStyles.flatlist}>
                <View>
                  <Image
                    style={{ height: 90, width: 90, }}
                    source={{
                      uri: 'https://www.clipartmax.com/png/full/100-1005846_waiter-free-icon-avatar-profile-circle-png.png'
                    }}
                  /></View>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={CardStyles.heading2}>{item.name}</Text>
                  <Text style={CardStyles.subheading1}>{item.email}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

function ProfileScreen({ route, navigation }) {
  return (
    <View style={UserProfileStyles.container}>
      <View style={UserProfileStyles.header}>
        <View style={UserProfileStyles.headerContent}>
          <TouchableOpacity>
            <Image style={UserProfileStyles.avatar}
              source={{ uri: 'https://www.clipartmax.com/png/full/100-1005846_waiter-free-icon-avatar-profile-circle-png.png' }} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <View>
            <Text style={UserProfileStyles.text}>Username :</Text>
          </View>
          <Text style={UserProfileStyles.headerContent} >{route.params.name} </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text style={UserProfileStyles.text}>Phone :</Text>
          </View>
          <Text style={UserProfileStyles.headerContent}>{route.params.phone}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text style={UserProfileStyles.text}>Email :</Text>
          </View>
          <Text style={UserProfileStyles.headerContent}>{route.params.email}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text style={UserProfileStyles.text}>website :</Text>
          </View>
          <Text style={UserProfileStyles.headerContent}>{route.params.website}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('Works') }} style={UserProfileStyles.loginBtn}>
          <Text style={UserProfileStyles.text}>Works</Text>
        </TouchableOpacity>
      </View>
      <View>
      </View>
    </View>
  );
}

function WorkScreen(props) {


  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const checkTextInput = ({name}) => {
    if (!text.trim()) {

      alert('Please Enter your Today Works', data);
    } 
    else { 
      
      setData(data); console.log(data);
     }
  };

  return (
    <View style={{ padding: 40, flexDirection: 'column' }}>
      <TextInput style={WorkStyles.textBox}
        placeholder="Todays Work"
        onChangeText={newText => setText(newText)}
        Value={text}
      />
      
      <TouchableOpacity onPress={() => { checkTextInput({name : data}) }} style={WorkStyles.loginBtn}>
        <Text style={styles.loginText}>Submit</Text>
      </TouchableOpacity>
     {data.length != null && data.map((item,index)=>{
       return(<View key={index} style={{padding:10}}><Text>{item.name}</Text></View>)
     })}
    </View>
  );
};


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Adaptive Text">
        <Stack.Screen name="Adaptive Test" component={LogInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Dashboard" component={Profile} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Works" component={WorkScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




