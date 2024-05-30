/**
 * localStorage模块封装
 */

export default {
  set(key: string, value: any) {
    //localStorage无法直接存储对象,可以利用JSON.stringify与JSON.parse的转换达到目的
    localStorage.setItem(key, JSON.stringify(value))
  },
  get(key: string) {
    const value = localStorage.getItem(key)
    if (!value) return ''
    try {
      return JSON.parse(value)
    } catch {
      return value
    }
  },
  remove(key: string) {
    localStorage.removeItem(key)
  },
  clear() {
    localStorage.clear()
  }
}
