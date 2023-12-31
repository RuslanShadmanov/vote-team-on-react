import './Team.style.css'


const Team = ({name,voteCount,url,increment,msg})=>{
    return <div className='team'>
        <img src={url} alt="" />
        
        <h3>{msg}</h3>
        <button onClick ={()=>{increment(name)}}>Vote</button>
        <p>Vote Count: {voteCount}</p>
        </div>
}

export default Team;