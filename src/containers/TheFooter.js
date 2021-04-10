import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">Hemker bois</a>
        <span className="ml-1">&copy; 2021 Foodine.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
