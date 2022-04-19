
// import { useQuery, gql } from '@apollo/client'
import CategoryPostList from './CategoryPostList'
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import adImg from '../images/news-01.jpg'



const SlugCategory =(props)=>{




    return(
        <div className="mx-2 md:mx-10 mb-10 md:mb-0" id="top">

          <div className="mb-2 ">
             <img className="h-24 w-1/1 md:w-screen md:h-40" src={adImg} alt="ad" />
          </div>

          <Header />
          <main className="flex-grow">
 
                        <div className="w-1/1">
                            <CategoryPostList keywords={props.keywords} grid small={false}/>


                        </div>
    

            <a className="fixed bottom-10 right-10" href="#top" title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/arrow-icon-clip-art-file-down-arrow-icon-png-balin-icon-arrow-right--32.png" width="50" alt="arrow icon clip art file down arrow icon png balin icon arrow right " /></a>
          </main>

          <Footer />
    
        </div>
   
    )
}


export default SlugCategory