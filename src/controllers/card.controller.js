const cards = [
  { id: 1, type: 'visa', currency: 'EU', username: 'Maira' },
  { id: 2, type: 'amex', currency: 'EU', username: 'Cassie' },
  { id: 3, type: 'crypto', currency: 'BTC', username: 'Maira' },
  { id: 4, type: 'crypto', currency: 'ETH', username: 'Maira' },
];

const addCard = (req, res) => {
  const { user: userName } = req.user;
  res.json(cards.filter((card) => card.username == userName));
};

export { addCard };
