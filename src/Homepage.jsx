import Main from './Homepage/Main'
import Explore from './Explore/Explore'
import About from './About/About'
import Popular from './Popular/Popular'
import Testimonial from './Testimonial/Testimonial'
import Blog from './Blog/Blog'
import Footer from './Footer/Footer'


function Homepage({like, setLike, shop, setShop}) {

  return (
    <div>
      <Main/>
      <Explore/>
      <About/>
      <Popular like={like} setLike={setLike} shop={shop} setShop={setShop}/>      
      <Testimonial/>
      <Blog/>
      <Footer/>

   </div>
  )
}

export default Homepage