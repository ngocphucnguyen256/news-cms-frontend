import { Slide } from 'react-slideshow-image';
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



const AdsSlider = (props) => {
    
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

    console.log(data)

    return (
          <div>
          <Slide easing="ease" duration={2000}>
            {
              data.ads.map(item=>{
                  return (
                    <div key={item.id} className="each-slide ">
                        {
                          item.banner ? (
                            <a className="flex items-center justify-center bg-cover h-20 md:h-40 lg:h-52 w-1/1 rounded-md" href={item.url} target="_blank" rel="noreferrer"> <img  src={item.banner.url} alt="ads"/></a>
                          ) : (
                            <iframe  className="flex items-center justify-center bg-cover h-20 md:h-40 lg:h-52 w-1/1 rounded-md" frameBorder="0"  src={item.url}  title="3rd party ad content" name="" scrolling="no" marginWidth="0"
                            marginHeight="0" data-is-safeframe="true" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"  ></iframe>
                          )
                          
                        }
                  </div>
                  )
              })
            }


          </Slide>
        </div>
      
    )
};

export default AdsSlider;