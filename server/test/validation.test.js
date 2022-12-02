const Constants = require('../utils/constants');
const Validation = require('../utils/validation');

it('Criação de uma tarefa preenchida!', () => {
    const result = Validation.create({
        item: "Tarefa Exemplo 1"
    });
    expect(result).toEqual(undefined);
});

it('Criação de uma tarefa não preenchida!', () => {
    const result = Validation.create({
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Atualização de uma tarefa preenchida!', () => {
    const result = Validation.update({
        item: "Tarefa Exemplo 2"
    });
    expect(result).toEqual(undefined);
});

it('Atualização de uma tarefa não preenchida!', () => {
    const result = Validation.update({
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
