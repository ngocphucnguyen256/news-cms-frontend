import {useQuery, gql} from '@apollo/client'
import 'react-slideshow-image/dist/styles.css'


const GETADS =gql`
query GetAds($location: String!){
    ads(where:{
      location: $location
    }){
          id,
          url,
          banner{
              url
          }
    }
}
`

// menu
// headerpost
// middlepost
// keyword
// video
// footer
// leftpost
// rightpost
// bottompost



const Ads = (props) => {
    
  const {loading, error, data} =useQuery(GETADS, {
      variables: {location : props.location}
  })

  

    

    
  if(loading) {
      return (
          <div className=" h-20 md:h-40 lg:h-52"></div>

      )
  }
  if(error) {
      return (
          <></>

      )
  }


  if(!data.ads || data.ads.length===0) {
    return (
        <></>
    )
}

    return (
        <div className="w-1/1 h-full " >
                     {
                          data.ads[props.index].banner ? (
                            <a className="w-1/1 h-1/1 rounded-md object-fill " href={data.ads[props.index].url} target="_blank" rel="noreferrer"> <img  className="object-fill w-1/1 h-1/1" src={data.ads[props.index].banner.url} alt="ads"/></a>
                          ) : (
                            <iframe  className="flex items-center justify-center bg-cover w-1/1 h-1/1 rounded-md" frameBorder="0"  src={data.ads[props.index].url}  title="3rd party ad content" name="" scrolling="no" marginWidth="0"
                            marginHeight="0" data-is-safeframe="true" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"  ></iframe>
                          )
                          
                        }
             
        </div>
      
    )
};

export default Ads;