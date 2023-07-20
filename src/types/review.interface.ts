import { IUser } from "./user.interface"

export interface IReview {
    id: number
    user: IUser
    rating: number
    text: string
    createdAt: string
}