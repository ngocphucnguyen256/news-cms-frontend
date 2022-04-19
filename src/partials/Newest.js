
// import { useQuery, gql } from '@apollo/client'
import CategoryPostList from './CategoryPostList'
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import adImg from '../images/news-01.jpg'



// const POSTS =gql`
// query GetPosts{
//     posts{
//         id,
//         title,
//         description,
//         writer{
//           name
//         },
//         category{
//           name
//         },
//         image{
//             url
//         },
//         created_at
//     }
// }
// `


const Newest =()=>{

    // const {loading, error, data} =useQuery(POSTS)
    
    
    // if(loading) {
    //     return (
    //         <div className="mt-96"></div>

    //     )
    // }
    // if(error) {
    //     return (
    //         <div className="mt-96"></div>

    //     )
    // }


    return(
        <div className="mx-2 md:mx-10 mb-10 md:mb-0" id="top">

          <div className="mb-2 ">
             <img className="h-24 w-1/1 md:w-screen md:h-40" src={adImg} alt="ad" />
          </div>

          <Header />
          <main className="flex-grow">
                <h2 className="text-bold text-4xl my-4 font-bold">Mới nhất</h2>
 
                        <div className="w-1/1">
                            <CategoryPostList keywords={"Kinh tế"} grid/>
                            <CategoryPostList keywords={"Giải trí"} grid/>
                            <CategoryPostList keywords={"Công nghệ"} grid/>
                            <CategoryPostList keywords={"Thể thao"} grid/>
                            <CategoryPostList keywords={"Văn hóa - xã hội"} grid/>
                            <CategoryPostList keywords={"Thời trang"} grid/>
                            <CategoryPostList keywords={"Hàng hiệu"} grid/>
                            <CategoryPostList keywords={"Du lịch"} grid/>
                            <CategoryPostList keywords={"Ẩm thực"} grid/>
                            <CategoryPostList keywords={"Sống khỏe"} grid/>

                        </div>
    

            <a className="fixed bottom-10 right-10" href="#top" title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/arrow-icon-clip-art-file-down-arrow-icon-png-balin-icon-arrow-right--32.png" width="50" alt="arrow icon clip art file down arrow icon png balin icon arrow right " /></a>
          </main>

          <Footer />
    
        </div>
   
    )
}


export default Newest