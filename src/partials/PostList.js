import Post from './Post'
import BlockPost from './BlockPost'
import { useQuery, gql } from '@apollo/client'
import Ads from './Ads'

const POSTS =gql`
query GetPosts{
    articles{
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
        slug
    }
}
`


const PostList =()=>{

    const {loading, error, data} =useQuery(POSTS)
    


    
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

    


    return(
        <div className="mt-4 md:mt-10">

        <div className="flex justify-between items-stretch mb-4 ">
               <div className="w-3/4">
                    <Post data={data.articles[0]} pbNone mbNone line={12}/>
                    <div className="flex items-stretch mt-4">
                    {
                        data.articles.slice(1,3).map(post =>(
                            <div  key={post.id} className="w-1/2"><BlockPost key={post.id} data={post}  line={10}/></div>
                        ))
                    }
                   </div>
            
                </div>
                <div  className="w-1/4 h-auto  bg-white md:ml-4">
                    <Ads   index={0}location="headerpost"/>
                </div>
        </div>
  
        </div>
    )
}


export default PostList