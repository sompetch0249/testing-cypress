describe("[Home] Searc from home page", () => {
  before(() => {
    cy.visit("http://app.dev.getsneak.com");
    cy.contains("Skip").click();
  });
  //   it("type on search", () => {
  //     cy.get(".react-autosuggest__input")
  //       .clear()
  //       .type("Japan")
  //       .should("have.length", "1");
  //     cy.contains("Tokyo").click();
  //   });

  it("pick on location", () => {
    const random = Math.floor(Math.random() * 12 + 2);

    cy.get(".vxmabg-1").find("div");
    cy.wait(3000)
      .get(".vxmabg-3")
      .eq(random)
      .click({ force: true });

    cy.wait(3000)
      .get(".vxmabg-3")
      .find("svg")
      .eq(2)
      .click({ force: true });
    cy.wait(3000)
      .get(".vxmabg-3")
      .find("svg")
      .eq(3)
      .click({ force: true });
    cy.get(".lbmicu-4").click({ force: true });
  });

  it("check itinerary button on [Home Page]", () => {
    cy.get(".sc-114vv3s-1")
      .eq(0)
      .click({ force: true });
    cy.get(".sc-114vv3s-1")
      .eq(0)
      .click({ force: true });
  });
  it("pick on location one more", () => {
    const random = Math.floor(Math.random() * 12 + 2);

    cy.get(".vxmabg-1").find("div");
    cy.wait(3000)
      .get(".card")
      .find("svg")
      .eq(random)
      .click({ force: true });
    cy.wait(3000)
      .get(".vxmabg-3")
      .find("svg")
      .eq(random)
      .click({ force: true });
  });
});
