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
        // window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

// Types
export interface Category {
  id: number;
  name: string;
  description?: string;
}

export interface ProductImage {
  id: number;
  url: string;
  is_primary: boolean;
  sort_order: number;
}

export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  max_price?: number;
  original_price?: number;
  discount_percentage: number;
  stock: number;
  image_url?: string;
  images: ProductImage[];
  category?: { id: number; name: string };
  created_at: string;
}

export interface BannerImage {
  id: number;
  url: string;
  is_primary: boolean;
  sort_order: number;
}

export interface Banner {
  id: number;
  title: string;
  description?: string;
  cta_text: string;
  cta_href: string;
  images: BannerImage[];
}

export interface DealProduct {
  id: number;
  name: string;
  price: number;
  stock: number;
  image_url?: string;
  deal_price?: number;
  discount_percentage?: number;
  sort_order: number;
}

export interface Deal {
  id: number;
  title: string;
  description?: string;
  starts_at?: string;
  ends_at?: string;
  products: DealProduct[];
}

// Auth API
export const authAPI = {
  register: (data: {
    name: string;
    email: string;
    password: string;
    phone?: string;
  }) => api.post("/users/register", data),

  login: (data: { email: string; password: string }) =>
    api.post("/users/login", data),
};

// Products API
export const productsAPI = {
  getAll: () => api.get<Product[]>("/products/"),
  getById: (id: number) => api.get<Product>(`/products/${id}`),
};

// Categories API
export const categoriesAPI = {
  getAll: () => api.get<Category[]>("/categories/"),
};

// Cart API
export const cartAPI = {
  getCart: () => api.get("/cart/"),
  addItem: (productId: number, quantity: number) =>
    api.post("/cart/items", { product_id: productId, quantity }),
  updateItem: (itemId: number, quantity: number) =>
    api.put(`/cart/items/${itemId}`, { quantity }),
  removeItem: (itemId: number) => api.delete(`/cart/items/${itemId}`),
  clear: () => api.delete("/cart/"),
};

// Orders API
export const ordersAPI = {
  getAll: () => api.get("/order/"),
  getById: (id: number) => api.get(`/order/${id}`),
  create: (data: { address_id: number; notes?: string }) =>
    api.post("/order/", data),
};

// Banners API
export const bannersAPI = {
  getActive: () => api.get<Banner[]>("/hero-banners/"),
};

// Deals API
export const dealsAPI = {
  getLatest: () => api.get<Deal>("/deals/latest"),
  getAll: () => api.get<Deal[]>("/deals/"),
};

// Contacts API
export const contactsAPI = {
  create: (data: {
    name?: string;
    email?: string;
    phone?: string;
    message: string;
  }) => api.post("/contacts/", data),
};
