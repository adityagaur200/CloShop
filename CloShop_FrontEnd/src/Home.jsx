import CardCollection from "./components/MainComponent/DisplaySection/Collection Card/CardCollection"
import ListBuy from "./components/MainComponent/DisplaySection/HomeBuySection/ListBuy"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ImageScroller from "./components/MainComponent/TopSection/ImageScllorer"
function Home() {
  return (
    <>
      <Header/>
      <ImageScroller/>
      <ListBuy/>
      <CardCollection/>
      <ListBuy Heading='Trending Now'/>
      <Footer/>
    </>
  )
}

export default Home
