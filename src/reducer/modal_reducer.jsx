const modal_reducer = (state, action) => {
  if (action.type === 'SIDEBAR_OPEN') {
    return { ...state, isSidebarOpen: true }
  }
  if (action.type === 'SIDEBAR_CLOSE') {
    return { ...state, isSidebarOpen: false }
  }

  // return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default modal_reducer
