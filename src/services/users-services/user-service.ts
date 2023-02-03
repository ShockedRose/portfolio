import axios from 'axios'
import { User } from '../../utils/interfaces/user'

const API_URL = ''

export const getUser = async () => {
  const { data } = await axios.get<User[]>(API_URL)
  return data
}
