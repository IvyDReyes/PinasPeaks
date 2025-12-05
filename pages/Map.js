exports.Map = class Map {
    constructor(page) {
        this.page = page;
        this.searchInputBox = page.getByTestId("search-input");
        this.toggleMapButton = page.getByTestId("toggle-map-button");
        this.mapSvg = page.getByTestId("map-of-ph-svg");
        this.searchButton = page.getByTestId("search-button");
        //this.province-nueva-vizcayaMap = page.getByTestId("province-nueva-vizcaya");
        
    }

    async showMap() {
        await this.toggleMapButton.click();
        await this.mapSvg.waitFor({ state: 'visible' });
    }

    async hideMap() {
        await this.toggleMapButton.click();
        await this.mapSvg.waitFor({ state: 'hidden' });
    }




}