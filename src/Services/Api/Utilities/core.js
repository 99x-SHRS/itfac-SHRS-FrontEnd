import apiProvider from './provider'

export class ApiCore {
  constructor(options) {
    if (options.getAll) {
      this.getAll = () => {
        return apiProvider.getAll(options.url)
      }
    }
    if (options.post) {
      this.post = (model) => {
        return apiProvider.post(options.url, model)
      }
    }
    if (options.remove) {
      this.remove = (id) => {
        return apiProvider.remove(options.url, id)
      }
    }
  }
}
