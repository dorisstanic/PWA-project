
    <template>
  <div class="mybooks">
    <form class="prva">
      <input
        v-model="search"
        class="text1"
        type="search"
        placeholder="Search in library"
      />
    </form>
    <div v-if="books.length">
      <div class="whole" v-for="(book, index) in filteredList" :key="book.id">
        <p>
          <label class="row">
            <div class="book">
              <input
                type="text"
                v-if="book === editingBook"
                v-auto-focus
                class="text-input"
                @keyup.enter="endEditing(book)"
                @blur="endEditing(book)"
                v-model="book.title" 
              />
              <div v-bind:class="{ completed: book.completed }">
                <span>
                  <strong v-if="book !== editingBook">{{
                    book.title
                  }}</strong></span
                >
                <div class="italic">
                  {{ book.author }}
                </div>
              </div>
              <div class="i">
                <a
                  v-on:click="completeBook($event, book)"
                  v-bind:id="'book-' + index"
                  v-bind:checked="book.completed"
                >
                  <i class="material-icons">done</i>
                </a>
                <a @click="editBook(book)">
                  <i class="material-icons">edit</i>
                </a>
                <a v-on:click.prevent="deleteBook(book)">
                  <i class="material-icons">delete</i>
                </a>
              </div>
            </div>
          </label>
        </p>
      </div>
    </div>
    <!-- Button trigger modal -->
    <button
      class="button"
      type="is-dark"
      data-toggle="modal"
      data-target="#exampleModalCenter"
    >
      <span>+ </span> Add a book
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
      v-if="modalShow"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close button3" data-dismiss="modal">
              &times;
            </button>
            <h4 class="modal-title" id="myModalLabel">Add a New Book</h4>
          </div>

          <form
            v-on:submit.prevent="submitBook"
            class="modal-body"
            method="post"
          >
            <label for="newTitle" class="label">Book Title </label>
            <br />
            <input id="newTitle" v-model="newTitle" class="text" />
            <br />
            <label for="newAuthor" class="label">Author </label><br />
            <input id="newAuthor" v-model="newAuthor" class="text" />
            <br />

            <div class="modal-footer">
              <button class="button2" type="is-dark" data-dismiss="modal">
                Cancel
              </button>
              <button
                onClick="window.location.reload();"
                class="button2"
                type="is-dark"
                id="addConfirm"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!--ModalEnd-->
  </div>
</template>

<script>
export default {
  name: "MyBooks",
  components: {},

  data() {
    return {
      books: [],
      newTitle: "",
      newAuthor: "",
      modalShow: true,
      editingBook: {},
      search: "",
    };
  },
  watch: {
    books: {
      handler() {
        localStorage.books = JSON.stringify(this.books);
      },
      deep: true,
    },
  },
  mounted() {
    if (localStorage.books) {
      this.books = JSON.parse(localStorage.books);
    }
  },
  methods: {
    submitBook() {
      this.books.push({
        id: this.books.length + 1,
        title: this.newTitle,
        author: this.newAuthor,
        completed: false,
      });
      this.newTitle = " ";
      this.newAuthor = " ";
      this.modalShow = false;
    },
    deleteBook(book) {
      const bookIndex = this.books.indexOf(book);
      this.books.splice(bookIndex, 1);
    },

    editBook(book) {
      this.editingBook = book;
    },

    endEditing(book) {
      this.editingBook = {};
      if (book.title.trim() === "") {
        this.deleteBook(book);
      }
    },
    completeBook(e, book) {
      book.completed = !book.completed;
    },
  },
  computed: {
    filteredList() {
      return this.books.filter((book) => {
        return (
          book.title.toLowerCase().includes(this.search.toLowerCase()) ||
          book.author.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },
  },
};
</script>

<style scoped>
span {
  font-weight: 700;
  padding-right: 10px;
}

.book {
  border: 1px solid #b9bbb6;
  display: block;
  margin: 20px 0px;
  width: 70%;
  padding: 50px;
  box-shadow: 5px 10px 10px #888888;
  border-radius: 5px;
}
.button {
  float: right;
  margin: 20px 0px;
  background-color: #363636;
  color: white;
}

.button2 {
  float: center;
  margin: 20px 0px;
  background-color: #363636;
  color: white;
  padding: 10px;
}
.button3 {
  all: unset;
  font-size: 25px;
  float: right;
  margin-right: 300px;
  color: #363636;
  background-color: transparent;
  padding: 10px;
}

.modal-body {
  width: 40%;
  margin: 0 auto;
}
.text {
  all: unset;
  border: 1px solid #b9bbb6;
  width: 100%;
  padding: 15px;
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: left;
}
.text1 {
  padding: 15px;
  margin: 0 auto;
  margin-bottom: 75px;
}

input {
  all: unset;
  border: 1px solid #b9bbb6;
  width: 100%;
  display: inline-block;
  margin: 0 auto;
}

#exampleModalCenter {
  margin: 0 auto;
  text-align: center;
  background-color: #363636;
  color: white;
  padding-top: 200px;

}

h4 {
  margin: 0 300px;
  background-image: linear-gradient(#ba7575, #363636 );
  color:  white;
  font-size: 50px;
  margin-bottom: 70px;
  border-top: 5px  ridge white;

}

.material-icons {
  color: black;
  display: block;
  padding: 5px 0px;
}
.material-icons:hover {
  color: black;
  transform: scale(1.5);
}
.i {
  float: right;
  text-align: center;
  margin-top: -14%;
  border-left: 3px ridge #ba7575;
  padding: 20px;
}

.i:hover {
  background-image: linear-gradient(to right, #eedcdc, white);
}

.label {
  font-family: "Times New Roman", Times, serif;
  color: white;
  opacity: 70%;
  margin: 0 auto;
  text-align: left;
  float: left;
}

.text-input {
  all: unset;
  border: 0.5px solid #b9bbb6;
  border-radius: 5px;
  width: 50%;
  padding: 10px;
  margin: 0 auto;
  text-align: left;
}

.completed {
  text-decoration: line-through;
  text-decoration-color: #ba7575;
  text-decoration-thickness: 3px;
}

strong {
  font-size: 25px;
}

.italic {
  font-style: italic;
  font-weight: 700;
  padding-right: 10px;
}
</style>