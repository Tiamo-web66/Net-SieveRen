import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Header from "@/components/header";


interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  return (
    <div>
      <Header></Header>
      <div>
        
      </div>
    </div>
  );
}

export default memo(Home)
