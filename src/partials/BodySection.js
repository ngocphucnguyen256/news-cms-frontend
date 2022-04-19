import PostList from '../partials/PostList';
import MiddlePostList from '../partials/MiddlePostList';
import Video from '../partials/Video';
import AdsSlider from './AdsSlider';

const BodySection =()=>{


return(
    <div className="w-1/1">
        <PostList/> 
        <MiddlePostList/>

        <Video/>


        <div className="my-4 ">
            <AdsSlider className="" index={0}location="footer"/>
        </div>
    </div>
)
}


export default BodySection;