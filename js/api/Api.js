
class Api {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async get() {
        try {
            const response = await fetch(this.baseUrl);
            if (!response.ok) throw new Error('Erreur réseau');
            return await response.json();
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }
}
window.Api = Api;
