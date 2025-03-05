// src/frontend/lib/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const authService = {
  signup: async (userData: {
    username: string;
    email: string;
    password: string;
  }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || 'Error en el registro');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  login: async (credentials: { email: string; password: string }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || 'Error en el inicio de sesión');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  profile: async (token: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/profile`, {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || 'Error al obtener perfil');
      }

      return data;
    } catch (error) {
      throw error;
    }
  }
};