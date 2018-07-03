"use strict";
class InMemoryDataService {
    createDb() {
        let contatos = [
            { id: 1, nome: 'Fulano de Tal', email: 'fulano@gmail.com', telefone: '(00) 0000-0000' },
            { id: 2, nome: 'Ciclano', email: 'ciclano@gmail.com', telefone: '(00) 0000-0000' },
            { id: 3, nome: 'Seu Madruga', email: 'madruga@gmail.com', telefone: '(00) 0000-0000' },
            { id: 4, nome: 'Bob Esponja', email: 'bob@gmail.com', telefone: '(00) 0000-0000' },
        ];
        let carros = [
            { id: 1, descricao: 'Camaro' },
            { id: 2, descricao: 'Mustang' }
        ];
        return {
            'contatos': contatos,
            'carros': carros
        };
    }
}
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map