const CURRENCRY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: 'USD',
    style: 'currency',
  });
  
  export const formatCurrencry = (number) => {
    return CURRENCRY_FORMATTER.format(number);
  };
  
  export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('fr-FR');
  };
  
  export const getCartTotalPrice = (items = []) => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };
  