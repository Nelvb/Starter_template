"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import Button from "@/components/ui/Button";

const NavbarLinks: React.FC = () => {
  // Obtener estado de autenticación y funciones del contexto de autenticación
  const { isAuthenticated, user, logout } = useAuth();
  const pathname = usePathname();
  
  // Estados para manejar transiciones suaves durante la carga
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [shouldRender, setShouldRender] = useState(false);

  // Determinar en qué página estamos
  const isHomePage = pathname === "/" || pathname === "";
  const isDashboardPage = pathname === "/dashboard";
  const isLoginPage = pathname === "/login";
  const isSignupPage = pathname === "/signup";

  // Efecto para manejar transiciones y depuración
  useEffect(() => {
    // Pequeño retraso para asegurar renderizado suave y prevenir parpadeos
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
      setShouldRender(true);
    }, 100);

    // Log de depuración para seguimiento del estado de autenticación
    console.log("NavbarLinks - Render con:", { 
      isAuthenticated, 
      pathname,
      isInitialLoad,
      shouldRender 
    });

    // Limpiar el temporizador para prevenir memory leaks
    return () => clearTimeout(timer);
  }, [isAuthenticated, pathname]);

  /**
   * Renderiza la navegación según el estado de autenticación y la página actual
   * Implementación modular que separa la lógica de navegación para cada escenario
   */
  const renderNavigation = () => {
    // Usuario no autenticado
    if (!isAuthenticated) {
      return (
        <>
          {/* Enlace a Inicio solo si no estamos en la página principal */}
          {!isHomePage && (
            <Link 
              href="/" 
              className="transition-all ease-smooth hover:scale-hover text-gray-800 dark:text-white"
            >
              Inicio
            </Link>
          )}
          
          {/* Botón de Iniciar Sesión - no mostrar en página de login */}
          {!isLoginPage && (
            <Link 
              href="/login" 
              className="transition-all ease-smooth hover:scale-hover"
            >
              <Button variant="outline" size="sm">Iniciar Sesión</Button>
            </Link>
          )}
          
          {/* Botón de Registrarse - no mostrar en página de signup */}
          {!isSignupPage && (
            <Link 
              href="/signup" 
              className="transition-all ease-smooth hover:scale-hover"
            >
              <Button variant="primary" size="sm">Registrarse</Button>
            </Link>
          )}
        </>
      );
    }
    
    // Usuario autenticado en la página principal
    if (isHomePage) {
      return (
        <>
          {/* Saludo personalizado con transición */}
          <span className="text-gray-800 dark:text-white font-medium transition-all duration-300">
            Hola {user?.username}
          </span>
          
          {/* Enlace a Área Privada */}
          <Link 
            href="/dashboard" 
            className="transition-all ease-smooth hover:scale-hover text-gray-800 dark:text-white"
          >
            Área Privada
          </Link>
          
          {/* Botón de Cerrar Sesión */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              console.log("Click en Cerrar Sesión");
              logout();
            }}
            className="transition-all ease-smooth hover:scale-hover"
          >
            Cerrar Sesión
          </Button>
        </>
      );
    }
    
    // Usuario autenticado en el dashboard
    if (isDashboardPage) {
      return (
        <>
          {/* Saludo personalizado con transición */}
          <span className="text-gray-800 dark:text-white font-medium transition-all duration-300">
            Hola {user?.username}
          </span>
          
          {/* Enlace a Inicio */}
          <Link 
            href="/" 
            className="transition-all ease-smooth hover:scale-hover text-gray-800 dark:text-white"
          >
            Inicio
          </Link>
          
          {/* Botón de Cerrar Sesión */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              console.log("Click en Cerrar Sesión");
              logout();
            }}
            className="transition-all ease-smooth hover:scale-hover"
          >
            Cerrar Sesión
          </Button>
        </>
      );
    }
    
    // Usuario autenticado en otras páginas
    return (
      <>
        {/* Saludo personalizado con transición */}
        <span className="text-gray-800 dark:text-white font-medium transition-all duration-300">
          Hola {user?.username}
        </span>
        
        {/* Enlace a Inicio */}
        <Link 
          href="/" 
          className="transition-all ease-smooth hover:scale-hover text-gray-800 dark:text-white"
        >
          Inicio
        </Link>
        
        {/* Enlace a Área Privada - no mostrar en dashboard */}
        {!isDashboardPage && (
          <Link 
            href="/dashboard" 
            className="transition-all ease-smooth hover:scale-hover text-gray-800 dark:text-white"
          >
            Área Privada
          </Link>
        )}
        
        {/* Botón de Cerrar Sesión */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            console.log("Click en Cerrar Sesión");
            logout();
          }}
          className="transition-all ease-smooth hover:scale-hover"
        >
          Cerrar Sesión
        </Button>
      </>
    );
  };

  // Renderizado principal con control de transiciones
  return (
    <div 
      className={`
        hidden md:flex 
        items-center 
        space-x-6 
        transition-all 
        duration-300 
        ease-smooth
        ${isInitialLoad ? 'opacity-0' : 'opacity-100'}
        ${shouldRender ? 'visible' : 'invisible'}
      `}
    >
      {renderNavigation()}
    </div>
  );
};

export default NavbarLinks;