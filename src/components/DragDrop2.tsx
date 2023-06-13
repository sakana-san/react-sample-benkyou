import React, { useState, useRef, useCallback, useEffect, useLayoutEffect } from "react"
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
  translate: Point
  mouseStatus: MouseStatus
  draggingElement: EventTarget & Element | null
}
type Handler = (e: React.MouseEvent<EventTarget & HTMLElement>) => void

const useDragElemetns = (): [DraggingEl, Handler] => {
  // 現在のマウスイベントの状態
  const [mouseStatus, setMouseStatus] = useState<MouseStatus>({
    isDown: false,
    isMove: false,
    isUp: false
  })
  // ドラッグしている要素の移動量
  const [translate, setTranslate] = useState<Point>({x: 0, y: 0})

  const startPoint = useRef<Point>({ x: 0, y: 0 })
  
   // 前回のtranslate
  const zenkainoTranslate = useRef<Point>({ x: 0, y: 0 })

  // 前回のマウスの移動距離
  const prevDifference = useRef<Point>({ x: 0, y: 0 });
  
  // ドラッグしている要素
  const draggingElement = useRef<EventTarget & HTMLElement | null>(null)






  const handleDown = (e: React.MouseEvent<EventTarget & HTMLElement>): void => {
    draggingElement.current = e.currentTarget

    // 現在のtransform: translate()のx, y値を取得
    const matrix = new DOMMatrix(getComputedStyle(draggingElement.current).transform)
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





  const handleMove = (e: MouseEvent): void => {
    e.preventDefault()
    const differenceX = e.pageX - startPoint.current.x
    const differenceY = e.pageY - startPoint.current.y


    setTranslate({
      x: zenkainoTranslate.current.x + differenceX,
      y: zenkainoTranslate.current.y + differenceY
    })
  }

  const handleUp = (): void => {
    


    // ドロップ＝押し込みをやめたということで空にする
    draggingElement.current = null;
    // 押し込み時、isUpをtrueに切り替え、isDownをfalse
    setMouseStatus(prevMouseStatus => ({
      ...prevMouseStatus,
      isUp: true,
      isDown: false
    }))
  }



  useLayoutEffect(() => {
    if (!draggingElement.current) return
    draggingElement.current.style.transform = `translate3d(${translate.x}px, ${translate.y}px, 0)`
  })
  useEffect(() => {
    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseup', handleUp)
    document.body.addEventListener("mouseleave", handleUp)
    return () => {
      document.body.removeEventListener("mousemove", handleMove)
      document.body.removeEventListener("mouseup", handleUp)
      document.body.removeEventListener("mouseleave", handleUp)
    }
  })
  return [
    {
      translate,
      mouseStatus,
      draggingElement: draggingElement.current
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