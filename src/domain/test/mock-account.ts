import { Authentication } from '@/domain/usecases/account/authentication'
import { AddAccount } from '../usecases/account/add-account'

export const mockAddAccountParams = (): AddAccount.Params => ({
  name: 'any_name',
  email: 'any_email@mail.com',
  password: 'any_password'
})

export const mockAuthenticationParams = (): Authentication.Params => ({
  email: 'any_email@mail.com',
  password: 'any_password'
})

export const mockAuthenticationModel = (): Authentication.Result => ({
  accessToken: 'any_token',
  name: 'any_name'
})
