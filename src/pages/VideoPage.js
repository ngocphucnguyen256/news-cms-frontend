

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import AdsSlider from '../partials/AdsSlider';
import Video from '../partials/Video';
import TiktokVideo from '../partials/TiktokVideo';



// https://img.youtube.com/vi/nLSwvRjjQA0/default.jpg

const VideoPage =()=>{


    return(
        <div className="mx-2 md:mx-10 mb-10 md:mb-0" id="top">
          <div className="mb-2 mx-4 lg:mx-20">
           <AdsSlider location="menu"/>
          </div>
          <Header />
          <main className="flex-grow">
            <Video/>
            <a className="fixed bottom-10 right-10" href="#top" title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/arrow-icon-clip-art-file-down-arrow-icon-png-balin-icon-arrow-right--32.png" width="50" alt="top" /></a>
            <TiktokVideo/>
          </main>

          <Footer />
    
        </div>
 
    )
}


export default VideoPage