import axios from 'axios'

export const state = () => ({

})

export const mutations = {

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
