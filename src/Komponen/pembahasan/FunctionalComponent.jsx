// With 1 tag
// const functionalComponent = () => <h1>Membuat komponen dengan functional component</h1>

// With multiple tags
const functionalComponent = ({name}) => {
  return (
    <div>
      <h1>Membuat komponen dengan functional component</h1>
      <h2>Hallo {name}, selamat belajar</h2>
      <h3>Ini membuat dengan multiple tags</h3>
    </div>
  )
}

export default functionalComponent;