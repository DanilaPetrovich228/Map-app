import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '@/Apps/Utils/Colors'
import { getFirestore } from 'firebase/firestore';
import { collection,query,where,getDocs } from "firebase/firestore";
import { useUser } from '@clerk/clerk-expo';
import { app } from "./../../Utils/FirebaseConfig"
import PlaceItem from '../HomeScreen/PlaceItem';

export default function FavoriteScreen() {
  const db = getFirestore(app);
  const {user} = useUser()
  const [favList,setFavList] = useState([])
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    user&&getFav()
  },[user])
  const getFav = async()=>{
    setLoading(true)
    setFavList([])
    const q = query(collection(db, "att-fav-place"), where("email", "==", user?.primaryEmailAddress?.emailAddress));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  setFavList(favList=>[...favList,doc.data()])
  setLoading(false)
});}
  return (
    <View >
      <Text style={{
        padding:10,
        fontFamily:'outfit-medium',
        fontSize:30
      }}>My Favorite <Text style={{color:Colors.TURQUOISE}}> Places</Text></Text>
      {!favList?<View style={{
        height:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }}>
      <ActivityIndicator
      size={'large'}
      color={Colors.GREEN}
      />
      <Text style={{fontFamily:'outfit',marginTop:5}}>Loading...</Text>
      </View>:null}
      <FlatList
      data={favList}
      onRefresh={()=>getFav()}
      refreshing={loading}
      renderItem={({item,index})=>(
        <PlaceItem place = {item.place} isFav={true}
        markedFav={()=>getFav()}/>
      )}
      />
    </View>
  )
}