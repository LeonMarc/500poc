it("screenshot homepage", async ({ page }) => {
    cy.visit("https://500designs.com/");
    cy.wait(4000)
    cy.argosScreenshot("homepage");
  });