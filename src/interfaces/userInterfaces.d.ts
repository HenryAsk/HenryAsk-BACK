import { User } from "../models/Users"

export interface UserWithId extends User {
  _id: string
}

export interface UserMapped {
  _id: string
  first_name: string
  last_name: string
  user_name: string
  email: string
  role: number
  country: string | undefined
  city: string | undefined
  profile_picture: string | undefined
  banner: string | undefined
  avatar: string | undefined
  biography: string | undefined
  github: string
  linkedin: string
  own_henry_coin: number
  give_henry_coin: number
  isBanned: boolean
  createdAt: Date | undefined
  coffee: string | undefined
  userCoin: Array<string>
}