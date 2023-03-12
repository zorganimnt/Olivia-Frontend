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
