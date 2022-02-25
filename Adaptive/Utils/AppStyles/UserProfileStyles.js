import { StyleSheet } from 'react-native';

const UserProfileStyles = StyleSheet.create({
  // container:{
  //   flex:1,
  //   marginTop:40,
  //   backgroundColor:'#fff',
  //   alignItems :'center'
  // },

  header:{
    backgroundColor: "#37474F",
  },
  headerContent:{
    padding:20,
    alignItems: 'center',
    fontWeight :'800',
    color:"#37474F",    
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: 88,
    borderWidth: 1,
    borderColor: "white",
    marginBottom:30,
   
  },
  name:{
    fontSize:22,
    color:"#37474F",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#778899",
    height:500,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:26,
    marginTop:10,
    color:"#37474F",
    fontWeight:'700',    
  },
  text: {
    padding:5,
    alignContent: 'center',
    fontWeight :'800',
    color :'#BDBDBD',   
    marginLeft : 15,
    borderBottomColor :'#BDBDBD'
  },
  loginBtn: {
    width: "90%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#2e8b57",
    marginLeft: 20,
  },





//   list: {
//     paddingHorizontal: 5,
//     backgroundColor:"#fff",
//   },
//   listContainer:{
//     alignItems:'center'
//   },
//   /******** card **************/
//   card:{
//     shadowColor: '#474747',
//     shadowOffset: {
//       width: 0,
//       height: 6,
//     },
//     shadowOpacity: 0.37,
//     shadowRadius: 7.49,

//     elevation: 12,
//     marginVertical: 20,
//     marginHorizontal: 40,
//     backgroundColor:"#e2e2e2",
    // flexBasis: '42%',
//     width:120,
//     height:120,
//     borderRadius:60,
//     alignItems:'center',
//     justifyContent:'center'
//   },
//   cardHeader: {
//     paddingVertical: 17,
//     paddingHorizontal: 16,
//     borderTopLeftRadius: 1,
//     borderTopRightRadius: 1,
//     flexDirection: 'row',
//     alignItems:"center", 
//     justifyContent:"center"
//   },
//   cardContent: {
//     paddingVertical: 12.5,
//     paddingHorizontal: 16,
//   },
//   cardFooter:{
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingTop: 12.5,
//     paddingBottom: 25,
//     paddingHorizontal: 16,
//     borderBottomLeftRadius: 1,
//     borderBottomRightRadius: 1,
//   },
//   cardImage:{
//     height: 50,
//     width: 50,
//     alignSelf:'center'
//   },
//   title:{
//     fontSize:24,
//     flex:1,
//     alignSelf:'center',
//     fontWeight:'bold'
//   },
});

export default UserProfileStyles;
