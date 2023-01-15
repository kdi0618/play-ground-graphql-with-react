const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

function App() {
  console.log(GITHUB_TOKEN)

  return (
    <div>
      Hello, GraphQL!
    </div>
  );
}

export default App;
