import { TestBed } from '@angular/core/testing';

import { ValidarCadastroService } from './validar-cadastro.service';

describe('ValidarCadastroService', () => {
  let service: ValidarCadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidarCadastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
