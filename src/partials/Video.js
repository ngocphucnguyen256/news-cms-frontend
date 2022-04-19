import {useState} from 'react'
const videos =[
    {
        id: "3LgeAfx3eqg",
        title:"TIN TỨC CRYPTO | CÁC NHÀ LẬP PHÁP MỸ ĐẨY LÙI VIỆC RA MẮT VÍ NOVI CỦA FACEBOOK"
    },
    {
        id: "nLSwvRjjQA0",
        title:"TECH TALK | TỌA ĐÀM CÔNG NGHỆ - TẬP 8 - CƠ HỘI X10 VÀ RỦI RO KHI ĐẦU TƯ TIỀN KỸ THUẬT SỐ"
    },
    {
        id: "jULQ4Z5ezdQ",
        title:"TIN TỨC CRYPTO | CME NHÌN THẤY SỰ QUAN TÂM MỞ KỶ LỤC ĐỐI VỚI HỢP ĐỒNG TƯƠNG LAI BITCOIN (ETF)"
    },
    {
        id: "ZOq3kV6go5s",
        title:"TIN TỨC CRYPTO | CẬU BÉ 12 TUỔI ĐẾN TỪ LONDON ĐÃ KIẾM ĐƯỢC GẦN 400.000 USD NHỜ BÁN TOKEN NFT"
    }
]

// https://img.youtube.com/vi/nLSwvRjjQA0/default.jpg

const Video =()=>{
    const [nowPlaying, setNowPlaying] = useState(videos[0])





    const handleClick=(e)=>{
        setNowPlaying({
            id:e.id,
            title:e.title
        })
    }

    return(
        <div className="mt-4 bg-yellow-100 p-3  rounded-lg" id="video">
                <h3 className="text-bold text-2xl lg:text-3xl  my-4">Video</h3>

                   {/* slider*/}

            <div className="overflow-hidden md:pb-5">
                <div className={`flex  transition duration-200 ease-in-out transform`}>
                    <div className="flex justify-between mb-10 flex-grow flex-shrink-0 w-1/1  ">
                        <div className="w-1/1">
                            <iframe className="md:h-96 md:w-1/1 xl:w-11/12" width="100%" height="300px" src={`https://www.youtube.com/embed/${nowPlaying.id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <p className="my-4 font-bold">{nowPlaying.title}</p>
                        </div>
                        
                   {/* nav col  1*/}
                        <div className="xl:flex flex-col justify-between items-center w-1/3 mr-6 hidden">
                                {
                                    videos.map((video, index) =>{
                                        return(
                                            <div key={index} className="w-1/1 p-2 flex justify-between items-center transform hover:scale-105 transition duration-700 ease-out " onClick={(e)=>handleClick(e.target)} id={video.id} title={video.title}>
                                                    <img className="mr-4 rounded-md" src={`https://img.youtube.com/vi/${video.id}/default.jpg`} alt="YouTube"  id={video.id} title={video.title}/>
                                                    <p className="text-xs md:text-sm"  id={video.id} title={video.title}>{video.title}</p>
                                            </div>
                                        )
                                    })
                                }
        
                        </div>
                    </div>
                </div>
            </div>


           {/* social*/}
            
            <div className="flex items-center justify-between mb-2">
                  <a href="# " className="bg-blue-600 flex items-center text-white rounded-sm p-1 text-xs"><img src="https://www.freeiconspng.com/uploads/facebook-like-icon--3.png" width="18" alt="facebook Like icon " />Thích 156</a>
                  <a href="# " title="Image from freeiconspng.com" className="ml-auto mr-2 md:mr-4"><img src="https://www.freeiconspng.com/uploads/facebook-logo-3.png" width="18" alt="Facebook Logo HD PNG Pic" /></a>
                  <a className="" href="# " title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/twitter-icon-download-18.png" width="18" alt="Bird, blue, Logo Twitter PNG" /></a>
            </div>
            <a className="flex items-center justify-center bg-gray-100 rounded-lg" href="https://www.youtube.com/c/NewstarChannel102/featured" title="youtube">Theo dõi trên <img src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png" width="100" alt="Youtube Logo PNG Transparent" /></a>

           {/* nav row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mt-4 xl:hidden">
                {
                    videos.map((video, index) =>{
                        return(
                            <div key={index} className=" p-2 md:p-4" onClick={(e)=>handleClick(e.target)} id={video.id} title={video.title}>
                                    <img className="rounded-sm mb-2" src={`https://img.youtube.com/vi/${video.id}/default.jpg`} alt="YouTube"  id={video.id} title={video.title}/>
                                    <p className="text-xs"  id={video.id} title={video.title}>{video.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Video