describe("My first test", () => {
  it("skip login", () => {
    cy.visit("https://app.dev.getsneak.com/");
    cy.contains("Skip").click();
  });

  it("type on search", () => {
    cy.get(".react-autosuggest__input")
      .clear()
      .type("Japan")
      .should("have.length", "1");
  });

  it("select on city", () => {
    cy.get(".react-autosuggest__suggestions-list")
      .contains("Tokyo")
      .click();
  });

  it("select on categories 1", () => {
    cy.get(".sc-1tfvpi-2")
      .contains("Shopping")
      .click();
  });

  it("select on categories 2", () => {
    cy.get(".sc-1tfvpi-2")
      .contains("Landmark")
      .click();
  });

  it("Select a photo as aliasing", () => {
    cy.get(".vxmabg-1").find("div");
  });

  it("Select a photo", () => {
    const random = Math.floor(Math.random() * 10 + 2);
    cy.get(".vxmabg-3")
      .eq(random)
      .click();
    cy.get(".vxmabg-3")
      .eq(13)
      .click();
  });

  it("Select a photo 2", () => {
    cy.get(".vxmabg-3")
      .eq(11)
      .click();
  });

  it("check itinerary cart", () => {
    cy.get(".lbmicu-4")
      .contains("View Your Trip")
      .click();
  });
});
