import BlockPost from './BlockPost'
import { useQuery, gql } from '@apollo/client'
import CategoryPostList from './CategoryPostList'

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


const MiddlePostList =()=>{

    const {loading, error, data} =useQuery(POSTS)
    
    
    if(loading) {
        return (
            <></>
        )
    }
    if(error) {
        return (
            <></>
        )
    }

    const temp=[...data.articles]

    
    const formatList =  temp.map(post=>{

        let localdate = new Date(post.created_at);
        const copy ={date: localdate, ...post}
        return copy
    })

    const sortedList= formatList.sort((a,b) =>b.date.getTime() -  a.date.getTime())
    const newPost = sortedList.slice(0,10)
    const ortherPost = sortedList.slice(10)



    return(
        <div className="mt-10 flex border-b-2">

            <div className="mb-10  justify-between items-center border-r-2 pr-2 md:pr-4 md:w-1/3 w-1/1">
            <h3 className="mb-2 border-b-2 border-red-400 text-bold md:text-2xl lg:text-3xl font-bold">Mới nhất</h3>   
            {
                newPost.map(post =>(
                    <BlockPost key={post.id} data={post} small borderBottom headingTop line={5}/>
                ))
                
            }
    
            </div>
            <div className="md:w-2/3 w-1/1 pl-2 md:pl-4">
                <CategoryPostList keywords={"Kinh tế"} data={ortherPost}  small/>
                <CategoryPostList keywords={"Giải trí"} data={ortherPost}  small/>
                <CategoryPostList keywords={"Công nghệ"} data={ortherPost} small/>
                <CategoryPostList keywords={"Thể thao"} data={ortherPost} small/>
                <CategoryPostList keywords={"Văn hóa - xã hội"} data={ortherPost} small/>
                <CategoryPostList keywords={"Thời trang"} data={ortherPost} small/>
                <CategoryPostList keywords={"Hàng hiệu"} data={ortherPost} small/>
                <CategoryPostList keywords={"Du lịch"} data={ortherPost} small/>
                <CategoryPostList keywords={"Ẩm thực"} data={ortherPost} small/>
                <CategoryPostList keywords={"Sống khỏe"} data={ortherPost} small/>

            </div>
        </div>
    )
}


export default MiddlePostList