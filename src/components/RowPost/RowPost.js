import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import Youtube from 'react-youtube'
import {API_KEY, ImageUrl} from '../../constants/constants'
function RowPost(props) {

    const [state,setState] = useState([ ])
    const [urlId,seturlId] = useState()
    useEffect(()=>{
        axios.get(props.url).then((res)=>{
            console.log(res.data.results[0])
            setState(res.data.results)

        }).catch(()=>{
            console.log('network error')
        })
    },[]) 

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    const handleMovie = (id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(res=>{

            console.log(res.data)
            if(res.data.results.length != 0){
                seturlId(res.data.results[0])
            }
            else{
                console.log('trailer not found')
            }

          })
    }
  return (
    <div className='row'>
      <h2 className="title">{props.title}</h2>
      <div className="posters">  
      {state?state.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?"smallpost":"poster"} src={`${ImageUrl+obj.backdrop_path}`} alt="" />
      ):''}
       </div>
       <div>
{urlId?<Youtube videoId={urlId.key}  opts={opts}/>:""}
       </div>
    </div>
  )
}

export default RowPost
