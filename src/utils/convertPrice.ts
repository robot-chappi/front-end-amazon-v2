export const convertPrice = (price: number) => {
    // return price.toLocaleString('en-US', {
    //     style: 'currency',
    //     currency: 'USD'
    // })

    // return price.toLocaleString('ru-RU', {
    //     style: 'currency',
    //     currency: 'RUB'
    // })

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price)
}