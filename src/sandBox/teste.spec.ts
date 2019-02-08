import {} from 'jasmine'
import GooglePage from '../pages/GooglePage';

describe('Inicia Teste', () => {
    it('testa', () => {
        const google = new GooglePage();

        google.get()
    })
})