describe("/login", () => {
  beforeEach(() => {
    cy.visit("/#/login");
  });
  it("greeting with Sign in", () => {
    cy.contains("h1", "Sign in");
  });

  it("link to the #/register", () => {
    cy.contains("Need an account?").should("have.attr", "href", "#/register");
  });

  it("require email", () => {
    cy.get("form")
      .contains("Sign in")
      .click();
  });

  it("require password", () => {
    cy.get("[data-test=email]")
      .type("joe@example.com")
      .should("have.value", "joe@example.com");
  });

  it("require valid username and password", () => {
    cy.get("[data-test=email]").type("joe@example.com");
    cy.get("[data-test=password]").type("invalid{enter}");
    cy.get(".error-message").should(
      "have.text",
      "email or password is invalid"
    );
  });

  it("navigate to #/ on successful login", () => {
    cy.get("[data-test=email]").type("joe@example.com");
    cy.get("[data-test=password]").type("joe#{enter}");
    cy.hash().should("eq", "#/");
  });
});
