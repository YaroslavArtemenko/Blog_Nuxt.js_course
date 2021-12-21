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
  addPost ({commit}, post) {
    // console.log(post)
    return axios.post('https://blog-nuxt-dbf4b-default-rtdb.firebaseio.com/posts.json', post)
      .then(res => {
        commit('addPost', post)
      })
      .catch(e => console.log(e))
  }
}

export const getters = {

}
