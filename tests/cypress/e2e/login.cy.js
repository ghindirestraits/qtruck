describe('Login', () => {
  it('deve logar com sucesso', () => {
    const user = {
      name: 'Gabriel',
      instagram: '@ghindirestraits',
      password: 'sultans'
    };
    
    cy.login(user);
    cy.isLogged(user.name);
  });
  
  it('não deve logar com senha inválida', () => {
    const user = {
      instagram: '@manolo',
      password: 'sultans'
    };
    
    cy.login(user);
    cy.modalHasText('Credenciais inválidas, tente novamente!');
  });
  
  it('não deve logar com instagram inexistente', () => {
    const user = {
      name: 'Gabriel',
      instagram: '@ghindirestraits',
      password: 'manolo'
    };
    
    cy.login(user);
    cy.modalHasText('Credenciais inválidas, tente novamente!');
  });
});