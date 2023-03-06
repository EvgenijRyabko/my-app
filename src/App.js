import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://avatars.mds.yandex.net/i?id=0c2b38b165964d4924e171b8635906e1e91b7096-7763258-images-thumbs&n=13'></img>
      </header>
      <nav className='nav'>
        <ul>
          <li><a href='#s'>Profile</a></li>
          <li><a href='#s'>Messages</a></li>
          <li><a href='#s'>News</a></li>
        </ul>
      </nav>
      <section className='content'>
        <img src='https://i.ytimg.com/vi/EQDu8Mp0OaU/maxresdefault.jpg'></img>
        Main Content
      </section>
    </div>
  );
}

export default App;
