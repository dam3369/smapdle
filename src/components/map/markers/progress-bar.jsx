import PropTypes from 'prop-types'

import { ProgressBar, ProgressContent, ProgressBarTens } from'assets/style/progress-bar.style'

const Progress = ({ limit, value }) => {
  const progress = (value / limit * 100)
  const progressTens = Math.floor(progress / 10) * 10
  const progressValue = Math.round(progress - progressTens) * 10

  return (
    <ProgressBar>
      <ProgressContent className={`s-${progressTens }`} />
      {progressValue !== 0 && (<ProgressBarTens><ProgressContent className={`s-${progressValue}`} /></ProgressBarTens>)}
    </ProgressBar>
  )
}

Progress.propTypes = {
  limit: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

export default Progress
