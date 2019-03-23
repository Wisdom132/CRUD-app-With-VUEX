import Vue from 'vue'
import Vuex from 'vuex'
/**
 *attach vuex to Vue
 */
Vue.use(Vuex)


/**
 * create state with sample data
 */
const state = {
  notes: [
    {
      id: 1,
      title: 'This is all about me',
      note: 'The message began somewhere here'
    }
  ]
}

/**
 * created mutations  actions and getters object
 */
const mutations = {
  ADD_NOTE: (state, payload) => {
    state.notes.push(payload)
  },
  DELETE_NOTE: (state, note) => {

    let noteIndex = state.notes.findIndex(n=>n.id === note.id);

    //and delete it from the store
    state.notes.splice(noteIndex,1);
  },
  UPDATE_NOTE: (state,payload) => {
    //get note from store
     let note = state.notes.find((note) => note.id === payload.id)

     //update the properties
     note.note = payload.note
     note.title = payload.title
  }
}

const actions = {
  addNote: (state, payload) => {
    state.commit('ADD_NOTE', payload)
  },
  deleteNote: (state,note) => {
    state.commit('DELETE_NOTE', note)
  },
      //{commit} extract the commit object alone from the state object
  updateNote: ({commit}, payload) => {

    commit('UPDATE_NOTE', payload)
  }
}

const getters = {
  notes: (state) => {
    return state.notes
  },
  //get last id value to be able to generate new value;
  lastid: (state) => {
    let lastid = 1
    state.notes.forEach(element => {
      if(element.id > lastid) {
        lastid = element.id ;
      }
    });
    return lastid;
  }
}

export default
new Vuex.Store({
    state,
    mutations,
    actions,
    getters
  }
)
