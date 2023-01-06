

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
    it('Teste do XPATH', () =>{
      cy.xpath('//*[@id="formNome"]').type('ola')
      
      cy.xpath('//*[@id="tabelaUsuarios"]/tbody/tr[1]/td[6]/input').type('ola')

    })


    it('Teste com find', () => {
      cy.get('#buttonList').click()
      cy.get('#lista li')
        .find('span')
        .should('contain','Item 1')
      cy.get('#buttonList').click()
      cy.get('#lista li')
        .find('span')
        .should('contain','Item 2')
    })
    it('Teste com find', () => {
      cy.get('#buttonListDOM').click()
      cy.get('#lista li')
        .find('span')
        .should('contain','Item 1')
      cy.get('#buttonList').click()
      cy.get('#lista li')
        .find('span')
        .should('contain','Item 2')
    //Sempre sair do escopo local e começar toda a busca novamente"
      })

    it('Teste de TimeOut', () => {
      cy.get('#buttonDelay').click()
      cy.get('#novoCampo',{ timeout: 1000 }).should('not.exist')
      })

    it('Teste de retry com for', () =>{
      for (let i = 1; i < 4; i++) {
        cy.get('[id="buttonCount"]').click();
      }
      cy.get('[id=buttonCount]').should('have.value','1111')
      })



      let endereco = '//input[@name = "formNome"]'
      let texto = 'Caraca deu muito bom{enter}'
    it.only('Teste de xpath', () =>{
      cy.escrever(endereco,texto)
    })
      
    
})
  