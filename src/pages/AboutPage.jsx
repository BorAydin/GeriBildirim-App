import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

function AboutPage() {
  return  <Card>
    <div className="about">
      <h1>Hakkında Sayfası</h1>  
      <p>React geri bildirim uygulamasıdır</p>
      <p>Versiyon: 1.0</p>
    
      <p>
        <Link to="/">Ana Sayfa</Link>
      </p>
    </div>
    </Card>

}

export default AboutPage