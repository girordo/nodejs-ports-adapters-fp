import { OutsideRegister, register } from './register'
import * as TE from 'fp-ts/TaskEither'
import { pipe } from 'fp-ts/function'
import { CreateUser } from '@/core/types/user'

const registerOk: OutsideRegister<string> = async (data) => {
  return `User ${data.username} created`
}

const data: CreateUser = {
  username: 'test',
  email: 'test@test.com',
  password: 'test',
}

it('should register user successfully', async () => {
  return pipe(
    data,
    register(registerOk),
    TE.map((result) => expect(result).toBe(`User ${data.username} created`)),
  )()
})
