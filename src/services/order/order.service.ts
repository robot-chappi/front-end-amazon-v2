import { instance } from "@/api/api.interceptor"
import { IOrder } from "@/types/order.interface"
import { TypeOrderData } from "./order.types"

const ORDERS = 'orders'

export const OrderService = {
    async getAll() {
        return instance<IOrder[]>(
            {
                url: ORDERS,
                method: 'GET'
            }
        )
    },

    async getByUserId() {
        return instance<IOrder[]>({
            url: `${ORDERS}/by-user`,
            method: 'GET'
        })
    },

    async place(data: TypeOrderData) {
        return instance<{confirmation: {confirmation_url: string}}> ({
            url: ORDERS,
            method: 'POST',
            data
        })
    }
}