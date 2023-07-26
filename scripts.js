const container = document.querySelector(`#root`);

const App = () => {

  return (
    <>
      <Shape shape={`square`} />
      <Shape shape={`square`} />
      <Shape shape={`square`} />
      <Shape shape={`circle`} />
      <Shape shape={`circle`} />
      <Shape shape={`circle`} />
    </>
  )
}

const colorPicker = () => {
  return Math.floor(Math.random() * 255);
}

const Shape = ({shape}) => {
  console.log(shape);
  const randomizedColor = `rgb(${colorPicker()}, ${colorPicker()}, ${colorPicker()})`;
  return <section style={{backgroundColor: randomizedColor}} className={shape}></section>
}

const root = ReactDOM.createRoot(container);
root.render(<App />)