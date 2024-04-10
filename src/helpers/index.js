export const priceProperty = (price) =>
    Number(price).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })