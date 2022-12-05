import React, {useState, useEffect} from 'react'
//function DataFetching() {
//   const [posts, setPosts] = useState([])

//useEffect(() => {
//    axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
//    .then(res => {
//        console.log(res)
//        setPosts(res.data)
//    })
//    .catch(err => {
//        console.log(err)
//    })
//}, [])

// return (
//    <div>
//        <ul> 
//            {posts.map(post => (
//               <li key={post.id}>{post.title}</li>
//             ))}
//        </ul>
//    </div>
//  )
//} 



function DataFetching() {

     const [data, setData] = useState([]);
  
 const apiGet = () => {
    fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    setData(json.pokemon);
    });
 } 

 useEffect(() => {
 //   apiGet();
 })
  
 return (
<div>
    MY API <br/>
    <button onClick={() => apiGet()}>Fetch API</button>
    <br />
    <div>
        <ul>
            {data?.map((item) => (
                <li key={item.id}>
                  {item.name}
                  <img src={item.img}/>
                </li>
            ))}
        </ul>
    </div>
</div>
  );
}


export default DataFetching;