// const postsReducer = (state = { posts:[], loading:false }, action) => {
//     switch(action.type) {
//         case 'LOADING_POSTS':
//             return {
//                 ...state, posts: [...state.posts], loading: true
//             }
//         case 'ADD_POSTS':
//             return {
//                 ...state, posts: action.posts, loading: false
//             }
//         default:
//             return state;
//     }
// }

// export default postsReducer;

import { POST_POSTS_PENDING, POST_POSTS_SUCCESS, POST_POSTS_FAILURE, GET_POSTS_PENDING, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from "../actions/postActions";
const initialState = {
  loading: false,
  posts: [],
}
const postsReducer = (state = initialState, { type, payload }) => {
    
    switch(type) {
      case GET_POSTS_PENDING: {
        return {
          ...state,
          loading: true,
          posts: [...state.posts],
        }
      }
      case GET_POSTS_SUCCESS: {
        return {
          ...state,
          loading: false,
          posts: [...payload],
        }
      }
      case GET_POSTS_FAILURE: {
        return {
          ...state,
          loading: false,
        }
      }
      // case POST_POSTS_PENDING: {
      //   return {
      //     ...state,
      //   }
      // }
      case POST_POSTS_SUCCESS: {
        return {
          ...state,
          posts: [ ...state.posts, payload ],
        }
      }
      // case POST_POSTS_FAILURE: {
      //   return {
      //     ...state,
      //   }
      // }
      default:
        return state;
    }
}
export default postsReducer;