const container = document.querySelector(`#root`);

const App = () => {

  return (
    <>
      {Array.from({length: 6}, (_, i) => {
        return <Shape shape={i % 2 ? 'square' : 'circle'} />
      })}
    </>
  )
}

const Shape = ({shape}) => {
  const colorPicker = () => Math.floor(Math.random() * 255);
  const randomizedColor = `rgb(${colorPicker()}, ${colorPicker()}, ${colorPicker()})`;
  return <section style={{backgroundColor: randomizedColor}} className={shape}></section>
}

const root = ReactDOM.createRoot(container);
root.render(<App />)