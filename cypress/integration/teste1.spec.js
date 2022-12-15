describe('Testes de funcionalidades', () => {
    beforeEach(() => {
      cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    it('Teste nome', () => {
      cy.get('[id = formNome]').should('be.visible').type('Rodrigo')
    })
    it('Teste sobrenome', () => {
      cy.get('[id=formSobrenome]').type('Rocha')
    })
    it('Teste radio sexo', () => {
      cy.get('[value="M"]').click()
    })
    it('Teste checkbox', () => {
      cy.get('[type=checkbox][id="formComidaCarne"]').click()
    })
    it('Teste formulario', () => {
      cy.get('[name="formEscolaridade"]').select('Superior')
    })
    it('Teste multiplo', () => {
      cy.get('[id=formEsportes]').select(['natacao', 'Corrida'])
    })
    it('Teste Campo de escrita', () => {
      cy.get('[id="elementosForm:sugestoes"]').type('oi')
    })
    it('Teste de Wait', () => {
      cy.get('[id="novoCampo"]').should('not.exist')
      cy.get('[id=buttonDelay]').click()
      cy.get('[id="novoCampo"]').should('not.exist')
      cy.get('[id="novoCampo"]').should('exist')
      cy.get('[id="novoCampo"]').type('Apareceu')
    })
    it.only('Teste do XPATH', () =>{
      cy.xpath('//*[@id="formNome"]').type('oi')
    })
  })
  