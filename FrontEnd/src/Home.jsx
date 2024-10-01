import ListBuy from "./components/MainComponent/DisplaySection/HomeBuySection/ListBuy"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ImageScroller from "./components/MainComponent/TopSection/ImageScllorer"
import NewCard from "./components/MainComponent/DisplaySection/Collection Card/NewCard"
function Home() {
  return (
    <>
      <Header/>
      <ImageScroller/>
      <ListBuy/>
      <NewCard/>
      <ListBuy Heading='Arrive Now'/>
      <ListBuy Heading='CloShop Luxe'/>
      <Footer/>
    </>
  )
}

export default Home
