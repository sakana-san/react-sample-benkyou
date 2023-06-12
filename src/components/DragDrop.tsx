import React, { useState, useRef, useCallback, useEffect, useLayoutEffect } from "react"
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
type DraggingDirection = {
  horizontal: 'left' | 'right' | null
  vertical: 'up' | 'down' | null
}
type MouseStatus = {
  isDown: boolean;
  isMove: boolean;
  isUp: boolean;
}
type DraggingElementStatus = {
  translate: Point
  mouseStatus: MouseStatus
  draggingElement: EventTarget & Element | null
  draggingDirection: DraggingDirection

}
type Handler = (e: React.MouseEvent<EventTarget & HTMLElement>) => void

const useDragElemetns = (isStyleTransform: boolean = true): [
  DraggingElementStatus,
  Handler
] => {

  // ドラッグしている要素の移動量
  const [translate, setTranslate] = useState<Point>({x: 0, y: 0})

  // 現在のマウスイベントの状態
  const [mouseStatus, setMouseStatus] = useState<MouseStatus>({
    isDown: false,
    isMove: false,
    isUp: false
  });

  const startPoint = useRef<Point>({ x: 0, y: 0 })

  // 前回のtranslate
  const zenkainoTranslate = useRef<Point>({x: 0, y: 0})

  // 前回のマウスの移動距離
  const prevDifference = useRef<Point>({ x: 0, y: 0 });
  
  // ドラッグしている要素
  const draggingElement = useRef<EventTarget & HTMLElement | null>(null)

  // ドラッグしている方向
  const draggingDirection = useRef<DraggingDirection>({
    horizontal: null,
    vertical: null
  })
  // .draggableが追加されていない要素がドラッグされないようにする
  const isDraggable = (): boolean => draggingElement.current ? draggingElement.current.classList.contains('draggable') : false;




  const handleDown = (e: React.MouseEvent<EventTarget & HTMLElement>): void => {
    draggingElement.current = e.currentTarget

    //ドラッグした要素に.draggableクラスが指定されていなければ終了
    if (!isDraggable()) return;

    // 現在のtransform: translate()のx, y値を取得す
    const matrix = new DOMMatrix(getComputedStyle(draggingElement.current).transform)
    zenkainoTranslate.current = {
      x: matrix.translateSelf().e,
      y: matrix.translateSelf().f
    }
    const draggableElements = document.getElementsByClassName("draggable") as HTMLCollectionOf<HTMLElement>
    for (let i = 0; i < draggableElements.length; i++) {
      draggableElements[i].style.zIndex = `1000`;
    }
    draggingElement.current.style.position = 'relative';
    draggingElement.current.style.zIndex = `1001`;

    // 押し込んだときのページの左上(0, 0)からのカーソルの座標
    const x = e.pageX
    const y = e.pageY
    startPoint.current = {x, y}

    // 押し込んでいることを示すisDownをtrueに切り替える
    setMouseStatus(prevMouseStatus => ({
      ...prevMouseStatus,
      isUp: false,
      isDown: true
    }))
  }



  const handleMove = (e: MouseEvent): void => {
    // 押し込んでいなければ終了
    if (!draggingElement.current) return;

    //ドラッグした要素に.draggableクラスが指定されていなければ終了
    if (!isDraggable()) return;

    // テキストをdraggableにした場合に、ドラッグしたときにテキストが選択されないようにする
    e.preventDefault();
    const differenceX = e.pageX - startPoint.current.x
    const differenceY = e.pageY - startPoint.current.y

    if (differenceX > prevDifference.current.x) {
      draggingDirection.current.horizontal = "right"
    } else if (differenceX < prevDifference.current.x) {
      draggingDirection.current.horizontal = "left"
    }

    if (differenceY > prevDifference.current.y) {
      draggingDirection.current.vertical = "down"
    } else if (differenceY < prevDifference.current.y) {
      draggingDirection.current.vertical = "up";
    }

    console.log('directionX: ', draggingDirection.current.horizontal)
    console.log('directionY: ', draggingDirection.current.vertical)
    setTranslate({
      x: zenkainoTranslate.current.x + differenceX,
      y: zenkainoTranslate.current.y + differenceY
    })

    // 前回までに進んだ距離として保存しておく
    prevDifference.current = {
      x: differenceX,
      y: differenceY
    }

    setMouseStatus(pM => ({
      ...pM,
      isMove: true
    }))

  }
  const handleUp = (e: MouseEvent): void => {
    // 押し込んでいなければ終了
    if (!draggingElement.current) return;

    if (!isDraggable()) return;

    // ドロップ＝押し込みをやめたということで空にする
    draggingElement.current = null;

    // 押し込みをやめたことを示すisUpをtrueに切り替え、isDownとisMoveをfalseに戻す
    setMouseStatus(prevMouseStatus => ({
      ...prevMouseStatus,
      isDown: false,
      isMove: false,
      isUp: true
    }))
  }
  useLayoutEffect(() => {
    if (!isStyleTransform) return
    // nullの判定（TypeScript）
    if (!draggingElement.current) return
    draggingElement.current.style.transform = `translate3d(${translate.x}px, ${translate.y}px, 0)`
  })
  useEffect(() => {
    document.addEventListener('mousemove', handleMove)
    document.body.addEventListener("mouseup", handleUp)
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
      draggingElement: draggingElement.current,
      draggingDirection: draggingDirection.current
    },
    handleDown
  ]
}

export const DragDrop = () => {
  const [draggingElementStatus, handleDown] = useDragElemetns()
  return (
    <>
      <StyledApp>
        <div className="container">
          {/* <div className="dragging-element-status">
            <div className="dragging-element">{`draggingElement: ${draggingElementStatus.draggingElement && draggingElementStatus.draggingElement.id}`}</div>
            <div className="translate draggable" onMouseDown={handleDown}>{`x: ${draggingElementStatus.translate.x}, y: ${draggingElementStatus.translate.y}`}</div>
            <div className="dragging-direction">
              {`horizontal: ${draggingElementStatus.draggingDirection.horizontal}, vertical: ${draggingElementStatus.draggingDirection.vertical}`}
            </div>
            <div className="mouse-status">
              {
                `isDown: ${draggingElementStatus.mouseStatus.isDown}, isMove: ${draggingElementStatus.mouseStatus.isMove}, isUp: ${draggingElementStatus.mouseStatus.isUp}`
              }
            </div>
          </div> */}
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