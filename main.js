const vm = new Vue({
  el:'#app',
  data:{
    books:[
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1,
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1,
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1,
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        count: 1,
      },
    ]
  },
  methods:{
    /*getFinal(price){
      return '￥' + price.toFixed(2)
    }*/

    decrement(index){
      /*return this.books.count--*/
     /* console.log("decrement", index)*/
      return this.books[index].count--
    },
    increment(index){
      // return this.books.count++
      // console.log("increment", index)
      return  this.books[index].count++
    },
    removeHandler(index) {
      return this.books.splice(index, 1)
    }
  },
  filters: {
    showPrice(price){
      return '￥' + price.toFixed(2)
    }
  },
  computed:{
    totalPrice() {
      let totalPrice = 0
      for (let i = 0; i < this.books.length; i++){
        totalPrice += this.books[i].price * this.books[i].count
      }
      return totalPrice
    }
  }

})

const nums = [10, 99, 20, 32, 999];

// let total = nums.filter(function (n) {
//   return n < 100
// }).map(function (n) {
//     return n * 2
// }).reduce(function (preValue,n) {
//     return preValue * n
// },0)

let total = nums.filter(n => n < 100).map(n => n * 2).reduce((preValue, n) => preValue + n)

console.log(total)

// let newNums = nums.filter(function (n) {
//   return n < 100
// })

/*let newNums = [];
for (let n of nums){
  if (n < 100){
    newNums.push(n)
  }*/
// let new2Nums = newNums.map(function (n) {
//     return n * 2
// })
// console.log(newNums)
// console.log(new2Nums)
