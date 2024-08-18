import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Details: FC<IProps> = () => {
  return <div>Details</div>
}

export default memo(Details)
