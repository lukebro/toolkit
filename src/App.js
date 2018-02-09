import React, { Component } from 'react';
import profileImage from './images/profile_image.jpg';
import profileBanner from './images/profile_banner.jpg';
import Showcase from './components/Showcase/Showcase';
import TwitterProfileCard from './components/TwitterProfileCard/TwitterProfileCard';

class App extends Component {
  render() {
    return (
      <div>
        <Showcase color="#e6ecf0" width="288px">
          <TwitterProfileCard data={{
            user: {
              name: 'Lukasz Brodowski',
              handle: '@lukebro',
              profileImage,
              profileBanner,
              url: '#',
            },
            stats: [
              {key: 'Tweets', value: '29K'},
              {key: 'Following', value: '236'},
              {key: 'Followers', value: '1,020'},
            ]
          }} />
        </Showcase>
      </div>
    );
  }
}

export default App;
