describe("My first test", function() {
  it("find the content TYPE", function() {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    cy.url().should("include", "commands/actions");

    cy.get(".action-focus")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
  });
});
