import axios from 'axios'
import { getUser } from './user-service'

describe('User Service', () => {
  it('should execute axios.get when user is called', async () => {
    const userJson = {
      username: 'oscar',
      password: 123,
      mail: 'myemail@domain.com'
    }

    const mockAxiosGet = jest.spyOn(axios, 'get').mockResolvedValue(
      Promise.resolve({
        data: [userJson]
      })
    )

    const users = await getUser()

    expect(mockAxiosGet).toBeCalledTimes(1)
    expect(users).toEqual([userJson])
  })
})
