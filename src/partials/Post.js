import {useState, useEffect} from 'react'
import {Link } from 'react-router-dom'



const Post =(props)=>{

  const [noImg, setNoImg] = useState(false)
  const [imgUrl, setImgUrl] = useState("")
  const [headingTop, setHeadingTop] = useState(false)
  const [pbNone, setPbNone] = useState(false)
  const [mbNone, setMbNone] = useState(false)

  const data = props.data
  useEffect(() => {
    if(props.pbNone){
      setPbNone(props.pbNone)
    }

    if(props.mbNone){
      setMbNone(props.mbNone)
    }

    if(props.headingTop){
      setHeadingTop(props.headingTop)
    }

    if(data.image===null ||  !data.image.url || props.hideImg ){
        setNoImg(true)
    }
    else{
      setImgUrl(data.image.url)
    }
    

  }, [data, props])

    return(    
            <article  className={`overflow-hidden mr-2 max-w-sm md:max-w-none ${mbNone? "" :"mb-4"} ${pbNone? "" :"pb-4"}  ${props.small? "max-h-full md:max-h-screen" : "  md:max-h-screen"} ${props.borderBottom ? "border-b-2" : "" }`}>

            {
              headingTop?(
                <>
                <h3 className="mb-2 text-sm sm:text-lg lg:text-xl font-black">
                        <Link to={`/post/${data.slug}/${data.id}`} className="hover:text-blue-600 transition duration-150 ease-in-out">{data.title}</Link>
                </h3>
                <p className={`${noImg ? "w-0" : " md:w-1/1"}  w-1/1 text-xs sm:text-sm md:text-base`}>
                 {!noImg ? (
                    <Link  to={`/post/${data.slug}/${data.id}`} className={`h-1/1 mr-2 mb-1 md:w-2/3 float-left`}>
                          <img className={` rounded-md transform hover:scale-105 transition duration-700 ease-out ${props.small ? "w-24 sm:w-40  md:w-auto" : " w-52  md:w-auto"}`} src={imgUrl} alt={data.id} />
                    </Link>
                ) : (
                  <></>
                )}
                {data.description}

              </p></>
              ):(
                <></>
              )
            }

              {
                headingTop?(
                  <></>
                ):(
                  <>
                    <div className={`${noImg ? "w-0" : " md:w-1/1"}  w-1/1 text-xs sm:text-sm md:text-base`}>
                        {!noImg ? (
                            <Link to={`/post/${data.slug}/${data.id}`} className={`h-1/1 mr-2 mb-1 md:w-2/3 float-left`}>
                                  <img className={` rounded-md transform hover:scale-105 transition duration-700 ease-out ${props.small ? "w-24 sm:w-40 md:w-auto" : "w-52   md:w-auto"}`} src={imgUrl} alt={data.id} />
                            </Link>
                        ) : (
                          <></>
                        )}
                        <h3 className=" mb-2 text-sm sm:text-lg lg:text-xl font-bold">
                                <Link to={`/post/${data.slug}/${data.id}`} className="hover:text-blue-600 transition duration-150 ease-in-out">{data.title}</Link>
                        </h3>
                        <p> {data.description}</p>
                  </div>
                </>
                )
              }


 

      </article>
    )
}


export default Post