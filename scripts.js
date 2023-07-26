const container = document.querySelector(`#root`);

const App = () => {

  return (
    <>
      {Array.from({length: 6}, (_, i) => {
        return (<Shape
                shape={`shape ${i % 2 ? 'circle': ''}`} 
                key={i}
              />)
      })}
    </>
  )
}

const Shape = ({shape}) => {
  
  const colorPicker = () => Math.floor(Math.random() * 255);
  const randomColors = () => `rgb(${colorPicker()}, ${colorPicker()}, ${colorPicker()})`;

  const [color, setColor] = React.useState(randomColors());

  React.useEffect(() => {
    setTimeout(() => {
      setColor(randomColors());
      console.log(`setTimeout`)
    }, '1000')
  },[color])

  return <section style={{backgroundColor: color}} className={shape}></section>

}

const root = ReactDOM.createRoot(container);
root.render(<App />)