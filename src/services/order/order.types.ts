
enum EnumOrderStatus {
    PENDING = 'PENDING',
    PAYED = 'PAYED',
    SHIPPED = 'SHIPPED',
    DELIVERED = 'DELIVERED',
}

export type TypeOrderData = {
    status?: EnumOrderStatus
    items: {
        quantity: number
        price: number
        productId: number
    }[]
}