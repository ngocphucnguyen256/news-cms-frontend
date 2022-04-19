import BlockPost from './BlockPost'
import { useQuery, gql } from '@apollo/client'
import AdsSlider from './AdsSlider'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const POSTS =gql`
query GetPosts{
    categories{
   name,
   articles{
       id,
     title,
     description,
     slug,
     created_at,
     image{
         url
     }
   }
 }
}
`



const CategoryPostList =(props)=>{

    const {loading, error, data} =useQuery(POSTS)
    let temp
    let filterList 



    if(props.data){
        temp=[...props.data]
        filterList= temp.filter(post => post.categories.some(category => category.name=== props.keywords));
    }
    else{
       
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
        temp=[...data.categories]
        filterList = temp.filter(category=>(
            category.name=== props.keywords
        )).filter(category=>(
            category.articles !=null
        ))
        const formatList =  filterList[0].articles.map(post=>{

            let localdate = new Date(post.created_at);
        
    
            const copy ={date: localdate, ...post}
    
            return copy
        })
    
        filterList= formatList.sort((a,b) =>b.date.getTime() -  a.date.getTime())
    }
   


    





    





const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
};



    return(
                <div className="mb-4 lg:mb-10">


                    <h3 className="mb-2 border-b-2 border-red-400 text-bold md:text-2xl lg:text-3xl">{props.keywords}</h3>
                    <div className={`grid`}>
                        <Carousel
                            swipeable={true}
                            draggable={false}
                            showDots={false}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={1500}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            // deviceType={this.props.deviceType}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                            >
                                {
                                    filterList.map(post =>(
                                        <BlockPost key={post.id} data={post} small={props.small} borderBottom line={5}/>
                                    ))
                                }
                        </Carousel>
                    </div>
            
                    <div className="my-4 h-28 w-1/1 md:h-52 ">
                        <AdsSlider index={0} location="middlepost"/>
                    </div>
                </div>
    )
}


export default CategoryPostList