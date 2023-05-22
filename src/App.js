import './App.css';
// import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/Homepage';
import RaamatuTeenus from './pages/Raamatuteenus/RaamatuTeenus';
import IlmaTeenus from './pages/IlmaTeenus/IlmaTeenus';
import PostiTeenus from './pages/PostiTeenus/PostiTeenus';
import AboutPage from './pages/AboutPage';

function App() {

  // const [postitused, setPostitused] = useState([
  //   {
  //     id: 'eqweqwerqwe',
  //     title: 'Minu esimene blogipostitus',
  //     content: `
  //     Bacon ipsum dolor amet jowl turducken fatback short loin. Pig spare ribs chislic tenderloin capicola, pork chop landjaeger filet mignon corned beef. Fatback cupim beef ribs spare ribs pastrami. Bresaola flank beef ham meatloaf pig. Pork loin cupim jerky swine kielbasa pork chop.
  //   Frankfurter bacon kielbasa alcatra, drumstick tenderloin meatloaf spare ribs t-bone strip steak chuck beef ribs cupim filet mignon landjaeger. Landjaeger chicken prosciutto chuck jerky chislic. Hamburger boudin fatback flank, pork chop porchetta beef turkey picanha brisket capicola pork belly shank. Corned beef flank shankle bresaola ground round jerky meatball sausage, ham biltong tail frankfurter. T-bone beef tri-tip picanha.
  //   Cow capicola rump bacon kielbasa tenderloin pancetta ribeye chislic doner burgdoggen meatball tail. Turducken flank alcatra tail rump. Frankfurter boudin jerky, chuck shoulder tri-tip biltong cow spare ribs sausage prosciutto short loin tail turkey turducken. Beef ribs pancetta chicken short loin.
  //     `
  //   },
  //   {
  //     id: 'tetetreter',
  //     title: 'Minu teine blogipostitus',
  //     content: `
  //     Character heathen sense Pip. It's some form of Elvish. I can't read it. Well-protected flows Fangorn. Bring Dory steel. Abandon tempt hero needs dung Arwen able-bodied examine. Matter rue tree sake abyss here Bain. Justice runs come bearer rampart Beren alike. Children explain gentle boiling tongs big maybe bell Thror!
  //   Greatly Thror's bowl honest bid guesses arrives scouts? Accorded pages tried Gondor's could've vines let's resown wipe. Rare Chubbs cream defeat promise squeaking box? Searing stole yours Warg limited reserves guest. Stone squash tradition Bain mean. It must be taken deep into Mordor and cast back into the fiery chasm from whence it came. Lament treacherous left mirrors parasites farthest homes tombs squeaking Hornburg? Looked archers goblins linger exceeding provisions rent side forged news ought Haradrim? Renowned here's gave Gaffer.      `
  //   }
  // ])

  // const spaceId = 'gdjyymxq7al3'
  // const accessToken = 'lhk0eTpoHYZQvBUsYztQxyDR7WRCdnj_oT4M-ZnUKK0'
  // const contenfulUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}`
  
  // useEffect(() => {
  //     const fetchPosts = async () => {
  //         const result = await fetch(contenfulUrl)
  //         const postsData = await result.json()
  //         console.log(postsData)
  //         const assets = {};
  //         postsData.includes.Asset.forEach(element => {
  //           assets[element.sys.id] = 'https:' + element.fields.file.url
  //         });

          
  //         console.log(assets)
  //         const loadedPosts = postsData.items.map((record) => {
  //           return {
  //             id: record.sys.id,
  //             title: record.fields.pealkiri,
  //             content: record.fields.kirjeldus,
  //             pictureUrl: assets[record.fields.paispilt.sys.id],
  //             richContent: record.fields.sisu
  //           }
  //         })
  //         console.log(loadedPosts)
  //         setPostitused(loadedPosts)
  //     }
  //     fetchPosts()
  // }, [contenfulUrl])


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/books' element={<RaamatuTeenus />} />
            <Route path='/weather' element={<IlmaTeenus />} />
            <Route path='/news' element={<PostiTeenus />} />
            {/* <Route path='/news/:postId' element={<PostiTeenus postitused={postitused} />} /> */}
            <Route path='/about' element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
