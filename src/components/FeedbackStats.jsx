import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)

  //  Ortalama Puanı Hesaplama
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length

  average = average.toFixed(1).replace(/[.,]0$/, '')
  
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Yorum</h4>
      <h4> Ortalama Puan: {isNaN(average) ? 0 : average } </h4>
    </div>
  )
}

export default FeedbackStats