import { instance } from "@/api/api.interceptor"
import { IFullUser, IUser } from "@/types/user.interface"
import { TypeUserData, USERS } from "./user.types"

export const UserService = {
    async getProfile() {
        return instance<IFullUser>(
            {
                url: `${USERS}/profile`,
                method: 'GET'
            }
        )
    },

    async updateProfile(data: TypeUserData) {
        return instance<IUser>(
            {
                url: `${USERS}/profile`,
                method: 'PUT',
                data
            }
        )
    },

    async toggleFavorite(productId: string | number) {
        return instance<IUser>(
            {
                url: `${USERS}/profile/favorites/${productId}`,
                method: 'PATCH'
            }
        )
    }
}