export default function beautyDate(date) {
  var post = new Date(date);
  var date= new Date();
  var time =date.getTime() - post.getTime();
  if(time < 60 * 1000 ){
      return "刚刚发布";
  }
  if (date.getDate() === post.getDate() && time < 86400000) {
      if (time < 60 * 60 * 1000) {
          return Math.ceil(time / (60 * 1000)) + "分钟前";
      } else {
          return Math.ceil(time / (60 * 60 * 1000))+ "小时前";
      }
  }else{
      return (post.getMonth()+1)+"月"+post.getDate()+"日提问";
  }
  return time;
}
