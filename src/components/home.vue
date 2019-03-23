<template>
  <div class="home">
    <h1>Welcome to my note</h1>
    <create-note/>
     <div class="notelist">
       <note-item v-for="note in notes" :key ="note.id" :note="note" />
     </div>
  </div>

</template>

<script>
import CreateNote from '@/components/notes/CreateNote'
import NoteItem from '@/components/notes/NoteItem'
import {mapGetters} from 'vuex'
export default {
  name:'Home',
  data(){
    return {
      // notes:[],
      msg:'hello world'
    }
  },
  components:{
    'create-note':CreateNote,
    'note-item':NoteItem
  },
  computed:{
    ...mapGetters([
      'notes'
    ]),
    
  }

}
</script>
<style scoped>
  .home {
    background: #333;
    color:#ffffff;
  }
</style>

