const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Esperado que count retorne um número inteiro', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Retorna undefined caso não receba parâmetro', () => {
    expect(handlerElephants(undefined)).toEqual(undefined);
  });
  it('Retorna um aviso caso o parâmetro não seja uma string', () => {
    expect(handlerElephants(!'string')).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Retorna o valor Null caso a string sejá invalida', () => {
    expect(handlerElephants('stringInvalida')).toBeNull();
  });
  it('Retorna o valor inteiro 4 caso o parâmetro seja count.', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Retorna um array com nomes caso parâmetro seja name.', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Retorna a média de idade ao receber o valor averageAge.', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Retorna nome, sexo e idade ao receber como parâmetro a string residents.', () => {
    expect(handlerElephants('residents')).toEqual([
      { name: 'Ilana', sex: 'female', age: 11 },
      { name: 'Orval', sex: 'male', age: 15 },
      { name: 'Bea', sex: 'female', age: 12 },
      { name: 'Jefferson', sex: 'male', age: 4 },
    ]);
  });
});
