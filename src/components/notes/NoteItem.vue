<template>
  <div class="note-item" v-if="!edit">
    <p>{{note.title}}</p>
    <p>{{note.note}}</p>
    <button @click="removeNote(note)">delete</button>
    <button @click="editNote(note)">edit</button>
  </div>
  <div v-else class="note-item">
    <label for="">title:</label>
    <input v-model="note.title" />
    <label for="note">Note</label>
    <textarea v-model="note.note"/>
    <button @click="updateNote()">update</button>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name:'NoteItem',
  props:['note'],
  data(){
    return {
      edit : false,
    }
  },
  computed:{
    ...mapActions(['deleteNote']),
    mapmodel(){
      this.id =this.note.id
    }
  },
  methods:{
    removeNote(Note){
      //dispact the store actions
      this.$store.dispatch('deleteNote',Note);
    },
    editNote(){
      this.edit = true;
    },
    updateNote(){

      //can do so validations here before update
      this.$store.dispatch('updateNote',this.note);
      this.edit = false

    }

  }
}
</script>
<style scoped>
  .note-item {
    background: #999;
    color: red;
    text-align: left;
    width: 50%;
    margin: 1em auto;
    box-sizing: border-box;
    padding: 1em;

  }
  .note-item label {
    display: block;
    margin: 0.5em 0

  }
  .note-item input, .note-item textarea {
    box-sizing: border-box;
    width: 100%;
    padding: 0.5em
  }
</style>


