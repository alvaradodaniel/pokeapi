import useFetch from '@/hooks/useFetch';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card } from './Card';



export function Home({navigation}) {

    const pageLimit = 10
    const [limit, setLimit ] = useState(pageLimit)
    const [offset, setOffset ] = useState(0)

    const {list, loading, error} = useFetch(limit, offset)
    useEffect(() => {
        console.log(list, loading, error?.message)
    }, [loading])

    function handleClick(){
        setLimit(limit + pageLimit)
    }

  return (

    <View onPress={handleClick} style={styles.list}>
       {list.map((element, index) => (<Card key={element?.id || index} data={element} navigation={navigation}/>))}
    </View>

  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 70,
  },
});
