import React,{useEffect, useState} from 'react'
import { SearchBar } from 'react-native-elements';

const SearchItemBar = () => {
    const [search,setSearch] = useState('')
    const updateChange = (e)=>{
        setSearch(e)
    }
    useEffect(()=>{
        console.log(search)
    })
    return (
        <SearchBar
            placeholder="Type Here..."
            onChangeText={(e)=>updateChange(e)}
            value={search}
        />
    )
}

export default SearchItemBar

