export const useCounterStore = defineStore('counter', () => {
  let count = $ref(0)

  function increment() {
    count++
  }

  function reset() {
    count = 0
  }

  return $$({ count, increment, reset })
})
