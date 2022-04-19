import { useParams } from 'react-router-dom'
import {useQuery, gql} from '@apollo/client'
import AdsSlider from '../partials/AdsSlider';
import Ads from '../partials/Ads'
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import '../css/PostDetail.css'
import parser from 'html-react-parser';



const POST =gql`
query GetPost($id: ID!){
    article(id: $id){
        id,
        title,
        description,
        author{
          name
        },
        categories{
          name
        },
        image{
            url
        },
        created_at,
        slug,
        content
    }
}
`

// function getId(url) {
//     const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
//     const match = url.match(regExp);

//     return (match && match[2].length === 11)
//       ? match[2]
//       : null;
// }
    



const PostDetail =()=>{

    let noImg
    let imgUrl
    const {id} = useParams()
    
    const {loading, error, data} =useQuery(POST, {
        variables: {id : id}
    })

    


    if(loading) {
        return (
            <div className="mt-96"></div>

        )
    }
    if(error) {
        return (
            <div className="mt-96"></div>
        )
    }




    if(data.article.image===null ||  !data.article.image.url ){
        noImg=true
    }
    else{
      imgUrl=data.article.image.url
    }


 

    let str= data.article.content


    let parsed = parser(str)



    return(    
        <div className=" mb-10 md:mb-0" id="top">
        <div className="mb-2 mx-4 lg:mx-20">
           <AdsSlider location="menu"/>
        </div>
        <Header />
        <div className="md:flex justify-between relative my-4  lg:my-10">
            <div className="hidden md:block sticky left-0 top-20 w-1/6 h-auto "> <Ads   index={0}location="leftpost"/>       </div>                     
            <main className="md:w-4/6 mx-4">
                                <article  className={`overflow-hidden mr-2  border-b-2`}>
                                <h3 className=" mb-2 md:mb-10 text-sm md:text-2xl text-bold mt-10">
                                {data.article.title}
                                </h3>
                    
                                {!noImg ? (
                                    <img className={` rounded-md transform hover:scale-105 transition duration-700 ease-out h-1/1 mb-10 md:w-2/3 max-h-screen`} src={imgUrl} alt={data.article.id} />
                                ) : (
                                <></>
                                )}
                            <p className={`${noImg ? "w-0" : " md:w-1/1"}  w-1/1 text-xs md:text-base mb-10`}>
                                {data.article.description}

                                </p>
                                <div className="my-4 lg:my-8"><Ads index={0}location="leftpost"/></div>
                                {
                                    parsed
                                }        
                                </article>
            <a className="fixed bottom-10 right-10" href="#top" title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/arrow-icon-clip-art-file-down-arrow-icon-png-balin-icon-arrow-right--32.png" width="50" alt="top" /></a>
            </main>
            <div className="hidden md:block sticky left-0 top-20 w-1/6 h-auto "> <Ads   index={0}location="rightpost"/>       </div>                         
        </div>

        <div  className="mx-10 lg:mx-20"><Ads index={0}location="bottompost"/>  </div>                          
        <Footer />
  
      </div>

    )
}


export default PostDetail