import { BrApi } from "./BrApiConfig";

const getQuoteList = async () => {
    try {
        const { data } = await BrApi().get('quote/list', {
            params: {
                token: "35TmUkRTDKTCv6xDuhyecq",
                /* search: "TR",
                sortBy: "close",
                sortOrder: "desc", */
                limit: 30,
                type: "stock",
            }
        });

        return data;
    } catch (error) {
        console.error("Erro durante a requisição:", error);
        throw error;
    }
}

export const BrApiService = {
    getQuoteList,
};
