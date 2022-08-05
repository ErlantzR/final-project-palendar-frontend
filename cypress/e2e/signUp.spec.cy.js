// cy.exec("mongo final-project-test --eval 'db.users.remove({})'");

describe("sign up", () => {
  it("can sign up", () => {
    cy.visit("http://localhost:3000/signup");

    cy.get("input[placeholder=\"Full Name\"]").type("tester testerson");
    cy.get("input[placeholder=\"Email\"]").type("test@test");
    cy.get("input[placeholder=\"Password\"]").type("test");

    cy.get('[data-cy="submit"]').click()
  });
});
