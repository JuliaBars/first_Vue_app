const App = {
    data() {
        return {
            placeholderString: "Введите название заметки",
            title: "Список заметок",
            description: "Максимальная длина текста задачи 65 символов",
            inputValue: "",
            notes: ["Познакомиться со Vue.js", "Изучить глубже"],
            donenotes: [],
        }
    },
    methods: {
        addNewNote() {
            if (/^[а-яА-Яa-zA-Z]{3,}.*/.test(this.inputValue)) {
                this.notes.push(this.inputValue)
                }
            else {
                alert("Заметка должна начинаться с букв")
            }
          this.inputValue = ""
        },
        deleteNote(index) {
            this.notes.splice(index, 1)
        },
        markDone(index) {
            const noteToMove = this.notes[index];
            this.notes.splice(index, 1)
            this.donenotes.push(noteToMove);
        },
    },
    computed: {
        productivity() {
            console.log('productivity')
            if (this.donenotes.length > 0) {
                return Math.round(this.donenotes.length / (this.notes.length + this.donenotes.length) * 100)
            }
            else {
                return "выполните хотя бы 1 задачу"
            }
        }
    },
    watch: {
        inputValue(value) {
            if (value.length > 65) {
                this.inputValue = value.slice(0, 65)
            }
        }
    }
}

Vue.createApp(App).mount('#app')