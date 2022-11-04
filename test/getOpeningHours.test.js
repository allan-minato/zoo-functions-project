const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Caso ambos os parâmetros não recebam valores retorna horário.', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Caso receba como parâmetros monday e 09:00-AM retorna The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });
  it('Caso receba como parâmetros Tuesday e 09:00-AM retorna The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });
  it('Caso receba como parâmetros Wednesday e 09:00-PM retorna The zoo is closed', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });
  it('Caso receba como parâmetro Thursday e 10:00-AM retorna The zoo is open', () => {
    expect(getOpeningHours('Thursday', '10:00-AM')).toEqual('The zoo is open');
  });
});
it('Verificar se erros são retornados', () => {
  try {
    getOpeningHours('algo', '08:54-AM');
  } catch (error) {
    expect(error.message).toEqual('The day must be valid. Example: Monday');
  }
  try {
    getOpeningHours('Tuesday', '12:00-00');
  } catch (error) {
    expect(error.message).toBe('The abbreviation must be \'AM\' or \'PM\'');
  }
  try {
    getOpeningHours('Friday', '16:00-PM');
  } catch (error) {
    expect(error.message).toBe('The hour must be between 0 and 12');
  }
  try {
    getOpeningHours('Saturday', '12:60-AM');
  } catch (error) {
    expect(error.message).toBe('The minutes must be between 0 and 59');
  }
  expect(() => {
    getOpeningHours('Wednesday', 'AA:AA-PM');
  }).toThrow(Error);
});
