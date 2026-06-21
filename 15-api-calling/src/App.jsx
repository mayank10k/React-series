import axios from 'axios'

const App = () => {

  // //using fetch
  // async function getData() {
  //   const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response);
    
  // }

  // const getData=async()=>{
  //   const response=await fetch('https://jsonplaceholder.typicode.com/todos/1') //1 is the indexing of data ,remove 1 to get more data
  //   const data=await response.json();
  //   console.log(data)

  // }

  // using axios
  const getData= async()=>{
    const response=await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  
    console.log(response.data)
    
  }



  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App