const postReducer = (
    state = {posts: [], loading:false, error:false},
    action
)=>{
    switch(action.type){
        case "UPLOAD_START":
            return {...state, loading:true, error: false}
        case "UPLOAD_SUCCESSFUL":
            return {...state, posts: [action.data,...state.posts],loading: false, error: false}
        case "UPLOAD_FAIL":
            return {...state, loading: false, error: true}
        default:
            return state
    }
}


export default postReducer