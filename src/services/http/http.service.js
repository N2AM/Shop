import axios from 'axios'
import { BASEURL } from '../../constants/environment'
export async function getProducts() {
  const response = await axios.get(BASEURL + '/products')
  return response.data
}
export async function getProductsByFilter(filter) {
  const response = await axios.get(BASEURL + '/products', { filter: filter })
  return response.data
}
