import React, { useContext, useReducer } from 'react'
import reducer from '../reducer/modal_reducer'

const initialState = {
  isSidebarOpen: false,
}

const ModalContext = React.createContext()

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => {
    console.log('mmmmmmmmmmmmmm')

    dispatch({ type: 'SIDEBAR_OPEN' })
  }
  const closeSidebar = () => {
    dispatch({ type: 'SIDEBAR_CLOSE' })
  }

  return (
    <ModalContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = () => {
  return useContext(ModalContext)
}
