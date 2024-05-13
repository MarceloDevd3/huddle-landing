import Nav from './Nav';
import img from './img/illustration-mockups.svg'


export default function Header() {
    return (
      <header>
        <Nav/>
        <div className="header-Container">
          <section className='Header-info'>
            <h1 className="header-title">Build The Community Your Fans Will Love</h1>
            <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
  Create connections with your users as you engage in genuine discussion.</p>
          <button className='btn pink'>Get Started For Free</button>
          </section>
          <div className="responsive-img">
            <img src={img} alt="bannerImage"></img>
          </div>
        </div>
      </header>
    );
}