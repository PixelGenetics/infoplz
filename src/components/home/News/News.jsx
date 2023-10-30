import example from '../../../assets/example.png'
import '../News/NewStyle.css'

const News = () =>{
    return (
        <>
        <div className='mainContainer'>
            <div className='gridNoticias'>
                    <img src={example} alt="" />
                    <h2>Automotive Parts & System</h2>
                    <p>Tiling is an effective way to add 
                        elegance & style to any bath or 
                        kitchen Yellow Hats Remodeling Team
                        specializes in tile installation 
                        and works directly with each.</p>
                    <a href="#">Read More</a>
            </div>
        </div>
        </>
    )
}

export default News