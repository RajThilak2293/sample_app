import { StyleSheet } from 'react-native';


const CardStyles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header: {
    fontSize: 18,
    paddingVertical: 15,
    // fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#DCDCDC',
    borderRadius: 12,
    marginTop :20,
  },
  footer: {
    fontSize: 30,
    paddingVertical: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#DCDCDC',
  },
  flatlist: {
    flexDirection:'row',
    paddingVertical: 25,
    paddingHorizontal: 25,
    backgroundColor: "#dcdcdc",
    
  },
  heading2: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 1,    
    marginVertical: 5,   
    borderRadius: 5,
  },
  
  subheading: {
    color: 'black',
    fontSize: 12,    
    textAlign: 'left',   
    padding: 2,
    borderRadius: 5,   
  },
  subheading1: {
    color: 'black',
    fontSize: 12,    
    textAlign: 'left',   
    padding: 2,
    borderRadius: 5,   
  },


  itemSeparator: {
    backgroundColor: 'green',
    height: 10,
    
  },
 });

 export default CardStyles;