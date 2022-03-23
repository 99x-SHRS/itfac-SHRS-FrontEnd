const url = 'tasks'
const plural = 'tasks'
const single = 'task'

const apiHotels = new ApiCore({
  getAll: true,
  getSingle: true,
  post: true,
  put: false,
  patch: false,
  delete: true,
  url: url,
  plural: plural,
  single: single,
})

export default apiHotels
