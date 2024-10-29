Requisitos

Node.js (v14 o superior)
MySQL (XAMPP o similar)
npm (incluido con Node.js)

Aclaraciones 
Astro no permite conexion directa con MySql por lo cual se realizo una API
en Node.js para poder realizar las consultas a la base de datos.

Puertos

El servidor de Node.js se ejecuta en el puerto 3001 para levantar la api
usando el comando "node index.js", las peticiones se pueden hacer por 
postman al endpoint "emergencias".
El servidor de MySQL se ejecuta en el puerto 3306 con XAMPP.
La web se ejecuta en el puerto 4321, usando el comando "npm run dev".

SCRIPTS DE BASE DE DATOS

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 29-10-2024 a las 19:04:40
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bomberos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `control_elementos`
--

CREATE TABLE `control_elementos` (
  `id` bigint(20) NOT NULL,
  `elemento_id` bigint(20) DEFAULT NULL,
  `estado` varchar(100) NOT NULL,
  `encontrado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `elementos`
--

CREATE TABLE `elementos` (
  `id` bigint(20) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `fecha_vencimiento` date DEFAULT NULL,
  `tamaño` varchar(50) DEFAULT NULL,
  `observaciones` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `elementos`
--

INSERT INTO `elementos` (`id`, `nombre`, `cantidad`, `fecha_vencimiento`, `tamaño`, `observaciones`) VALUES
(1, 'Extintor', 10, '2025-12-31', '5kg', 'Extintor para fuego clase A'),
(2, 'Manguera', 20, NULL, '50m', 'Manguera de alta presión'),
(3, 'Botiquín', 15, '2024-06-30', NULL, 'Botiquín de primeros auxilios');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jerarquias`
--

CREATE TABLE `jerarquias` (
  `id` bigint(20) NOT NULL,
  `jerarquia` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `jerarquias`
--

INSERT INTO `jerarquias` (`id`, `jerarquia`) VALUES
(1, 'Jefe de Operaciones'),
(2, 'Supervisor'),
(3, 'Bombero'),
(4, 'Voluntario'),
(5, 'Jefe de Operaciones'),
(6, 'Supervisor'),
(7, 'Bombero'),
(8, 'Voluntario'),
(9, 'Jefe de Operaciones'),
(10, 'Supervisor'),
(11, 'Bombero'),
(12, 'Voluntario'),
(13, 'Jefe de Operaciones'),
(14, 'Supervisor'),
(15, 'Bombero'),
(16, 'Voluntario'),
(17, 'Jefe de Operaciones'),
(18, 'Supervisor'),
(19, 'Bombero'),
(20, 'Voluntario'),
(21, 'Jefe de Operaciones'),
(22, 'Supervisor'),
(23, 'Bombero'),
(24, 'Voluntario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `login`
--

CREATE TABLE `login` (
  `legajo` bigint(20) NOT NULL,
  `contraseña` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `login`
--

INSERT INTO `login` (`legajo`, `contraseña`) VALUES
(1001, 'contraseña123'),
(1002, 'contraseña456'),
(1003, 'contraseña789');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `moviles`
--

CREATE TABLE `moviles` (
  `id` bigint(20) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `marca` varchar(255) NOT NULL,
  `tipo_vehiculo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `moviles`
--

INSERT INTO `moviles` (`id`, `nombre`, `marca`, `tipo_vehiculo`) VALUES
(1, 'Móvil 1', 'Ford', 'Camión de bomberos'),
(2, 'Móvil 2', 'Chevrolet', 'Ambulancia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE `novedades` (
  `id` bigint(20) NOT NULL,
  `novedad` text NOT NULL,
  `legajo_autor` bigint(20) DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `novedad`, `legajo_autor`, `fecha`) VALUES
(1, 'Se reportó un incendio en el edificio de la calle X.', 1001, '2024-10-29 16:22:36'),
(2, 'Revisión de equipos realizada sin novedades.', 1002, '2024-10-29 16:22:36'),
(3, 'Entrenamiento de personal el próximo sábado.', 1003, '2024-10-29 16:22:36');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partes`
--

CREATE TABLE `partes` (
  `id` bigint(20) NOT NULL,
  `nombre_denunciante` varchar(255) NOT NULL,
  `apellido_denunciante` varchar(255) NOT NULL,
  `documento_denunciante` varchar(50) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `tipo_asistencia` varchar(100) NOT NULL,
  `jefe_dotacion` bigint(20) DEFAULT NULL,
  `parte_escrito` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `partes`
--

INSERT INTO `partes` (`id`, `nombre_denunciante`, `apellido_denunciante`, `documento_denunciante`, `direccion`, `tipo_asistencia`, `jefe_dotacion`, `parte_escrito`) VALUES
(1, 'Carlos', 'Fernández', '22334455', 'Calle A 123', 'Incendio', 1001, 'Se informa sobre un incendio en la zona.'),
(2, 'Sofía', 'Rodríguez', '55667788', 'Calle B 456', 'Accidente', 1002, 'Se reporta un accidente de tránsito.'),
(3, 'Pedro', 'González', '99887766', 'Calle C 789', 'Rescate', 1001, 'Se requiere asistencia para un rescate.'),
(4, 'Laura', 'Mendoza', '22335544', 'Calle D 101', 'Incendio', 1002, 'Incendio en una fábrica, se necesita apoyo.'),
(5, 'Fernando', 'Ramírez', '33446677', 'Calle E 202', 'Rescate', 1003, 'Se informa de un rescate en el río.'),
(6, 'Ana', 'Jiménez', '44557788', 'Calle F 303', 'Accidente', 1001, 'Accidente con heridos en la carretera.'),
(7, 'Miguel', 'Hernández', '55668899', 'Calle G 404', 'Incendio', 1002, 'Se reporta incendio forestal.'),
(8, 'Elena', 'Cruz', '66779900', 'Calle H 505', 'Emergencia médica', 1003, 'Asistencia médica urgente requerida.'),
(9, 'Javier', 'Gonzalez', '77880011', 'Calle I 606', 'Rescate', 1001, 'Rescate de persona atrapada.'),
(10, 'Patricia', 'Lopez', '88991122', 'Calle J 707', 'Incendio', 1002, 'Incendio en el centro comercial.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partes_moviles`
--

CREATE TABLE `partes_moviles` (
  `parte_id` bigint(20) NOT NULL,
  `movil_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partes_personal`
--

CREATE TABLE `partes_personal` (
  `parte_id` bigint(20) NOT NULL,
  `legajo_personal` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal`
--

CREATE TABLE `personal` (
  `legajo` bigint(20) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `documento` varchar(50) NOT NULL,
  `nacimiento` date NOT NULL,
  `jerarquia_id` bigint(20) DEFAULT NULL,
  `fecha_ingreso` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `personal`
--

INSERT INTO `personal` (`legajo`, `nombre`, `apellido`, `documento`, `nacimiento`, `jerarquia_id`, `fecha_ingreso`) VALUES
(1001, 'Juan', 'Pérez', '12345678', '1990-01-15', 1, '2020-05-01'),
(1002, 'Ana', 'García', '87654321', '1985-04-20', 2, '2019-03-15'),
(1003, 'Luis', 'Martínez', '11223344', '1992-06-30', 3, '2021-08-12'),
(1004, 'Marta', 'López', '44332211', '1980-12-05', 4, '2018-11-01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salidas_ingresos`
--

CREATE TABLE `salidas_ingresos` (
  `id` bigint(20) NOT NULL,
  `fecha_hora` timestamp NOT NULL DEFAULT current_timestamp(),
  `tipo` enum('salida','ingreso') NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `legajo_personal` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `salidas_ingresos`
--

INSERT INTO `salidas_ingresos` (`id`, `fecha_hora`, `tipo`, `nombre`, `apellido`, `legajo_personal`) VALUES
(1, '2024-10-29 16:22:36', 'salida', 'Juan', 'Pérez', 1001),
(2, '2024-10-29 16:22:36', 'ingreso', 'Ana', 'García', 1002),
(3, '2024-10-29 16:22:36', 'salida', 'Luis', 'Martínez', 1003);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salidas_regresos_moviles`
--

CREATE TABLE `salidas_regresos_moviles` (
  `id` bigint(20) NOT NULL,
  `numero_movil` bigint(20) DEFAULT NULL,
  `fecha_hora` timestamp NOT NULL DEFAULT current_timestamp(),
  `destino` varchar(255) NOT NULL,
  `kilometraje_retorno` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehiculos`
--

CREATE TABLE `vehiculos` (
  `id` bigint(20) NOT NULL,
  `marca` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `vehiculos`
--

INSERT INTO `vehiculos` (`id`, `marca`) VALUES
(2, 'Chevrolet'),
(1, 'Ford');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `control_elementos`
--
ALTER TABLE `control_elementos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `elemento_id` (`elemento_id`);

--
-- Indices de la tabla `elementos`
--
ALTER TABLE `elementos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `jerarquias`
--
ALTER TABLE `jerarquias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`legajo`);

--
-- Indices de la tabla `moviles`
--
ALTER TABLE `moviles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_marca` (`marca`);

--
-- Indices de la tabla `novedades`
--
ALTER TABLE `novedades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `legajo_autor` (`legajo_autor`);

--
-- Indices de la tabla `partes`
--
ALTER TABLE `partes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jefe_dotacion` (`jefe_dotacion`);

--
-- Indices de la tabla `partes_moviles`
--
ALTER TABLE `partes_moviles`
  ADD PRIMARY KEY (`parte_id`,`movil_id`),
  ADD KEY `movil_id` (`movil_id`);

--
-- Indices de la tabla `partes_personal`
--
ALTER TABLE `partes_personal`
  ADD PRIMARY KEY (`parte_id`,`legajo_personal`),
  ADD KEY `legajo_personal` (`legajo_personal`);

--
-- Indices de la tabla `personal`
--
ALTER TABLE `personal`
  ADD PRIMARY KEY (`legajo`),
  ADD KEY `jerarquia_id` (`jerarquia_id`);

--
-- Indices de la tabla `salidas_ingresos`
--
ALTER TABLE `salidas_ingresos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `legajo_personal` (`legajo_personal`);

--
-- Indices de la tabla `salidas_regresos_moviles`
--
ALTER TABLE `salidas_regresos_moviles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `numero_movil` (`numero_movil`);

--
-- Indices de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_marca` (`marca`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `control_elementos`
--
ALTER TABLE `control_elementos`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `elementos`
--
ALTER TABLE `elementos`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `jerarquias`
--
ALTER TABLE `jerarquias`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `novedades`
--
ALTER TABLE `novedades`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `partes`
--
ALTER TABLE `partes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `salidas_ingresos`
--
ALTER TABLE `salidas_ingresos`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `salidas_regresos_moviles`
--
ALTER TABLE `salidas_regresos_moviles`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `control_elementos`
--
ALTER TABLE `control_elementos`
  ADD CONSTRAINT `control_elementos_ibfk_1` FOREIGN KEY (`elemento_id`) REFERENCES `elementos` (`id`);

--
-- Filtros para la tabla `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `login_ibfk_1` FOREIGN KEY (`legajo`) REFERENCES `personal` (`legajo`);

--
-- Filtros para la tabla `moviles`
--
ALTER TABLE `moviles`
  ADD CONSTRAINT `fk_marca` FOREIGN KEY (`marca`) REFERENCES `vehiculos` (`marca`);

--
-- Filtros para la tabla `novedades`
--
ALTER TABLE `novedades`
  ADD CONSTRAINT `novedades_ibfk_1` FOREIGN KEY (`legajo_autor`) REFERENCES `personal` (`legajo`);

--
-- Filtros para la tabla `partes`
--
ALTER TABLE `partes`
  ADD CONSTRAINT `partes_ibfk_1` FOREIGN KEY (`jefe_dotacion`) REFERENCES `personal` (`legajo`);

--
-- Filtros para la tabla `partes_moviles`
--
ALTER TABLE `partes_moviles`
  ADD CONSTRAINT `partes_moviles_ibfk_1` FOREIGN KEY (`parte_id`) REFERENCES `partes` (`id`),
  ADD CONSTRAINT `partes_moviles_ibfk_2` FOREIGN KEY (`movil_id`) REFERENCES `moviles` (`id`);

--
-- Filtros para la tabla `partes_personal`
--
ALTER TABLE `partes_personal`
  ADD CONSTRAINT `partes_personal_ibfk_1` FOREIGN KEY (`parte_id`) REFERENCES `partes` (`id`),
  ADD CONSTRAINT `partes_personal_ibfk_2` FOREIGN KEY (`legajo_personal`) REFERENCES `personal` (`legajo`);

--
-- Filtros para la tabla `personal`
--
ALTER TABLE `personal`
  ADD CONSTRAINT `personal_ibfk_1` FOREIGN KEY (`jerarquia_id`) REFERENCES `jerarquias` (`id`);

--
-- Filtros para la tabla `salidas_ingresos`
--
ALTER TABLE `salidas_ingresos`
  ADD CONSTRAINT `salidas_ingresos_ibfk_1` FOREIGN KEY (`legajo_personal`) REFERENCES `personal` (`legajo`);

--
-- Filtros para la tabla `salidas_regresos_moviles`
--
ALTER TABLE `salidas_regresos_moviles`
  ADD CONSTRAINT `salidas_regresos_moviles_ibfk_1` FOREIGN KEY (`numero_movil`) REFERENCES `moviles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
