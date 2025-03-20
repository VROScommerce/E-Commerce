
/* Archivo centralizado de configuración y constantes */

const CONFIG = {
    API_BASE_URL: "https://api.tu-ecommerce.com",
    IMAGE_CDN: "https://cdn.tu-ecommerce.com/images",
    CART_MAX_ITEMS: 100,
    THEME_MODE: "light", // Puede ser 'light' o 'dark'
    FEATURE_FLAGS: {
        enableQuickAdd: true,
        enablePredictiveSearch: true,
        enableLazyLoading: true,
    },
};

export default CONFIG;
