import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import Feedbackitem from './Feedbackitem'
import FeedbackContext from './context/FeedbackContext'


function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0){
      return <p>No Feedback yet</p>
    }

    return<div className='feedback-List'>
      <AnimatePresence>
    {feedback.map((item) => (
      <motion.div 
        key={item.id}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      
      >
        <Feedbackitem 
        key={item.id}  
        item = {item} 
        />
      </motion.div>
    ))}
    </AnimatePresence>
  </div>

  // return<div className='feedback-List'>
  //   {feedback.map((item) => (
  //     <Feedbackitem 
  //     key={item.id}  
  //     item = {item} 
  //     handleDelete={handleDelete} />
  //   ))}
  // </div>
}


export default FeedbackList
