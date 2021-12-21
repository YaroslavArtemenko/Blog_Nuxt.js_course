import axios from 'axios'

export const state = () => ({
  postsLoaded: []
})

export const mutations = {
  addPost(state, post) {
    console.log(post)
    state.postsLoaded.push(post)
  }
}

export const actions = {
  nuxtServerInit({commit}, contex) {
    return axios.get('https://blog-nuxt-dbf4b-default-rtdb.firebaseio.com/posts.json')
      .then(res => {
        console.log(res)
        // commit('addPost', { ...post, id: res.data.name })
      })
      .catch(e => console.log(e))
  },

  addPost ({commit}, post) {
    // console.log(post)
    return axios.post('https://blog-nuxt-dbf4b-default-rtdb.firebaseio.com/posts.json', post)
      .then(res => {
        // console.log(res)
        commit('addPost', { ...post, id: res.data.name })
      })
      .catch(e => console.log(e))
  }
}

export const getters = {

}
