const container = document.querySelector(`#root`);

const App = () => {
  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

const root = ReactDOM.createRoot(container);
root.render(<App />)