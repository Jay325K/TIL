import './App.css';

function Header(props) {
  console.log(props.title);
  return (
    <header>
      <h1><a href="" onClick={(event) => {
        event.preventDefault();//기본 동작 방지
        props.onChangeMode();// 부모 컴포넌트로부터 전달된 함수 호출
      }}>{props.title}</a></h1>
    </header>
  );
}
function Nav(props) {
  const lis = [

  ];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/' + t.id} onClick={(event)=>{
        event.preventDefault();// 기본 동작 방지
        props.onChangeMode(event.target.id);// 클릭된 요소의 ID를 부모 컴포넌트로 전달
      }}>{t.title}</a>
      
    </li>)
  }
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  );
}
function Article(props) {
  return (
    <article>
      <h2>{props.title} </h2>
      {props.body}
    </article>
  );
}

function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'js', body: 'js is ...' },
  ];
  return (
    <div>
      <Header title="Web" onChangeMode={() => {
        alert('Header is clicked');
      }}></Header>

      <Nav topics={topics} onChangeMode={(id) => {
        alert(id);
      }}></Nav>


      <Article title="Welcome" body="Hello, Web!!!"></Article>

    </div>
  )
};

export default App;
