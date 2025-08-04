// getData(function (a) {
//   getMoreData(a, function (b) {
//     getFinalData(b, function (c) {
//       console.log(c);
//     });
//   });
// });



getData(function (a) {
  getMoreData(a, function(b){
    getFinalData(b, function(c){
      console.log(c);
    })
  })
});

getData(10)