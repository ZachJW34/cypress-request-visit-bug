it("should work", () => {
  cy.request({
    log: true,
    url: "http://localhost:3333/api/login",
    method: "POST",
  });
  cy.visit("/");
});
