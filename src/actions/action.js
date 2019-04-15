// action也是函数
export function setPageTitle (data) {
    return (dispatch, getState) => {
        dispatch({ type: 'SET_PAGE_TITLE', data: data })
    }
}

export function setInfoList (data) {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch({ type: 'SET_INFO_LIST', data: data })
        })
    }
}

export function setWebInfo (data) {
    return (dispatch, getState) => {
        dispatch({ type: 'SET_WEB_INFO', data: data }) 
    }
}