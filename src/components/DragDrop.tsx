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

const handleDown = () => {
  return(
    <>
    </>
  )
}

export const DragDrop = () => {

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