import axios, { AxiosInstance, AxiosError } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle errors
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Clear token and redirect to login
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  register: (data: {
    name: string;
    email: string;
    password: string;
    phone?: string;
  }) => api.post("/auth/register", data),

  login: (username: string, password: string) =>
    api.post("/auth/login", new URLSearchParams({ username, password }), {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }),
};

// Products API
export const productsAPI = {
  getAll: (skip = 0, limit = 20) =>
    api.get("/products", { params: { skip, limit } }),

  getById: (id: number) => api.get(`/products/${id}`),

  search: (query: string) => api.get("/products/search", { params: { q: query } }),
};

// Categories API
export const categoriesAPI = {
  getAll: () => api.get("/categories"),
};

// Cart API
export const cartAPI = {
  getCart: () => api.get("/cart"),

  addItem: (productId: number, quantity: number) =>
    api.post("/cart/items", { product_id: productId, quantity }),

  updateItem: (itemId: number, quantity: number) =>
    api.put(`/cart/items/${itemId}`, { quantity }),

  removeItem: (itemId: number) => api.delete(`/cart/items/${itemId}`),

  clear: () => api.delete("/cart"),
};

// Orders API
export const ordersAPI = {
  getAll: () => api.get("/orders"),

  getById: (id: number) => api.get(`/orders/${id}`),

  create: (data: { address_id: number; notes?: string }) =>
    api.post("/orders", data),
};

// Banners API
export const bannersAPI = {
  getActive: () => api.get("/banners/active"),

  getAll: () => api.get("/banners"),
};

// Deals API
export const dealsAPI = {
  getActive: () => api.get("/deals/active"),

  getAll: () => api.get("/deals"),
};

// Contacts API
export const contactsAPI = {
  create: (data: {
    name?: string;
    email?: string;
    phone?: string;
    message: string;
  }) => api.post("/contacts", data),
};
