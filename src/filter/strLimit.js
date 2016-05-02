export default function strLimit(str, length){
  return str.substring(0, length) + (length < str.length ? '...' : '')
}
