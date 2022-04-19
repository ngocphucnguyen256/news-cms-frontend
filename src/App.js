import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import AOS from 'aos';
import { focusHandling } from 'cruip-js-toolkit';

import Home from './pages/Home';
import Newest from './partials/Newest';
import VideoPage from './pages/VideoPage'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import PageNotFound from './pages/PageNotFound';
import SlugCategory from './partials/SlugCategory';
import PostDetail from './pages/PostDetail';

function App() {

  const location = useLocation();
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/newest">
          <Newest />
        </Route>
        <Route path="/kinh-te">
          <SlugCategory keywords={"Kinh tế"} />
        </Route>
        <Route path="/giai-tri">
          <SlugCategory keywords={"Giải trí"} />
        </Route>
        <Route path="/cong-nghe">
          <SlugCategory keywords={"Công nghệ"} />
        </Route>
        <Route path="/the-thao">
          <SlugCategory keywords={"Thể thao"} />
        </Route>
        <Route path="/vh-xh">
          <SlugCategory keywords={"Văn hóa - xã hội"} />
        </Route>
        <Route path="/thoi-trang">
          <SlugCategory keywords={"Thời trang"} />
        </Route>
        <Route path="/hang-hieu">
          <SlugCategory keywords={"Hàng hiệu"} />
        </Route>
        <Route path="/du-lich">
          <SlugCategory keywords={"Du lịch"} />
        </Route>
        <Route path="/am-thuc">
          <SlugCategory keywords={"Ẩm thực"} />
        </Route>
        <Route path="/song-khoe">
          <SlugCategory keywords={"Sống khỏe"} />
        </Route>
        <Route path="/video">
          <VideoPage />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
        <Route path="/post/:slug/:id">
          <PostDetail />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
