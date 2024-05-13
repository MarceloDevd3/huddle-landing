import Header from '../components/Header';
import Card from '../components/Card';
import Rodape from '../components/footer';
import './App.css';
import Logo from './assets/img/logo.svg'
import Card1  from './assets/img/illustration-grow-together.svg';
import Card2  from './assets/img/illustration-flowing-conversation.svg';
import Card3  from './assets/img/illustration-your-users.svg';

<div className="App">
     <Header/>
      <main className='Container'>
          <Card CardClass={'Card-Item card1'} 
          CardImg={Card1} 
          titleCard={'Grow Together'}
          TextCard={"Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."} 
           />
          <Card CardClass={'Card-Item card2'} 
          CardImg={Card2} 
          titleCard={'Flowing Conversations'}
          TextCard={"You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."}
           />
          <Card CardClass={'Card-Item card3'} 
          CardImg={Card3} 
          titleCard={'Your Users'} 
          TextCard={"It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."}
          />
          <article className='Mini-Card'>
            <h3>Ready To Build Your Community?</h3>
            <button className='btn pink'>Get Started For Free</button>
          </article>
      </main>
      <Rodape footerLogo={Logo}/>
    </div>