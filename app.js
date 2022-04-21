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
    }
  },
})
//挂载id为app的组件
app.mount('#app');