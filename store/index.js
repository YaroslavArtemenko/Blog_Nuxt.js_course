import axios from 'axios'
import post from "@/components/blog/Post";

export const state = () => ({
  postsLoaded: []
})

export const mutations = {
  setPosts(state, posts) {
    state.postsLoaded = posts
  },

  addPost(state, post) {
    console.log(post)
    state.postsLoaded.push(post)
  },

  editPost(state, postEdit) {
    const postIndex = state.postsLoaded.findIndex(post => post.id === postEdit.id)
    state.postsLoaded[postIndex] = postEdit
  }
}

export const actions = {
  nuxtServerInit({commit}, contex) {
    return axios.get('https://blog-nuxt-dbf4b-default-rtdb.firebaseio.com/posts.json')
      .then(res => {
        console.log(res)
        const postsArray = []
        for (let key in res.data) {
          postsArray.push({...res.data[key], id: key})
        }
        //Res
        commit('setPosts', postsArray)
      })
      .catch(e => console.log(e))
  },

  addPost({commit}, post) {
    // console.log(post)
    return axios.post('https://blog-nuxt-dbf4b-default-rtdb.firebaseio.com/posts.json', post)
      .then(res => {
        // console.log(res)
        commit('addPost', {...post, id: res.data.name})
      })
      .catch(e => console.log(e))
  },

  editPost({commit}, post) {
    return axios.put(`https://blog-nuxt-dbf4b-default-rtdb.firebaseio.com/posts/${post.id}.json`, post)
      .then(res => {
        commit('editPost', post)
      })
      .catch(e => console.log(e))
  }
}

export const getters = {
  getPostsLoaded(state) {
    return state.postsLoaded
  }
}
