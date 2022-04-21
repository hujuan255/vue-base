//通过vue创建一个app视图
const app = Vue.createApp({
  //对象内部函数简写
  data() {
    //返回一个数据对象
    return {
      showBook: true,
      book: '见识',
      author: '吴军',
      age: 48,
      // 定义坐标x,y的初始值
      x: 0,
      y: 0,
      //books对象
      books: [
        {
          title: '见识',
          author: '吴军',
          imgUrl: '/assets/2.jpg',
          isFav: true
        },
        {
          title: '格局',
          author: '吴军',
          imgUrl: '/assets/4.jpg',
          isFav: false
        },
        {
          title: '异类',
          author: '马尔科姆·格拉德威尔',
          imgUrl: '/assets/1.jpg',
          isFav: true
        },
        {
          title: '引爆点',
          author: '马尔科姆·格拉德威尔',
          imgUrl: '/assets/3.jpg',
          isFav: true
        },
      ]
    }
  },
  methods: {
    // 定义一个带参数的方法
    changeBook(title) {
      this.book = title;
    },
    //显示或隐藏书籍
    toggleShowBook() {
      this.showBook = !this.showBook;
    },
    //鼠标触发事件
    /**
     * 第一个参数默认自动传入一个event对象
     * 如果只传入一个参数并为自定义参数，将获取不到event对象
     * 所以如果需要传入自己的参数则需在第二位，接受方可以用$event获得event对象，
     */
    handelEvent(e, value) {
      console.log(e, e.type)
      if (value) {
        console.log(value)
      }
    },
    handelMousemove(e) {
      //设置鼠标的坐标
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    //点击li改变fav的状态
    changeFav(book) {
      book.isFav = !book.isFav;
    },
  },
  //计算属性的使用
  computed: {
    //过滤喜欢的书籍
    filterBooks() {
      return this.books.filter((book) => book.isFav)
    }
  },
})
//挂载id为app的组件
app.mount('#app');