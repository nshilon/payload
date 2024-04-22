import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

export const DefaultBlockImage: React.FC = () => {
  const [patternID] = useState(`pattern${uuid()}`)
  const [imageID] = useState(`image${uuid()}`)

  return (
    <svg fill="none" height="53" viewBox="0 0 82 53" width="82">
      <rect fill={`url(#${patternID})`} height="52.7791" width="80.574" x="0.713013" />
      <defs>
        <pattern height="1" id={`${patternID}`} patternContentUnits="objectBoundingBox" width="1">
          <use transform="scale(0.00387597 0.00591716)" xlinkHref={`#${imageID}`} />
        </pattern>
        <image
          height="169"
          id={imageID}
          width="258"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}