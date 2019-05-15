const apiHost = 'https://gist.githubusercontent.com/dsandin/c8ed6c5a9486f311f4725f221b912220/raw/8c6d2d8e1f339d02e0ff3d2990560a4862c4beae/users_page_list'


const apiHost2 = "https://gist.githubusercontent.com/dsandin/7b7cd2b834abd8c10908803cac5d1dd3/raw/9a8c0270e0f7a778409b2996419bacdbb06edc87/users_page1"

// "https://gist.githubusercontent.com/dsandin/7b7cd2b834abd8c10908803cac5d1dd3/raw/9a8c0270e0f7a778409b2996419bacdbb06edc87/users_page1",

// "https://gist.githubusercontent.com/dsandin/e451f042d2b78143141ea8ea7d97b03f/raw/9847b174d0f5f61701ad64ab73be568270eea3a3/users_page2",

// "https://gist.githubusercontent.com/dsandin/459ac3c73b5ea2a2c0b09015de85d930/raw/fc8af8115057bec36561e799aaf5a47ca12521b8/users_page3"


export default {
    async fetchInitialDeals() {
        try {
            // const response = await fetch(apiHost + '/api/deals');
            const response = await fetch(apiHost2);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    },

    async fetchDealDetail(page) {
        try {
            const response = await fetch(page);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    },
};