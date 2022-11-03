import React,{useState,useEffect} from 'react'

import { View, Text,StyleSheet, TextInput,Image, FlatList, TouchableOpacity} from 'react-native'

import { ApiConfig } from './config/apiconfig';
import { colors } from './utills/colors';
import { Images } from './config/images';

const App = () => {

    const[movie,setMovie]=useState('');
    const[movieList,setMovieList]=useState([]);
    const[filterList,setFilterList]=useState('');
    
    useEffect(()=>{
        // console.log("Enter in useEfeect")
          onResponseFetch()
        // axios.get('https://www.omdbapi.com/?s=man&apikey=4a3b711b').then((response) => {
        //     console.log("response -->",response.data)
        //     // setPost(response.data[0]);
            
        //   });
    },[])

    const  onResponseFetch =async()=>{
      
      let response=  fetch('https://www.omdbapi.com/?s=man&apikey=4a3b711b',{
        method:'GET'
       });
console.log("Fetch-->",JSON.stringify(response)
)
    }
   
//   React.useEffect(() => {
//     axios.get('https://www.omdbapi.com/?s=man&apikey=4a3b711b').then((response) => {
//       console.log(response.data)
//       setPost(response.data[0]);
      
//     });
//   }, []);
    // const onSearchFilter =(query)=>{

    //     const newData=movieList.
    // }

  return (
    <View style={styles.container}>
        <View style={styles.searchContainer}>
           
    <TextInput
    placeholder='Search'
    placeholderTextColor={colors.gray}
    >
        </TextInput>
        <TouchableOpacity style={{backgroundColor:'red',height:20,width:20}} onPress={onResponseFetch}>
<Text>please touch</Text>
            </TouchableOpacity>
        <FlatList
        data={filterList}
        numColumns={2}
        renderItem={({item,index})=>{
            return(
                <TouchableOpacity>
<Image source={{uri:item.Poster}} style={styles.img} />
    

                    </TouchableOpacity>
            )
        }}
        />
        </View>
    </View>
  )
}

export default App
const styles =StyleSheet.create({
    container:{
        flex:1
    },
    searchContainer:{
        backgroundColor:colors.searchbox,
    
    },
    img:{
        borderRadius:12
    }

})