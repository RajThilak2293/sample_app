import { StyleSheet } from 'react-native';

const WorkStyles = StyleSheet.create({
    // container: {  
    //     flex: 1,  
    //     padding: 26,  
    //     backgroundColor: "#fff",  
    //     justifyContent: "flex-start"  
    // },  
    // innerContainer:{  
    //     flex: 1,  
    //      width: "100%",  
    //      flexDirection: "row",  
    //      justifyContent: "space-between",  
    //      alignItems: "center"  
    //  },
   textBox:{
        height: 50 ,
        backgroundColor: '#D6DBDF', 
        fontSize: 20,
        // marginTop :10,
        borderRadius: 10,       
    },

    loginBtn: {
    flexDirection : 'column',
    width: "20%",
    borderRadius: 8,
    height: 40,
    alignItems: "center",
     justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#2e8b57",
    marginLeft:240,
    },
 });

 export default WorkStyles;