import User from '#models/user'

export type UserWithPassword = Omit<User, 'password'>
