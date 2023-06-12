import React, { useState, useRef, useCallback, useEffect } from "react"
import styled, { createGlobalStyle } from 'styled-components'

const StyledApp = styled.div`
display: flex;
.drag-and-drop {
    width: 100px;
    height: 100px;
    cursor: move;
    position: absolute;
    z-index: 1000;
}
.drag {
    z-index: 1001;
}
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
.yellow {
  background-color: yellow;
}
`;

const Draggable = styled.div`
	background-color: gray;
	height: 100px;	
	width: 100px;
`;


type classStatus = {
  isFuyo: boolean
}

const useDragElemetns = () => {
  const [fuyo, setFuyo] = useState<classStatus>({
    isFuyo: false
  })
  const handleDown = (e: React.MouseEvent<EventTarget & HTMLElement>): void => {
    setFuyo({ isFuyo: true })
    console.log(fuyo)
  }
  return [
    handleDown
  ]
}

export const DragDrop2 = () => {
  const [handleDown] = useDragElemetns()
  return (
    <>
      <div className="container">
        <StyledApp>
          <Draggable
            id="red-box"
            className="drag-and-drop red"
            onMouseDown={handleDown}
          />
          <Draggable
            id="blue-box"
            className="drag-and-drop blue"
            onMouseDown={handleDown}
          />
          <Draggable
            id="yellow-box"
            className="drag-and-drop yellow"
            onMouseDown={handleDown}
          />
        </StyledApp>
      </div>
    </>
  )
}