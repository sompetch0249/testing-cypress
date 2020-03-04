describe("[Home] test search on homepage", () => {
  before(() => {
    cy.visit("https://www.jobthai.com/jobsearch");
  });
  it("check on metro & brt icon", () => {
    cy.get("#search-location")
      .click()
      .type("bangkok{enter}");
    cy.get("#search-jobtype")
      .click()
      .type("Accounting{enter}")
      .should("contain", "Accounting");
    cy.get("#search-subjobtype")
      .click()
      .type("Accounts{enter}");
    cy.get("#search-keyword")
      .click()
      .type("english{enter}");
    cy.get("#search-submit-btn")
      .should("contain", "Search")
      .click();
  });
  it("check bus icon", () => {
    cy.get("#search-shortcut-bus").click();
    cy.get("#search-location").should("contain", "Bus Routes");
    cy.get("#search-bus-route")
      .click()
      .type("Line 1{enter}");
    cy.get("#search-keyword").clear();
    cy.get("#search-submit-btn")
      .should("contain", "Search")
      .click();
  });
  it("check on industrial icon", () => {
    cy.get("#search-shortcut-industrial").click();
    cy.get("#search-submit-btn")
      .should("contain", "Search")
      .click();
  });
});
