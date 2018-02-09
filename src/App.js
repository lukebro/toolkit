import React, { Component } from 'react';
import profileImage from './images/profile_image.jpg';
import profileBanner from './images/profile_banner.jpg';
import team1 from './images/team1.png';
import team2 from './images/team2.png';
import Book from './images/Book';
import Showcase from './components/Showcase/Showcase';
import TwitterProfileCard from './components/TwitterProfileCard/TwitterProfileCard';
import StripeInfoCard from './components/StripeInfoCard/StripeInfoCard';
import Gamestrip from './components/Gamestrip/Gamestrip';

class App extends Component {
  render() {
    return (
      <div>
        <Showcase>
          <div className="container">
            <h1 className="title">Portfolio toolkit example.</h1>
            <h2 className="subtitle">Collection of recreated components from popular websites by <a href="https://github.com/lukebro">@lukebro</a>.</h2>
            <a href="https://github.com/lukebro/toolkit/tree/master/src/components" target="_blank" className="button">View the components on GitHub</a>
          </div>
        </Showcase>
        <Showcase color="#e6ecf0" width="288px">
          <TwitterProfileCard data={{
            user: {
              name: 'Lukasz Brodowski',
              handle: '@lukebro',
              profileImage,
              profileBanner,
              url: 'https://twitter.com/lukebro',
            },
            stats: [
              {key: 'Tweets', value: '29K', url: 'https://twitter.com/lukebro'},
              {key: 'Following', value: '236', url: 'https://twitter.com/lukebro/following'},
              {key: 'Followers', value: '1,020', url: 'https://twitter.com/lukebro/followers'},
            ]
          }} />
        </Showcase>
        <Showcase color="#f6f9fc" width="545px">
          <StripeInfoCard title="Explore the docs" icon={<Book />}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec tortor at justo tempus egestas non sit amet diam.
          </StripeInfoCard>
        </Showcase>
        <Showcase color="#edeef0">
          <Gamestrip
          home={{
            name: 'Detroit Pistons',
            record: '27-26, 18-10 Home',
            logo: team2,
            color: '#006bb6',
          }}
          away={{
            name: 'LA Clippers',
            record: '27-25, 11-13 Away',
            logo: team1,
            color: '#f1f2f3',
          }}
          status={{
            'top': 'ESPN',
            'time': '7:00 PM ET',
            'bottom': 'DET -3.0'
          }}
          />
        </Showcase>
      </div>
    );
  }
}

export default App;
