import React from 'react'

interface IContainerProps {
  visible: boolean;
  controller: () => void;
}

const Container: React.FC<IContainerProps> = ({
  visible = false,
  controller = () => {},
}: IContainerProps) => {
  return <div className={`container ${visible ? 'visible' : ''}`} onClick={controller}>Hello World</div>
}

export default Container
