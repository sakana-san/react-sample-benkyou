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
.pink {
  background-color: pink;
}
`;

const Draggable = styled.div`
	background-color: gray;
	height: 100px;	
	width: 100px;
`;

type Point = {
  x: number,
  y: number
}
type MouseStatus = {
  isDown: boolean
  isMove: boolean
  isUp: boolean
}
type DraggingEl = {
  mouseStatus: MouseStatus
}
type Handler = (e: React.MouseEvent<EventTarget & HTMLElement>) => void

const useDragElemetns = (): [DraggingEl, Handler] => {
  const [mouseStatus, setMouseStatus] = useState<MouseStatus>({
    isDown: false,
    isMove: false,
    isUp: false
  })

  const startPoint = useRef<Point>({ x: 0, y: 0 })
  const zenkainoTranslate = useRef<Point>({ x: 0, y: 0 })
  const draggingElement = useRef<EventTarget & HTMLElement | null>(null)



  const handleDown = (e: React.MouseEvent<EventTarget & HTMLElement>): void => {
    draggingElement.current = e.currentTarget
    // 現在のtransform: translate()のx, y値を取得
    const matrix = new DOMMatrix(getComputedStyle(draggingElement.current).transform)
    console.log(matrix)
    zenkainoTranslate.current = {
      x: matrix.translateSelf().e,
      y: matrix.translateSelf().f,
    }

    const draggableEl = document.getElementsByClassName('draggables') as HTMLCollectionOf<HTMLElement>
    for (let i = 0; i < draggableEl.length; i++) {
      draggableEl[i].style.zIndex = '1000'
    }
    draggingElement.current.style.position = 'realative'
    draggingElement.current.style.zIndex = `1001`

    // 押し込んだときのページの左上(0, 0)からのカーソルの座標
    const x = e.pageX
    const y = e.pageY
    startPoint.current = {x, y}

    // 押し込み時、isDownをtrueに切り替える
    setMouseStatus(prevMouseStatus => ({
      ...prevMouseStatus,
      isUp: false,
      isDown: true
    }))
  }
  return [
    {
      mouseStatus,
    },
    handleDown
  ]
}

export const DragDrop2 = () => {
  const [DraggingEl, handleDown] = useDragElemetns()
  return (
    <>
      <StyledApp>
        <div className="container">
          <div className="draggables">
            <Draggable
              id="red-box"
              className={DraggingEl.mouseStatus.isDown ? 'drag-and-drop red drag' : 'drag-and-drop red'}
              onMouseDown={handleDown}
            />
            <Draggable
              id="blue-box"
              className={DraggingEl.mouseStatus.isDown ? 'drag-and-drop blue drag' : 'drag-and-drop blue'}
              onMouseDown={handleDown}
            />
            <Draggable
              id="yellow-box"
              className={DraggingEl.mouseStatus.isDown ? 'drag-and-drop yellow drag' : 'drag-and-drop yellow'}
              onMouseDown={handleDown}
            />
          </div>
        </div>
      </StyledApp>
    </>
  )
}