import { InMemoryDbService } from "angular-in-memory-web-api";
import { Category } from "./pages/categories/shared/category.model"

export class InMemoryDatabase implements InMemoryDbService{
    createDb(){
        const categories: Category[] = [
            {id: 1, name: 'Moradia', descriptin: 'Pagamentos de Contas de Casa'},
            {id: 2, name: 'Saúde', descriptin: 'Plano de Saúde e Remédios'},
            {id: 3, name: 'Lazer', descriptin: 'cinema, parques, praia, etc'},
            {id: 4, name: 'Salário', descriptin: 'Recebimento de Salário'},
            {id: 5, name: 'Freelas', descriptin: 'Trabalhos como Freelancer'}
        ];

        return { categories }
    }
}