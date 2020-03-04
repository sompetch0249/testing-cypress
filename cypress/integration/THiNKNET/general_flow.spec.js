describe("[Home] general flow test", () => {
  before(() => {
    cy.visit("https://www.jobthai.com/jobsearch");
  });
  it("click on keyword", () => {
    cy.get("#tagkeyword-bangkok-area")
      .should("contain", "Bangkok Area")
      .click({ force: true });
  });
  it("click on any of the job list", () => {
    const random = Math.floor(Math.random() * 10 + 2);
    const itemId = `#job-card-item-${random}`;
    cy.get(itemId).click();
  });
});
