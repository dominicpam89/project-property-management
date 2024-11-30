describe("My First Test", () => {
	it("Visits the app root URL", () => {
		cy.visit("/");
		cy.contains("Your App Title or Text"); // Replace with a text that exists in your app
	});
});
