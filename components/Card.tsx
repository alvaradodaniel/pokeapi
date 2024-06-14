import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function Card({data = null, navigation}) {

   console.log(data)
   

   function handleClick(){
    navigation.navigate("Details", {name: data?.url})
    }

  return (
    <TouchableOpacity onPress={handleClick}>
        <Text style = {styles.container}>
          {data?.name}
        </Text> 
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#123456",
    height: 70,
    width: 240,
    margin: 10,
    fontSize: 40,
    color: "white",
    borderRadius: 13,
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  container2: {
    padding: 10,
    backgroundColor: "#123456",
    height: 70,
    width: 240,
    margin: 10,
    fontSize: 40,
    color: "white",
    borderRadius: 13,
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },

});
