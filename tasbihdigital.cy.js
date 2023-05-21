
describe('Menyalakan Tasbih Digital', () => {
    
    it('Tasbih digital dapat menyala jika daya baterai cukup', () => {
        cy.visit('Tasbih Digital')
        cy.get(bateraiField).type(value.BateraiDayaCukup)
        cy.get(buttonCounter).click()
        cy.get(layar).should('on')
        cy.get(layar).should('equal', '0')
    });

    it('Tasbih digital tidak dapat menyala jika tidak dipasangkan baterai', () => {
        cy.visit('Tasbih Digital')
        cy.get(buttonCounter).click()
        cy.get(layar).should('off')
    });

    it('Tasbih digital tidak dapat menyala jika daya baterai sudah habis', () => {
        cy.visit('Tasbih Digital')
        cy.get(bateraiField).type(value.BateraiDayaTidakCukup)
        cy.get(buttonCounter).click()
        cy.get(layar).should('off')
    });

    it('Tasbih digital akan mati jika di diamkan selama 10 detik', () => {
        cy.visit('Tasbih Digital')
        cy.get(bateraiField).type(value.BateraiDayaCukup)
        cy.get(buttonCounter).click()
        cy.wait(10)
        cy.get(layar).should('off')
    });
});


describe('Button Counter', () => {
    
    it('Memastikan tombol counter dapat berfungsi', () => {
        cy.visit('Tasbih Digital')
        cy.get(bateraiField).type(value.BateraiDayaCukup)
        cy.get(buttonCounter).click()
        cy.get(layar).should('on')
        cy.get(layar).should('equal', '0')
        cy.get(buttonCounter).click()
        cy.get(layar).should('layar','1')
    });

    it('Memastikan nilai counter tidak bisa minus', () => {
        cy.visit('Tasbih Digital')
        cy.get(bateraiField).type(value.BateraiDayaCukup)
        cy.get(buttonCounter).click()
        cy.get(layar).should('on')
        cy.get(layar).should('equal', '0')
        cy.get(buttonCounter).click()
        cy.get(layar.valueCounter).not('.negative').should('positive')
    });

    it('Memastikan nilai counter tidak bisa lebih dari 6 digit angka', () => {
        cy.visit('Tasbih Digital')
        cy.get(bateraiField).type(value.BateraiDayaCukup)
        cy.get(buttonCounter).click()
        cy.get(layar).should('on')
        cy.get(layar).should('equal', '0')
        cy.get(buttonCounter).click().each(999999)
        cy.get(buttonCounter).click()
        cy.get(layar).should('layar','999999')
    });

});

describe('Button Reset', () => {
    
    it('Memastikan tombol reset dapat berfungsi', () => {
        cy.visit('Tasbih Digital')
        cy.get(bateraiField).type(value.BateraiDayaCukup)
        cy.get(buttonCounter).click()
        cy.get(layar).should('on')
        cy.get(layar).should('equal', '0')
        cy.get(buttonCounter).click()
        cy.get(layar).should('layar','1')
        cy.get(buttonReset).click
        cy.get(layar).should('equal', '0')
    });
});

describe('Button LED', () => {
    
    it('User dapat menyalakan lampu LED', () => {
        cy.visit('Tasbih Digital')
        cy.get(bateraiField).type(value.BateraiDayaCukup)
        cy.get(buttonCounter).click()
        cy.get(layar).should('on')
        cy.get(layar).should('equal', '0')
        cy.get(buttonLED).click()
        cy.get(lampLED).should('be.visible')
    
    });

    it('User dapat mematikan lampu LED', () => {
        cy.visit('Tasbih Digital')
        cy.get(bateraiField).type(value.BateraiDayaCukup)
        cy.get(buttonCounter).click()
        cy.get(layar).should('on')
        cy.get(layar).should('equal', '0')
        cy.get(buttonLED).click()
        cy.get(lampLED).should('be.visible')
        cy.get(buttonLED).click()
        cy.get(lampLED).not('be.visible')
    });
});