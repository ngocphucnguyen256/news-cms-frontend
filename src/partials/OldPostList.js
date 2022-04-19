import OldPost from '../partials/OldPost'
import { useQuery, gql } from '@apollo/client'


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


const OlderPostList =()=>{

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

    const temp=[...data.articles]


    
    const formatList =  temp.map(post=>{

        let localdate = new Date(post.created_at);
        const copy ={date: localdate, ...post}
        return copy
    })

const sortedList= formatList.sort((a,b) =>b.date.getTime() -  a.date.getTime())




    return(
        <div className="mt-5 md:mt-10  border-b-2 bg-gray-200 p-2 md:p-4 rounded-md">

            <h3 className="mb-10 border-b-2 border-red-400 text-bold md:text-2xl lg:text-3xl mt-10">Các tin tức cũ hơn</h3>   

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {
                sortedList.map(post =>(
                    <OldPost key={post.id} data={post}  borderBottom headingTop line={5}/>
                ))
                
            }

            </div>

        </div>
    )
}


export default OlderPostList