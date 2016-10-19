var date = new Date()
var m = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]

module.exports = function dmy(params) {
  var arg = arguments
  switch (arg[0]) {
    case "dmy":
      if(arg[1]=== "m"){
        return date.getDate()+"/"+m[(date.getMonth())]+"/"+(date.getYear()+1900)
      } else {
      return date.getDate()+"/"+(date.getMonth()+1)+"/"+(date.getYear()+1900)
    }
    case "mdy":
      if(arg[1]=== "m"){
      return m[(date.getMonth())]+"/"+date.getDate()+"/"+(date.getYear()+1900)
    } else {
      return (date.getMonth()+1)+"/"+date.getDate()+"/"+(date.getYear()+1900)
    }
    default:
    return date.getDate()+"/"+(date.getMonth()+1)+"/"+(date.getYear()+1900)
  }
}
