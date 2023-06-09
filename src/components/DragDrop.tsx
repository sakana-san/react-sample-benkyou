import React, { useState, useRef, useCallback, useEffect } from "react"
import { Box, SimpleGrid } from "@chakra-ui/react"
import styled, { createGlobalStyle } from 'styled-components'

const StyledApp = styled.div`
	display: flex;
	
	.dragging-element-status {
		position: fixed;
		top: 0;
		left: 0;
	}
	
	.element {
		&-1 {
			background-color: red;
		}
		&-2 {
			background-color: blue;
		}
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

const useDragElemetns = () => {

  const [translate, setTranslate] = useState<Point>({x: 0, y: 0})

  const startPoint = useRef<Point>({ x: 0, y: 0 })
  const zenkainoTranslate = useRef<Point>({x: 0, y: 0})
  
  const dragSitaYouso = useRef<EventTarget & HTMLElement | null>(null)

  const handleDown = (e: React.MouseEvent<EventTarget & HTMLElement>): void => {
    dragSitaYouso.current = e.currentTarget
    
    // 現在のtransform: translate()のx, y値を取得す
    const matrix = new DOMMatrix(getComputedStyle(dragSitaYouso.current).transform)
    zenkainoTranslate.current = {
      x: matrix.translateSelf().e,
      y: matrix.translateSelf().f
    }
    console.log(zenkainoTranslate.current)
  }
  const handleMove = (e: MouseEvent): void => {
    const differenceX = e.pageX - startPoint.current.x
    const differenceY = e.pageY - startPoint.current.y
    console.log('differenceX', differenceX)
    console.log('differencey', differenceY)
  }
  useEffect(() => {
    document.addEventListener('mousemove', handleMove)
    return () => {
      document.body.removeEventListener("mousemove", handleMove)
    }
  })
  return [
    handleDown
  ]
}

export const DragDrop = () => {
  const [handleDown] = useDragElemetns()
  return (
    <>
      <StyledApp>
        <div className="container">
          <div className="dragging-element-status">

          </div>
          <div className="draggables">
            <Draggable
              id="element-1"
              className="element-1 draggable"
              onMouseDown={handleDown}
            />
            <Draggable
              id="element-2"
              className="element-2 draggable"
              onMouseDown={handleDown}
            />
          </div>
        </div>
      </StyledApp>
    </>
  )
}