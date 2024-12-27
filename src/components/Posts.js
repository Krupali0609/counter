import { useEffect, useState } from 'react';
import axios from "axios";
const URL="https://jsonplaceholder.typicode.com/posts"



const Posts = () => {
    const [posts, setPosts]=useState([])
    const [loading, setLoading]=useState(true)
    const [error, setError]= useState(null)

    useEffect(()=>{
        axios
        .get(URL)
        .then((post)=>{
                setLoading(false)
                setPosts(post.data)
        })
        .catch((err)=>{
            setError(err)
            setLoading(false)
        });
    },[loading,error])

    if(loading) return (<div> Loading...</div>)
    if(error) return <div style={{color:"red"}}> {error.message} </div>
  return (
    <div>
        <h2> Network Request</h2>
        <div>
            {posts.map((post)=>{
                return(
                    <div key={post.id}>
                        <h2> {post.title}</h2>
                        <p>{post.body}</p>
                    </div>

                )
                
            })}
        </div>
    </div>
  )
};


export default Posts;