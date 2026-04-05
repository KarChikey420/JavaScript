import axios from "axios";

async function getData(){
  const response=await axios.get("http://192.168.56.1:3000/api/user")
  return response.data;
}

export default async function Home(){
  const data=await getData();
  return(
    <div>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
    </div>
  )
  
}
