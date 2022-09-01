import spinner from '../assets/spinner.gif'

function Spinner() {
  return (
    <img 
    src={spinner} alt='Yükleniyor...' 
    style={{width: '100px', margin: 'auto', display: 'block'}} 
    />
  )
}

export default Spinner