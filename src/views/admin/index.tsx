import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Admin: FC<IProps> = () => {
  return <div>Admin</div>
}

export default memo(Admin)
