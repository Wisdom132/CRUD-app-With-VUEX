<template>
  <div class="create-note">
    <form action="">
      <label for="newTitle">Title</label>
      <input type="text" v-model="newTitle">
      <label for="newNote">Note</label>
      <textarea name="" v-model="newNote" id="" cols="30" rows="10"></textarea>
      <button @click="saveNote">Save Note</button>
    </form>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'CreateNote',
  data(){
    return {
      newTitle :'',
      newNote: ''
    }
  },
  computed:{
    ...mapGetters(['notes','lastid']),
    ...mapActions([
      'addNote',
      'deleteNote',
      'updateNote',
      'deleteAllNotes'
    ]),
    },
  methods:{
    saveNote(){

      //can do so validations here before update

      this.$store.dispatch('addNote',{
        id:this.lastid+1,
        title:this.newTitle,
        note:this.newNote
      })
    }
  }

}
</script>
<style scoped>
.create-note {
  text-align: left;
  width: 80%;
  margin: 0 auto;
}
  .create-note input, .create-note textarea, button {
    width: 100%;
    /* display: block; */
    box-sizing: border-box;
    padding: 0.5em;
    margin: 1em 0;
    border: 1px solid #cccccc;
    border-radius: 0.2em;
  }
  .create-note button {
    cursor: pointer;
  }

</style>

