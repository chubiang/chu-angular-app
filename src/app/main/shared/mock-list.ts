export const MOCK_LIST_COLELEMSTYLE = {
  cell: { width: '120px', display: 'flex', 'justify-content': 'center' },
  content: { 'font-size': '15px', 'font-weight': '500' },
  subContent: { 'font-size': '12px', 'text-align': 'right' },
  header: { width: '120px' }
};

export const MOCK_LIST_COLUMN = [
  { name: 'username', style: MOCK_LIST_COLELEMSTYLE },
  { name: 'email', style: MOCK_LIST_COLELEMSTYLE },
  { name: 'age', style: MOCK_LIST_COLELEMSTYLE },
  { name: 'cash', filter: 'number', style: MOCK_LIST_COLELEMSTYLE },
  { name: 'lastSignIn', displayName: 'last sign in', filter: 'date', style: MOCK_LIST_COLELEMSTYLE }
];

export const MOCK_LIST_DATA = [
  { username: 'cino', email: 'cde@email.com', age: 23, cash: 750000000, lastSignIn: new Date('2019-10-28') },
  { username: 'annie', email: 'abc@email.com', age: 35, cash: 500000000, lastSignIn: new Date('2019-10-12') },
  { username: 'flobar', email: 'fig@email.com', age: 18, cash: 4000000, lastSignIn: new Date('2019-12-13') },
  { username: 'hammer', email: 'hmn@email.com', age: 21, cash: 900000000, lastSignIn: new Date('2019-11-18') },
  { username: 'sophia', email: 'sop@email.com', age: 27, cash: 3000000, lastSignIn: new Date('2019-08-21') },
  { username: 'quartz', email: 'qrz@email.com', age: 29, cash: 10000000, lastSignIn: new Date('2019-09-25') }
];

export const MOCK_TABLE_COLUMN = [
  'username',
  'email',
  'age',
  'cash',
  'lastSignIn'
];


export const MOCK_TABLE_COLUMN_PIPE = [
  { name: 'username' },
  { name: 'email' },
  { name: 'age' },
  { name: 'cash', pipe: { type: 'number' } },
  { name: 'lastSignIn', displayName: 'last sign in', pipe: { type: 'date', format: 'yyyy/MM/dd', local: `en-US` } }
];

export const MOCK_TABLE_COLUMN_FOOTER = [{ name: 'cash', pipe: { type: 'number' } },];
