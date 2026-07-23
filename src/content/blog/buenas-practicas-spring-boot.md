---
title: 'Buenas prácticas al construir servicios con Spring Boot'
description: 'Convenciones y decisiones que ayudan a que un servicio Spring Boot siga siendo mantenible después de que el equipo original se haya ido.'
pubDate: 2026-07-10
tags: ['java', 'spring-boot', 'backend']
---

Spring Boot facilita muchísimo levantar un servicio, pero eso mismo hace fácil terminar con un monolito difícil de mantener si no se cuidan algunas convenciones desde el inicio. Estas son las prácticas que más me han servido en sistemas que siguen vivos varios años después.

## 1. Separar claramente las capas

Controller, servicio y repositorio no son una formalidad: son el primer filtro de mantenibilidad. El controller solo debería traducir HTTP a llamadas de servicio, sin lógica de negocio. Si una regla de negocio termina en un controller, tarde o temprano se duplica en otro endpoint.

```java
@RestController
@RequestMapping("/api/solicitudes")
class SolicitudController {

    private final SolicitudService solicitudService;

    @PostMapping
    ResponseEntity<SolicitudDTO> crear(@RequestBody @Valid CrearSolicitudRequest request) {
        return ResponseEntity.ok(solicitudService.crear(request));
    }
}
```

## 2. DTOs de entrada y salida, nunca entidades JPA expuestas

Exponer una entidad `@Entity` directamente en un endpoint acopla tu contrato de API a tu modelo de base de datos. El día que necesites cambiar una columna, rompes clientes que ni sabías que existían.

## 3. Manejo de errores centralizado

Un `@ControllerAdvice` con excepciones de negocio explícitas (`RecursoNoEncontradoException`, `ValidacionException`, etc.) evita bloques `try/catch` repetidos y da respuestas de error consistentes en toda la API.

## 4. Configuración por perfil, nunca hardcodeada

`application-dev.yml`, `application-prod.yml` y variables de entorno para credenciales. Ningún valor sensible en el repositorio, ni "temporalmente".

## 5. Tests de integración con Testcontainers

Los mocks de repositorio dan falsa confianza cuando el problema real está en una consulta JPA mal escrita. Levantar una base de datos real (aunque sea en un contenedor) durante los tests detecta esos casos antes de producción.

## 6. Logs pensados para quien los va a leer a las 2 a. m.

Un log útil dice qué operación falló, con qué identificador de negocio y por qué —no solo un stack trace. Si tu log no te permite reconstruir el incidente sin acceso al código, hay que mejorarlo.

Ninguna de estas prácticas es exclusiva de Spring Boot, pero el framework hace tan fácil "que funcione" que a veces se posterga el "que se pueda mantener". Vale la pena no esperar a que el sistema crezca para aplicarlas.
