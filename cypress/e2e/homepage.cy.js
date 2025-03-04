it("screenshot homepage", async ({ page }) => {
    cy.visit("https://500designs.com/");
    cy.argosScreenshot("homepage");
  });