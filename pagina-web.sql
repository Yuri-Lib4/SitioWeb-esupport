-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-08-2023 a las 06:44:33
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pagina-web`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add carrito', 1, 'add_carrito'),
(2, 'Can change carrito', 1, 'change_carrito'),
(3, 'Can delete carrito', 1, 'delete_carrito'),
(4, 'Can view carrito', 1, 'view_carrito'),
(5, 'Can add cliente', 2, 'add_cliente'),
(6, 'Can change cliente', 2, 'change_cliente'),
(7, 'Can delete cliente', 2, 'delete_cliente'),
(8, 'Can view cliente', 2, 'view_cliente'),
(9, 'Can add item pedido', 3, 'add_itempedido'),
(10, 'Can change item pedido', 3, 'change_itempedido'),
(11, 'Can delete item pedido', 3, 'delete_itempedido'),
(12, 'Can view item pedido', 3, 'view_itempedido'),
(13, 'Can add metodo pago', 4, 'add_metodopago'),
(14, 'Can change metodo pago', 4, 'change_metodopago'),
(15, 'Can delete metodo pago', 4, 'delete_metodopago'),
(16, 'Can view metodo pago', 4, 'view_metodopago'),
(17, 'Can add producto', 5, 'add_producto'),
(18, 'Can change producto', 5, 'change_producto'),
(19, 'Can delete producto', 5, 'delete_producto'),
(20, 'Can view producto', 5, 'view_producto'),
(21, 'Can add valoracion resena', 6, 'add_valoracionresena'),
(22, 'Can change valoracion resena', 6, 'change_valoracionresena'),
(23, 'Can delete valoracion resena', 6, 'delete_valoracionresena'),
(24, 'Can view valoracion resena', 6, 'view_valoracionresena'),
(25, 'Can add ticket soporte', 7, 'add_ticketsoporte'),
(26, 'Can change ticket soporte', 7, 'change_ticketsoporte'),
(27, 'Can delete ticket soporte', 7, 'delete_ticketsoporte'),
(28, 'Can view ticket soporte', 7, 'view_ticketsoporte'),
(29, 'Can add pedido', 8, 'add_pedido'),
(30, 'Can change pedido', 8, 'change_pedido'),
(31, 'Can delete pedido', 8, 'delete_pedido'),
(32, 'Can view pedido', 8, 'view_pedido'),
(33, 'Can add mensaje chat', 9, 'add_mensajechat'),
(34, 'Can change mensaje chat', 9, 'change_mensajechat'),
(35, 'Can delete mensaje chat', 9, 'delete_mensajechat'),
(36, 'Can view mensaje chat', 9, 'view_mensajechat'),
(37, 'Can add item carrito', 10, 'add_itemcarrito'),
(38, 'Can change item carrito', 10, 'change_itemcarrito'),
(39, 'Can delete item carrito', 10, 'delete_itemcarrito'),
(40, 'Can view item carrito', 10, 'view_itemcarrito'),
(41, 'Can add factura', 11, 'add_factura'),
(42, 'Can change factura', 11, 'change_factura'),
(43, 'Can delete factura', 11, 'delete_factura'),
(44, 'Can view factura', 11, 'view_factura'),
(45, 'Can add compra', 12, 'add_compra'),
(46, 'Can change compra', 12, 'change_compra'),
(47, 'Can delete compra', 12, 'delete_compra'),
(48, 'Can view compra', 12, 'view_compra'),
(49, 'Can add comentario producto', 13, 'add_comentarioproducto'),
(50, 'Can change comentario producto', 13, 'change_comentarioproducto'),
(51, 'Can delete comentario producto', 13, 'delete_comentarioproducto'),
(52, 'Can view comentario producto', 13, 'view_comentarioproducto'),
(53, 'Can add marca producto', 14, 'add_marcaproducto'),
(54, 'Can change marca producto', 14, 'change_marcaproducto'),
(55, 'Can delete marca producto', 14, 'delete_marcaproducto'),
(56, 'Can view marca producto', 14, 'view_marcaproducto'),
(57, 'Can add categoria producto', 15, 'add_categoriaproducto'),
(58, 'Can change categoria producto', 15, 'change_categoriaproducto'),
(59, 'Can delete categoria producto', 15, 'delete_categoriaproducto'),
(60, 'Can view categoria producto', 15, 'view_categoriaproducto'),
(61, 'Can add perifericos', 16, 'add_perifericos'),
(62, 'Can change perifericos', 16, 'change_perifericos'),
(63, 'Can delete perifericos', 16, 'delete_perifericos'),
(64, 'Can view perifericos', 16, 'view_perifericos'),
(65, 'Can add oferta', 17, 'add_oferta'),
(66, 'Can change oferta', 17, 'change_oferta'),
(67, 'Can delete oferta', 17, 'delete_oferta'),
(68, 'Can view oferta', 17, 'view_oferta'),
(69, 'Can add proveedores', 18, 'add_proveedores'),
(70, 'Can change proveedores', 18, 'change_proveedores'),
(71, 'Can delete proveedores', 18, 'delete_proveedores'),
(72, 'Can view proveedores', 18, 'view_proveedores'),
(73, 'Can add proveedores producto', 19, 'add_proveedoresproducto'),
(74, 'Can change proveedores producto', 19, 'change_proveedoresproducto'),
(75, 'Can delete proveedores producto', 19, 'delete_proveedoresproducto'),
(76, 'Can view proveedores producto', 19, 'view_proveedoresproducto'),
(77, 'Can add log entry', 20, 'add_logentry'),
(78, 'Can change log entry', 20, 'change_logentry'),
(79, 'Can delete log entry', 20, 'delete_logentry'),
(80, 'Can view log entry', 20, 'view_logentry'),
(81, 'Can add permission', 21, 'add_permission'),
(82, 'Can change permission', 21, 'change_permission'),
(83, 'Can delete permission', 21, 'delete_permission'),
(84, 'Can view permission', 21, 'view_permission'),
(85, 'Can add group', 22, 'add_group'),
(86, 'Can change group', 22, 'change_group'),
(87, 'Can delete group', 22, 'delete_group'),
(88, 'Can view group', 22, 'view_group'),
(89, 'Can add user', 23, 'add_user'),
(90, 'Can change user', 23, 'change_user'),
(91, 'Can delete user', 23, 'delete_user'),
(92, 'Can view user', 23, 'view_user'),
(93, 'Can add content type', 24, 'add_contenttype'),
(94, 'Can change content type', 24, 'change_contenttype'),
(95, 'Can delete content type', 24, 'delete_contenttype'),
(96, 'Can view content type', 24, 'view_contenttype'),
(97, 'Can add session', 25, 'add_session'),
(98, 'Can change session', 25, 'change_session'),
(99, 'Can delete session', 25, 'delete_session'),
(100, 'Can view session', 25, 'view_session');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$600000$bxcfg76HAXyC3U99HIY5gx$Ff5lx58wEiGdBP0fS03+krdntsji9805qwoyr/ARNlY=', '2023-08-05 17:04:09.195826', 1, 'yuri', '', '', 'yuri@gmail.com', 1, 1, '2023-08-05 17:03:38.505230');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2023-08-05 17:04:49.222690', '1', 'Notebook:', 1, '[{\"added\": {}}]', 19, 1),
(2, '2023-08-05 17:05:04.335239', '1', 'HP', 1, '[{\"added\": {}}]', 18, 1),
(3, '2023-08-05 17:07:16.218178', '2', 'Lenovo', 1, '[{\"added\": {}}]', 18, 1),
(4, '2023-08-05 17:08:30.710681', '3', 'Dell', 1, '[{\"added\": {}}]', 18, 1),
(5, '2023-08-05 19:42:37.883011', '1', 'vsdvfvbfs', 1, '[{\"added\": {}}]', 15, 1),
(6, '2023-08-06 06:05:50.787621', '1', 'Teclados', 1, '[{\"added\": {}}]', 16, 1),
(7, '2023-08-09 04:24:28.545777', '2', 'Componentes de Hardware', 1, '[{\"added\": {}}]', 15, 1),
(8, '2023-08-09 06:38:06.982789', '3', 'Computadoras y Portátiles', 1, '[{\"added\": {}}]', 15, 1),
(9, '2023-08-09 06:38:42.494322', '4', 'Soluciones Empresariale', 1, '[{\"added\": {}}]', 15, 1),
(10, '2023-08-09 06:39:27.924510', '5', 'Electrónica de Consumo', 1, '[{\"added\": {}}]', 15, 1),
(11, '2023-08-09 06:39:46.672052', '6', 'Dispositivos Móviles', 1, '[{\"added\": {}}]', 15, 1),
(12, '2023-08-09 08:43:41.740720', '2', 'Ratón (Mouse)', 1, '[{\"added\": {}}]', 16, 1),
(13, '2023-08-09 08:45:33.643232', '3', 'Monitor', 1, '[{\"added\": {}}]', 16, 1),
(14, '2023-08-09 08:46:17.664764', '4', 'Impresora', 1, '[{\"added\": {}}]', 16, 1),
(15, '2023-08-09 08:47:39.788343', '2', 'Impresoras', 2, '[{\"changed\": {\"fields\": [\"Nombre\", \"Imagen\"]}}]', 16, 1),
(16, '2023-08-09 08:48:00.959145', '4', 'Ratón (Mouse)', 2, '[{\"changed\": {\"fields\": [\"Nombre\", \"Imagen\"]}}]', 16, 1),
(17, '2023-08-09 08:52:01.353878', '5', 'Notebooks', 1, '[{\"added\": {}}]', 16, 1),
(18, '2023-08-09 08:53:16.080052', '1', 'Apple', 1, '[{\"added\": {}}]', 14, 1),
(19, '2023-08-09 08:53:49.340810', '1', 'Apple MacBook Air', 1, '[{\"added\": {}}]', 5, 1),
(20, '2023-08-09 08:56:36.590443', '1', 'Notebooks', 2, '[{\"changed\": {\"fields\": [\"Producto\"]}}]', 19, 1),
(21, '2023-08-09 08:59:49.825230', '2', 'Dell', 1, '[{\"added\": {}}]', 14, 1),
(22, '2023-08-09 09:01:51.850740', '2', 'Dell XPS 13', 1, '[{\"added\": {}}]', 5, 1),
(23, '2023-08-09 09:03:12.055908', '3', 'HP', 1, '[{\"added\": {}}]', 14, 1),
(24, '2023-08-09 09:03:21.863276', '3', 'HP Spectre x360', 1, '[{\"added\": {}}]', 5, 1),
(25, '2023-08-09 09:04:25.023945', '4', 'Lenovo', 1, '[{\"added\": {}}]', 14, 1),
(26, '2023-08-09 09:04:38.698784', '4', 'Lenovo ThinkPad X1 Carbon', 1, '[{\"added\": {}}]', 5, 1),
(27, '2023-08-10 00:12:20.168782', '7', 'Dispositivos de entrada', 1, '[{\"added\": {}}]', 15, 1),
(28, '2023-08-10 00:18:41.096020', '5', 'Logitech', 1, '[{\"added\": {}}]', 14, 1),
(29, '2023-08-10 00:19:24.147890', '5', 'Logitech K380', 1, '[{\"added\": {}}]', 5, 1),
(30, '2023-08-10 09:07:57.157373', '2', 'Impresoras', 1, '[{\"added\": {}}]', 19, 1),
(31, '2023-08-10 09:09:23.857863', '4', 'Acer', 1, '[{\"added\": {}}]', 18, 1),
(32, '2023-08-10 09:11:09.545419', '5', 'Epson', 1, '[{\"added\": {}}]', 18, 1),
(33, '2023-08-10 09:12:11.710466', '6', 'Canon', 1, '[{\"added\": {}}]', 18, 1),
(34, '2023-08-10 09:13:02.991093', '7', 'Brother', 1, '[{\"added\": {}}]', 18, 1),
(35, '2023-08-12 02:56:34.117212', '1', 'HP Pavilion x360', 1, '[{\"added\": {}}]', 17, 1),
(36, '2023-08-16 05:15:16.442023', '1', 'Carrito del cliente: Yuri', 1, '[{\"added\": {}}]', 1, 1),
(37, '2023-08-17 05:09:28.396092', '2', 'Carrito del cliente: Luigui', 1, '[{\"added\": {}}]', 1, 1),
(38, '2023-08-17 10:32:25.519339', '3', 'Mainboard (placa madre)', 1, '[{\"added\": {}}]', 19, 1),
(39, '2023-08-17 10:33:37.127994', '8', 'Asus', 1, '[{\"added\": {}}]', 18, 1),
(40, '2023-08-17 10:35:52.687955', '9', 'Intel', 1, '[{\"added\": {}}]', 18, 1),
(41, '2023-08-17 10:36:40.222915', '4', 'Memoria', 1, '[{\"added\": {}}]', 19, 1),
(42, '2023-08-17 10:37:48.838745', '10', 'Kingston', 1, '[{\"added\": {}}]', 18, 1),
(43, '2023-08-17 10:38:43.861837', '10', 'Kingston', 2, '[{\"changed\": {\"fields\": [\"Imagen\"]}}]', 18, 1),
(44, '2023-08-17 10:40:11.579846', '10', 'Kingston', 2, '[{\"changed\": {\"fields\": [\"Imagen\"]}}]', 18, 1),
(45, '2023-08-17 10:41:26.426404', '11', 'Crucial', 1, '[{\"added\": {}}]', 18, 1),
(46, '2023-08-17 10:42:59.734121', '12', 'Team Group', 1, '[{\"added\": {}}]', 18, 1),
(47, '2023-08-17 10:43:22.152761', '5', 'Discos duros', 1, '[{\"added\": {}}]', 19, 1),
(48, '2023-08-17 10:44:25.768835', '13', 'Wester digital', 1, '[{\"added\": {}}]', 18, 1),
(49, '2023-08-17 10:45:10.414009', '14', 'Seagate', 1, '[{\"added\": {}}]', 18, 1),
(50, '2023-08-17 10:47:05.373955', '15', 'Toshiba', 1, '[{\"added\": {}}]', 18, 1),
(51, '2023-08-17 10:47:34.125058', '6', 'Microprocesador', 1, '[{\"added\": {}}]', 19, 1),
(52, '2023-08-17 10:48:01.253924', '16', 'Intel', 1, '[{\"added\": {}}]', 18, 1),
(53, '2023-08-17 10:48:20.500455', '7', 'Teclados y Mause', 1, '[{\"added\": {}}]', 19, 1),
(54, '2023-08-17 10:49:03.995749', '17', 'Logitech', 1, '[{\"added\": {}}]', 18, 1),
(55, '2023-08-17 10:50:11.248027', '18', 'Microsoft', 1, '[{\"added\": {}}]', 18, 1),
(56, '2023-08-17 10:51:04.392126', '19', 'Genius', 1, '[{\"added\": {}}]', 18, 1),
(57, '2023-08-17 10:51:48.651677', '8', 'Para Cableado', 1, '[{\"added\": {}}]', 19, 1),
(58, '2023-08-17 10:53:11.863047', '20', 'Nexxt', 1, '[{\"added\": {}}]', 18, 1),
(59, '2023-08-17 10:54:25.150868', '21', 'Satra', 1, '[{\"added\": {}}]', 18, 1),
(60, '2023-08-17 10:55:31.236643', '22', 'Panbduit', 1, '[{\"added\": {}}]', 18, 1),
(61, '2023-08-17 10:57:45.573436', '23', 'Amp', 1, '[{\"added\": {}}]', 18, 1),
(62, '2023-08-17 10:58:37.989863', '9', 'Estabilizadores y supresor de picos', 1, '[{\"added\": {}}]', 19, 1),
(63, '2023-08-17 10:59:55.097120', '24', 'Forza', 1, '[{\"added\": {}}]', 18, 1),
(64, '2023-08-17 11:00:22.132284', '10', 'Bolosos , Mochilas', 1, '[{\"added\": {}}]', 19, 1),
(65, '2023-08-17 11:04:40.516374', '25', 'Klip Extreme', 1, '[{\"added\": {}}]', 18, 1),
(66, '2023-08-17 11:06:22.183128', '20', 'Nexxt', 2, '[{\"changed\": {\"fields\": [\"Imagen\"]}}]', 18, 1),
(67, '2023-08-17 11:07:18.446815', '18', 'Microsoft', 2, '[{\"changed\": {\"fields\": [\"Imagen\"]}}]', 18, 1),
(68, '2023-08-17 11:08:47.978211', '1', 'HP', 2, '[{\"changed\": {\"fields\": [\"Imagen\"]}}]', 18, 1),
(69, '2023-08-17 12:00:04.955937', '2', 'Lenovo', 2, '[{\"changed\": {\"fields\": [\"Imagen\"]}}]', 18, 1),
(70, '2023-08-17 12:00:58.908261', '3', 'Dell', 2, '[{\"changed\": {\"fields\": [\"Imagen\"]}}]', 18, 1),
(71, '2023-08-17 12:01:29.700214', '4', 'Acer', 2, '[{\"changed\": {\"fields\": [\"Imagen\"]}}]', 18, 1),
(72, '2023-08-17 12:02:07.783155', '5', 'Epson', 2, '[{\"changed\": {\"fields\": [\"Imagen\"]}}]', 18, 1),
(73, '2023-08-17 12:02:37.505293', '6', 'Canon', 2, '[{\"changed\": {\"fields\": [\"Imagen\"]}}]', 18, 1),
(74, '2023-08-17 12:03:16.725822', '6', 'Canon', 2, '[{\"changed\": {\"fields\": [\"Imagen\"]}}]', 18, 1),
(75, '2023-08-17 12:03:51.415581', '7', 'Brother', 2, '[{\"changed\": {\"fields\": [\"Imagen\"]}}]', 18, 1),
(76, '2023-08-17 12:04:49.748254', '8', 'Asus', 2, '[{\"changed\": {\"fields\": [\"Imagen\"]}}]', 18, 1),
(77, '2023-08-17 12:08:56.505029', '10', 'Kingston', 2, '[{\"changed\": {\"fields\": [\"Imagen\"]}}]', 18, 1),
(78, '2023-08-17 12:12:12.207879', '20', 'Nexxt', 2, '[{\"changed\": {\"fields\": [\"Imagen\"]}}]', 18, 1),
(79, '2023-08-17 12:12:12.291483', '20', 'Nexxt', 2, '[{\"changed\": {\"fields\": [\"Imagen\"]}}]', 18, 1),
(80, '2023-08-17 12:13:47.666974', '5', 'Epson', 2, '[{\"changed\": {\"fields\": [\"Imagen\"]}}]', 18, 1),
(81, '2023-08-17 12:15:44.419862', '5', 'Epson', 2, '[{\"changed\": {\"fields\": [\"Imagen\"]}}]', 18, 1),
(82, '2023-08-17 12:24:55.905317', '6', 'TECLADO LOGITECH PRO KEYBOARD RGB USB', 1, '[{\"added\": {}}]', 5, 1),
(83, '2023-08-17 12:27:05.872702', '7', 'Logitech G713 TKL Aurora Teclado Mecánico RGB Táctil - Blanco', 1, '[{\"added\": {}}]', 5, 1),
(84, '2023-08-17 12:30:17.899547', '8', 'Teclado Logitech KB-380', 1, '[{\"added\": {}}]', 5, 1),
(85, '2023-08-17 12:32:22.446856', '6', 'Microsoft', 1, '[{\"added\": {}}]', 14, 1),
(86, '2023-08-17 12:35:20.711948', '9', 'Teclado Microsoft Keyboard & Mouse Desktop 600 Spanish Black', 1, '[{\"added\": {}}]', 5, 1),
(87, '2023-08-17 12:41:02.488360', '10', 'Teclado Microsoft Keyboard & Mouse Desktop 600 Spanish Black', 1, '[{\"added\": {}}]', 5, 1),
(88, '2023-08-17 12:42:32.258281', '7', 'Genius', 1, '[{\"added\": {}}]', 14, 1),
(89, '2023-08-17 12:42:53.164631', '11', 'Teclado Genius Para Pc KB 118 usb Cableado Negro', 1, '[{\"added\": {}}]', 5, 1),
(90, '2023-08-17 12:45:07.155615', '12', 'Teclado de una mano Genius Smart KB-100 QWERTY español color negro', 1, '[{\"added\": {}}]', 5, 1),
(91, '2023-08-17 12:48:18.760406', '1', 'Accesorios de Computadora', 2, '[{\"changed\": {\"fields\": [\"Nombre\", \"Imagen\"]}}]', 15, 1),
(92, '2023-08-17 12:49:08.406368', '8', 'Epsom', 1, '[{\"added\": {}}]', 14, 1),
(93, '2023-08-17 12:49:28.633250', '13', 'Impresora Epson Ecotank L1250 Wifi USB', 1, '[{\"added\": {}}]', 5, 1),
(94, '2023-08-17 12:51:22.279142', '14', 'Impresora Epson WorkForce Pro WF-C5810 Imprime Escanea Copia Fax WiFi', 1, '[{\"added\": {}}]', 5, 1),
(95, '2023-08-17 12:53:38.775902', '15', 'Impresora Epson L4160 Wifi Duplex', 1, '[{\"added\": {}}]', 5, 1),
(96, '2023-08-17 13:19:56.436388', '9', 'Canon', 1, '[{\"added\": {}}]', 14, 1),
(97, '2023-08-17 13:21:07.565464', '16', 'Impresora CANON Multifuncional Inalámbrica de Tinta Continua PIXMA G7010 CON WIFI/ETHERNET Negro', 1, '[{\"added\": {}}]', 5, 1),
(98, '2023-08-17 13:22:15.018317', '17', 'Impresora Multifunción Canon Pixma G3110', 1, '[{\"added\": {}}]', 5, 1),
(99, '2023-08-17 13:23:19.179445', '18', 'Impresora multifuncional Canon Maxify GX7010', 1, '[{\"added\": {}}]', 5, 1),
(100, '2023-08-17 13:24:39.086408', '10', 'Brother', 1, '[{\"added\": {}}]', 14, 1),
(101, '2023-08-17 13:26:35.292551', '19', 'Impresora multifuncional Brother InkBenefit Tank DCPT720DW conexión inalámbrica e impresión duplex con tanques de tinta', 1, '[{\"added\": {}}]', 5, 1),
(102, '2023-08-17 13:28:10.292074', '20', 'IMPRESORA MULTIFUNCIONAL BROTHER DCP-T420W WIRELESS', 1, '[{\"added\": {}}]', 5, 1),
(103, '2023-08-17 13:29:34.795405', '21', 'Impresora BROTHER T720W + Sistema Continuo + Wifi', 1, '[{\"added\": {}}]', 5, 1),
(104, '2023-08-18 04:57:44.536717', '22', 'ouse inalámbrico Logitech M170 azul y negro', 1, '[{\"added\": {}}]', 5, 1),
(105, '2023-08-18 05:00:32.129912', '23', 'Mouse gamer inalámbrico Logitech G502 Lightspeed, bluetooth, 16000 dpi, 11 botones, recargable, luces RGB', 1, '[{\"added\": {}}]', 5, 1),
(106, '2023-08-18 05:02:13.059759', '24', ' MOUSE GAMING LOGITECH G502 HERO K/DA ( 910-006096 ) RGB WHITE/BLACK', 1, '[{\"added\": {}}]', 5, 1),
(107, '2023-08-18 05:12:25.042320', '25', 'MOUSE MICROSOFT INALÁMBRICO MORADO', 1, '[{\"added\": {}}]', 5, 1),
(108, '2023-08-18 05:13:39.745205', '26', 'Mouse Microsoft Mobile 4000 Inalámbrico Negro', 1, '[{\"added\": {}}]', 5, 1),
(109, '2023-08-18 05:15:58.374707', '27', 'Mouse Genius DX-110 BLACK', 1, '[{\"added\": {}}]', 5, 1),
(110, '2023-08-18 05:17:09.130655', '28', 'Mouse Bluetooth Genius Nx-7015 Chocolate', 1, '[{\"added\": {}}]', 5, 1),
(111, '2023-08-18 05:18:44.273184', '29', 'Mouse Genius Gaming Lightning Red X-G200 Ambidiestro DPI 1000 USB', 1, '[{\"added\": {}}]', 5, 1),
(112, '2023-08-18 05:23:38.697391', '30', 'Mouse Dx-110 Black', 1, '[{\"added\": {}}]', 5, 1),
(113, '2023-08-18 05:26:07.217680', '11', 'Acer', 1, '[{\"added\": {}}]', 14, 1),
(114, '2023-08-18 05:26:21.970674', '31', 'Notebook Acer Aspire Vero i7 16GB 512GB SSD 15.6 FHD W11 Gris', 1, '[{\"added\": {}}]', 5, 1),
(115, '2023-08-18 05:28:22.139989', '32', 'Notebook Acer Aspire 5 15.6 Gris Acero', 1, '[{\"added\": {}}]', 5, 1),
(116, '2023-08-18 05:31:34.827274', '33', 'LAPTOP CORE I5 ACER ASPIRE 5 A515-55-541A, 15.6\", I5 1035G1 3.60GHz, 12 GB + 32 OPTANE, 512 SSD, W10H, NEGRA NX.HSHAL.001', 1, '[{\"added\": {}}]', 5, 1),
(117, '2023-08-18 05:33:06.050907', '34', 'Gamer Lenovo Intel Core i7 RTX 3050 16GB 512GB SSD Ideapad Gaming 3i 12° Gen 15.6\'\'', 1, '[{\"added\": {}}]', 5, 1),
(118, '2023-08-18 05:35:50.186782', '35', 'NOTEBOOK DELL INSPIRON 15 3502 15.6\' LED HD CELERON N4020', 1, '[{\"added\": {}}]', 5, 1),
(119, '2023-08-18 05:37:43.703300', '36', 'Laptop Lenovo Intel Core i7 16GB 512GB Ideapad 3i 11° Gen 15.6\"', 1, '[{\"added\": {}}]', 5, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(20, 'admin', 'logentry'),
(22, 'auth', 'group'),
(21, 'auth', 'permission'),
(23, 'auth', 'user'),
(24, 'contenttypes', 'contenttype'),
(1, 'esupport', 'carrito'),
(15, 'esupport', 'categoriaproducto'),
(2, 'esupport', 'cliente'),
(13, 'esupport', 'comentarioproducto'),
(12, 'esupport', 'compra'),
(11, 'esupport', 'factura'),
(10, 'esupport', 'itemcarrito'),
(3, 'esupport', 'itempedido'),
(14, 'esupport', 'marcaproducto'),
(9, 'esupport', 'mensajechat'),
(4, 'esupport', 'metodopago'),
(17, 'esupport', 'oferta'),
(8, 'esupport', 'pedido'),
(16, 'esupport', 'perifericos'),
(5, 'esupport', 'producto'),
(18, 'esupport', 'proveedores'),
(19, 'esupport', 'proveedoresproducto'),
(7, 'esupport', 'ticketsoporte'),
(6, 'esupport', 'valoracionresena'),
(25, 'sessions', 'session');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2023-08-05 17:02:24.273222'),
(2, 'auth', '0001_initial', '2023-08-05 17:02:24.785411'),
(3, 'admin', '0001_initial', '2023-08-05 17:02:24.922405'),
(4, 'admin', '0002_logentry_remove_auto_add', '2023-08-05 17:02:24.932099'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2023-08-05 17:02:24.942161'),
(6, 'contenttypes', '0002_remove_content_type_name', '2023-08-05 17:02:25.015914'),
(7, 'auth', '0002_alter_permission_name_max_length', '2023-08-05 17:02:25.068663'),
(8, 'auth', '0003_alter_user_email_max_length', '2023-08-05 17:02:25.094206'),
(9, 'auth', '0004_alter_user_username_opts', '2023-08-05 17:02:25.104143'),
(10, 'auth', '0005_alter_user_last_login_null', '2023-08-05 17:02:25.160152'),
(11, 'auth', '0006_require_contenttypes_0002', '2023-08-05 17:02:25.166288'),
(12, 'auth', '0007_alter_validators_add_error_messages', '2023-08-05 17:02:25.172279'),
(13, 'auth', '0008_alter_user_username_max_length', '2023-08-05 17:02:25.215500'),
(14, 'auth', '0009_alter_user_last_name_max_length', '2023-08-05 17:02:25.240042'),
(15, 'auth', '0010_alter_group_name_max_length', '2023-08-05 17:02:25.265979'),
(16, 'auth', '0011_update_proxy_permissions', '2023-08-05 17:02:25.281936'),
(17, 'auth', '0012_alter_user_first_name_max_length', '2023-08-05 17:02:25.312668'),
(18, 'esupport', '0001_initial', '2023-08-05 17:02:26.471595'),
(19, 'esupport', '0002_producto_imagen', '2023-08-05 17:02:26.495115'),
(20, 'esupport', '0003_rename_categoriaproducto_marcaproducto_and_more', '2023-08-05 17:02:28.037624'),
(21, 'esupport', '0004_remove_cliente_user_cliente_correo_cliente_nombre', '2023-08-05 17:02:28.283085'),
(22, 'esupport', '0005_categoriaproducto_producto_categoria', '2023-08-05 17:02:28.379576'),
(23, 'esupport', '0006_alter_producto_categoria', '2023-08-05 17:02:28.517261'),
(24, 'esupport', '0007_categoriaproducto_imagen', '2023-08-05 17:02:28.532557'),
(25, 'esupport', '0008_periféricos', '2023-08-05 17:02:28.556096'),
(26, 'esupport', '0009_rename_periféricos_perifericos_producto_perifericos', '2023-08-05 17:02:28.647333'),
(27, 'esupport', '0010_oferta', '2023-08-05 17:02:28.719868'),
(28, 'esupport', '0011_oferta_nombreproducto', '2023-08-05 17:02:28.739536'),
(29, 'esupport', '0012_proveedores', '2023-08-05 17:02:28.763865'),
(30, 'esupport', '0013_proveedoresproducto_alter_proveedores_producto', '2023-08-05 17:02:28.879450'),
(31, 'sessions', '0001_initial', '2023-08-05 17:02:28.915417'),
(32, 'esupport', '0014_rename_producto_proveedores_productoproveedor', '2023-08-06 02:47:14.606053');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('gr1vvjpjoj1u15ued2xyu20ru1i3q574', '.eJxVjEEOgkAQBP-yZ7MZGFwGj955A5npXQQ1kLBwMv5dSTjotauqX67TbR26LaelG6O7uMKdfjdTPNK0g3jX6TZ7zNO6jOZ3xR80-3aO6Xk93L-DQfPwrRutztyLMZlESAqgJIEAcAlhC8SNoUQvTV0XahChighVSCBldu8P7fM39g:1qSKhF:x4-1m_WYSV9ddcVJ_nRhHC8yuqwk2IA_QCaVdB-hzag', '2023-08-19 17:04:09.202223');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `esupport_carrito`
--

CREATE TABLE `esupport_carrito` (
  `id` bigint(20) NOT NULL,
  `fecha_creacion` datetime(6) NOT NULL,
  `cliente_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `esupport_carrito`
--

INSERT INTO `esupport_carrito` (`id`, `fecha_creacion`, `cliente_id`) VALUES
(1, '2023-08-16 05:15:16.432326', 1),
(2, '2023-08-17 05:09:28.384285', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `esupport_categoriaproducto`
--

CREATE TABLE `esupport_categoriaproducto` (
  `id` bigint(20) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `imagen` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `esupport_categoriaproducto`
--

INSERT INTO `esupport_categoriaproducto` (`id`, `nombre`, `imagen`) VALUES
(1, 'Accesorios de Computadora', 'productos/Accesorios_de_Computadora.png'),
(2, 'Componentes de Hardware', 'productos/Componentes_de_Hardware_K9cBeIM.jpg'),
(3, 'Computadoras y Portátiles', 'productos/Computadoras_y_Portátiles_zozg43P.jpg'),
(4, 'Soluciones Empresariale', 'productos/solucion-empresarial_bWyS885.jpg'),
(5, 'Electrónica de Consumo', 'productos/Electrónica_de_Consumo_gTEyqGv.jpg'),
(6, 'Dispositivos Móviles', 'productos/Dispositivos_Móviles_tZyvnzR.jpg'),
(7, 'Dispositivos de entrada', 'productos/dispositivos_de_entrada.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `esupport_cliente`
--

CREATE TABLE `esupport_cliente` (
  `id` bigint(20) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `correo` varchar(254) DEFAULT NULL,
  `nombre` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `esupport_cliente`
--

INSERT INTO `esupport_cliente` (`id`, `direccion`, `telefono`, `correo`, `nombre`) VALUES
(1, 'Victor Larco', '917908089', 'yuri@gmail.com', 'Yuri'),
(2, 'vista alegre', '917908089', 'luigui@gmail.com', 'Luigui'),
(3, 'vista alegre', '917908089', 'juli@gmail.com', 'Juli'),
(4, 'vista alegre', '917908089', 'pedro@gmail.com', 'Pedro'),
(5, 'Victor Larco', '917908089', 'flor@gmail.com', 'Flor'),
(6, 'Victor Larco', '917908089', 'maria@gmail.com', 'Maria'),
(7, 'vista alegre', '917908088', 'mariaa@gmail.com', 'Maria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `esupport_comentarioproducto`
--

CREATE TABLE `esupport_comentarioproducto` (
  `id` bigint(20) NOT NULL,
  `contenido` longtext NOT NULL,
  `fecha_creacion` datetime(6) NOT NULL,
  `cliente_id` bigint(20) NOT NULL,
  `producto_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `esupport_compra`
--

CREATE TABLE `esupport_compra` (
  `id` bigint(20) NOT NULL,
  `cantidad` int(10) UNSIGNED NOT NULL CHECK (`cantidad` >= 0),
  `fecha_compra` datetime(6) NOT NULL,
  `cliente_id` bigint(20) NOT NULL,
  `producto_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `esupport_factura`
--

CREATE TABLE `esupport_factura` (
  `id` bigint(20) NOT NULL,
  `fecha_emision` datetime(6) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `cliente_id` bigint(20) NOT NULL,
  `metodo_pago_id` bigint(20) NOT NULL,
  `pedido_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `esupport_itemcarrito`
--

CREATE TABLE `esupport_itemcarrito` (
  `id` bigint(20) NOT NULL,
  `cantidad` int(10) UNSIGNED NOT NULL CHECK (`cantidad` >= 0),
  `carrito_id` bigint(20) NOT NULL,
  `producto_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `esupport_itempedido`
--

CREATE TABLE `esupport_itempedido` (
  `id` bigint(20) NOT NULL,
  `cantidad` int(10) UNSIGNED NOT NULL CHECK (`cantidad` >= 0),
  `pedido_id` bigint(20) NOT NULL,
  `producto_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `esupport_marcaproducto`
--

CREATE TABLE `esupport_marcaproducto` (
  `id` bigint(20) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `esupport_marcaproducto`
--

INSERT INTO `esupport_marcaproducto` (`id`, `nombre`) VALUES
(1, 'Apple'),
(2, 'Dell'),
(3, 'HP'),
(4, 'Lenovo'),
(5, 'Logitech'),
(6, 'Microsoft'),
(7, 'Genius'),
(8, 'Epsom'),
(9, 'Canon'),
(10, 'Brother'),
(11, 'Acer');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `esupport_mensajechat`
--

CREATE TABLE `esupport_mensajechat` (
  `id` bigint(20) NOT NULL,
  `contenido` longtext NOT NULL,
  `fecha_envio` datetime(6) NOT NULL,
  `emisor_id` int(11) NOT NULL,
  `receptor_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `esupport_metodopago`
--

CREATE TABLE `esupport_metodopago` (
  `id` bigint(20) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `esupport_oferta`
--

CREATE TABLE `esupport_oferta` (
  `id` bigint(20) NOT NULL,
  `descripcion` longtext NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  `descuento` decimal(5,2) NOT NULL,
  `producto_id` bigint(20) NOT NULL,
  `nombreProducto` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `esupport_oferta`
--

INSERT INTO `esupport_oferta` (`id`, `descripcion`, `fecha_inicio`, `fecha_fin`, `descuento`, `producto_id`, `nombreProducto`) VALUES
(1, 'w<4ya3', '2023-08-07', '2023-08-18', 60.00, 3, 'HP Pavilion x360');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `esupport_pedido`
--

CREATE TABLE `esupport_pedido` (
  `id` bigint(20) NOT NULL,
  `fecha_pedido` datetime(6) NOT NULL,
  `cliente_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `esupport_perifericos`
--

CREATE TABLE `esupport_perifericos` (
  `id` bigint(20) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` longtext NOT NULL,
  `imagen` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `esupport_perifericos`
--

INSERT INTO `esupport_perifericos` (`id`, `nombre`, `descripcion`, `imagen`) VALUES
(1, 'Teclados', 'egds', 'productos/teclado_8TfF2wW.jpg'),
(2, 'Impresoras', 'dvs<fe', 'productos/IMPRESORA_HP_ADVANTAGE_2775_DESKJET_INK_hsQnXx7.jpg'),
(3, 'Monitor', 'ewggrea', 'productos/Monitor.jpg'),
(4, 'Ratón (Mouse)', 'egwag', 'productos/Ratón_Mouse_fLfExKq.jpg'),
(5, 'Notebooks', 'wfw', 'productos/Apple_MacBook_Air.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `esupport_producto`
--

CREATE TABLE `esupport_producto` (
  `id` bigint(20) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `descripcion` longtext NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `stock` int(10) UNSIGNED NOT NULL CHECK (`stock` >= 0),
  `marca_id` bigint(20) NOT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `categoria_id` bigint(20) NOT NULL,
  `perifericos_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `esupport_producto`
--

INSERT INTO `esupport_producto` (`id`, `nombre`, `descripcion`, `precio`, `stock`, `marca_id`, `imagen`, `categoria_id`, `perifericos_id`) VALUES
(1, 'Apple MacBook Air', '34yw', 3449.00, 3, 1, 'productos/Apple_MacBook_Air_uMfme2n.jpg', 3, 5),
(2, 'Dell XPS 13', 'agreeyer', 12499.00, 3, 2, 'productos/Dell_XPS_13.jpg', 3, 5),
(3, 'HP Spectre x360', 'ewgawr', 12345.00, 4, 3, 'productos/HP_Spectre_x360.jpg', 3, 5),
(4, 'Lenovo ThinkPad X1 Carbon', 'gwrea', 12699.00, 3, 4, 'productos/Lenovo_ThinkPad_X1_Carbon.jpg', 3, 5),
(5, 'Logitech K380', 'rfq', 160.50, 3, 5, 'productos/Logitech_K380.png', 7, 1),
(6, 'TECLADO LOGITECH PRO KEYBOARD RGB USB', 'E&esupport te traen lo mejor en teclados para tus dispositivos. Inalambricos, cableados y gamer, siempre contigo.', 600.00, 2, 5, 'productos/TECLADO_LOGITECH_PRO_KEYBOARD_RGB_USB.png', 7, 1),
(7, 'Logitech G713 TKL Aurora Teclado Mecánico RGB Táctil - Blanco', 'De The Aurora Collection, el teclado Logitech G713 con cable, compacto, sin sección numérica, diseñado para ofrecer confort con el mullido reposamanos incluido. Totalmente equipado con etérea iluminación RGB y los interruptores mecánicos GX táctil. Disponible en Blanco White Mist. Accesorios de combinación de colores a la venta por separado.', 869.90, 2, 5, 'productos/logitech_g713_aurora_teclado_1_1.jpg', 7, 1),
(8, 'Teclado Logitech KB-380', 'd', 169.00, 3, 5, 'productos/Teclado_Logitech_KB-380.png', 7, 1),
(9, 'Teclado Microsoft Keyboard & Mouse Desktop 600 Spanish Black', 'y', 141.00, 3, 6, 'productos/microsoft-wired-keyboard-600-de.jpg', 7, 1),
(10, 'Teclado Microsoft Keyboard & Mouse Desktop 600 Spanish Black', 'd', 141.00, 2, 6, 'productos/MICROSOFT_5SH-00004.jpg', 7, 1),
(11, 'Teclado Genius Para Pc KB 118 usb Cableado Negro', 's', 69.00, 3, 7, 'productos/gsc_120314412_2638932_1.jpg', 7, 1),
(12, 'Teclado de una mano Genius Smart KB-100 QWERTY español color negro', 'Contiene teclado numérico.\r\nPantalla integrada.\r\nTecla cilíndrica.\r\nCon conector USB.\r\nMedidas: 440.51mm de ancho, 139.67mm de alto y 20.07mm de profundidad.\r\nLas imágenes pueden ser ilustrativas.', 60.00, 4, 7, 'productos/Contiene_teclado_numérico..png', 7, 1),
(13, 'Impresora Epson Ecotank L1250 Wifi USB', 'r', 780.00, 3, 8, 'productos/gsc_118152729_1995464_1.jpg', 1, 2),
(14, 'Impresora Epson WorkForce Pro WF-C5810 Imprime Escanea Copia Fax WiFi', 't', 2999.00, 4, 8, 'productos/Impresora_Epson_WorkForce_Pro_WF-C5810_Imprime_Escanea_Copia_Fax_WiFi.jpg', 1, 2),
(15, 'Impresora Epson L4160 Wifi Duplex', 'g', 1070.00, 3, 8, 'productos/Impresora_Epson_L4160_Wifi_Duplex.png', 1, 2),
(16, 'Impresora CANON Multifuncional Inalámbrica de Tinta Continua PIXMA G7010 CON WIFI/ETHERNET Negro', 'Tipo de impresión: Color\r\nTipo de inyección: Tinta\r\nConexión Bluetooth: No\r\nConexión WiFi: Sí\r\nEntradas USB: 1', 1699.00, 3, 9, 'productos/Impresora_CANON.jpg', 1, 2),
(17, 'Impresora Multifunción Canon Pixma G3110', 'Tipo de impresión: Color\r\nTipo de inyección: Tinta\r\nConexión Bluetooth: No\r\nConexión WiFi: Sí\r\nEntradas USB: 1', 769.00, 3, 9, 'productos/Impresora_Multifunción_Canon_Pixma_G3110.jpg', 1, 2),
(18, 'Impresora multifuncional Canon Maxify GX7010', '.', 2700.00, 3, 9, 'productos/Impresora_multifuncional_Canon_Maxify_GX7010.jpg', 1, 2),
(19, 'Impresora multifuncional Brother InkBenefit Tank DCPT720DW conexión inalámbrica e impresión duplex con tanques de tinta', 'Tecnología de impresión: Inyección\r\nCapacidad de papel: Bandeja de entrada de 150 hojas - Bypass de 1 hoja - ADF de hasta 20 hojas\r\nWi-Fi: Sí\r\nCopias múltiples: Hasta 99\r\nEscáner: Sí\r\nFotocopiadora: Sí\r\nImpresión doble cara: Sí\r\nFax: No', 1099.00, 3, 10, 'productos/Impresora_multifuncional_Brother_InkBenefit_.png', 1, 2),
(20, 'IMPRESORA MULTIFUNCIONAL BROTHER DCP-T420W WIRELESS', '.', 850.00, 4, 10, 'productos/gsc_121590828_3099942_1.jpg', 1, 2),
(21, 'Impresora BROTHER T720W + Sistema Continuo + Wifi', 'Multifuncional de inyección de tinta a color DCP-T720DW de la serie InkBenefit Tank con nuevo diseño de llenado de tinta automático que ayuda a reducir derrames. Impresión económica y de alta calidad para documentos comerciales, informes, fotos y más.', 1100.00, 3, 10, 'productos/DCP-T720DW-esis-2-600x595.png', 1, 2),
(22, 'ouse inalámbrico Logitech M170 azul y negro', 'Es inalámbrico.\r\nOrientación de la mano: ambidiestro.\r\nTipo de alimentación inalámbrica: pilas.\r\nPosee rueda de desplazamiento.\r\nCuenta con interruptor de ahorro de energía.\r\nCon sensor óptico.\r\nResolución de 1000dpi.', 62.50, 3, 5, 'productos/ouse_inalámbrico_Logitech_M170_azul_y_negro.png', 7, 4),
(23, 'Mouse gamer inalámbrico Logitech G502 Lightspeed, bluetooth, 16000 dpi, 11 botones, recargable, luces RGB', 'Color: Negro\r\nConectividad: Inalámbrico\r\nInterfaz: USB\r\nDetalle de DPI: 16000 dpi\r\nNúmero de botones: 11 botones\r\nIluminación: Sí\r\nCompatibilidad con sistema operativo: Windows 7 o posteriores, Mac OS X 10.11 o posteriores, Chrome OSTM y puertos USB\r\nVelocidad: >400 IPS', 599.00, 3, 5, 'productos/Mouse_gamer_inalámbrico_Logitech_G502.png', 7, 4),
(24, ' MOUSE GAMING LOGITECH G502 HERO K/DA ( 910-006096 ) RGB WHITE/BLACK', 'Mouse para juegos de alto desempeño Logitech G502 HERO Con HERO, nuestro mejor sensor, 11 botones programables, tecnología RGB LIGHTSYNC y peso ajustable.', 198.75, 4, 5, 'productos/mouse-gaming-logitech.jpg', 7, 4),
(25, 'MOUSE MICROSOFT INALÁMBRICO MORADO', 'Conexión: Inalámbrica (Bluetooth)\r\nRango de frecuencias: 2,4 GHz\r\nAlcance: Hasta 10 metros al aire libre; hasta 5 metros en oficina.\r\nCompatibilidad: Microsoft Windows 10/8.1\r\nTipo de Batería: 1 pila alcalina AA (incluida)\r\nMarca: Microsoft\r\nImágenes referenciales.', 69.90, 3, 6, 'productos/mouse-microsoft-inalambrico-morado.jpg', 7, 4),
(26, 'Mouse Microsoft Mobile 4000 Inalámbrico Negro', 'e', 139.00, 3, 6, 'productos/Mouse_Microsoft_Mobile_4000_Inalámbrico_Negro.jpg', 7, 4),
(27, 'Mouse Genius DX-110 BLACK', 'g', 19.90, 3, 7, 'productos/Mouse_Genius_DX-110_BLACK.png', 7, 4),
(28, 'Mouse Bluetooth Genius Nx-7015 Chocolate', 'e', 44.90, 3, 7, 'productos/Mouse_Bluetooth_Genius_Nx-7015_Chocolate.jpg', 7, 4),
(29, 'Mouse Genius Gaming Lightning Red X-G200 Ambidiestro DPI 1000 USB', 'd', 59.00, 3, 7, 'productos/Mouse_Genius_Gaming_Lightning_Red_X-G200_Ambidiestro_DPI_1000_USB.png', 7, 4),
(30, 'Mouse Dx-110 Black', 'd', 19.90, 4, 7, 'productos/Mouse_Dx-110_Black.jpg', 7, 4),
(31, 'Notebook Acer Aspire Vero i7 16GB 512GB SSD 15.6 FHD W11 Gris', 'd', 4299.00, 2, 11, 'productos/Notebook_Acer_Aspire_Vero_i7_16GB_512GB_SSD_15.6_FHD_W11_Gris.jpg', 3, 5),
(32, 'Notebook Acer Aspire 5 15.6 Gris Acero', 'c', 4359.00, 4, 11, 'productos/Notebook_Acer_Aspire_5_15.6_Gris_Acero.png', 3, 5),
(33, 'LAPTOP CORE I5 ACER ASPIRE 5 A515-55-541A, 15.6\", I5 1035G1 3.60GHz, 12 GB + 32 OPTANE, 512 SSD, W10H, NEGRA NX.HSHAL.001', '3', 3529.00, 3, 11, 'productos/Notebook_Acer_Aspire_5_15.6_Gris_Aceros.jpg', 3, 5),
(34, 'Gamer Lenovo Intel Core i7 RTX 3050 16GB 512GB SSD Ideapad Gaming 3i 12° Gen 15.6\'\'', 'Procesador: Intel\r\nModelo tarjeta de video: NVIDIA GeForce RTX 3050\r\nTamaño de la pantalla: 15.6 pulgadas\r\nDisco duro sólido: 512GB SSD\r\nNúcleos del procesador: Deca-Core', 5499.00, 3, 2, 'productos/Gamer_Lenovo_Intel_Core_i7_RTX_3050_16GB_512GB_SSD_Ideapad_Gaming_3i_12_Gen_15.6.jpg', 3, 5),
(35, 'NOTEBOOK DELL INSPIRON 15 3502 15.6\' LED HD CELERON N4020', 'Procesador: Intel Celeron\r\nMemoria RAM: 4GB\r\nDisco duro: 128 GB SSD\r\nTarjeta gráfica: INTEL UHD GRAPHICS 600\r\nTipo de disco duro: SSD', 3700.00, 3, 2, 'productos/NOTEBOOK_DELL_INSPIRON_15_3502_15.6_LED_HD_CELERON_N4020.png', 3, 5),
(36, 'Laptop Lenovo Intel Core i7 16GB 512GB Ideapad 3i 11° Gen 15.6\"', '2', 3699.00, 3, 4, 'productos/Laptop_Lenovo_Intel_Core_i7_16GB_512.jpg', 3, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `esupport_proveedores`
--

CREATE TABLE `esupport_proveedores` (
  `id` bigint(20) NOT NULL,
  `productoproveedor_id` bigint(20) DEFAULT NULL,
  `marca` varchar(100) NOT NULL,
  `imagen` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `esupport_proveedores`
--

INSERT INTO `esupport_proveedores` (`id`, `productoproveedor_id`, `marca`, `imagen`) VALUES
(1, 1, 'HP', 'productos/HP-Hewlett-Packard-Logo-PNG-Clipart.png'),
(2, 1, 'Lenovo', 'productos/Logo-Lenovo.png'),
(3, 1, 'Dell', 'productos/Dell_Logo.png'),
(4, 1, 'Acer', 'productos/Logo-Acer.png'),
(5, 2, 'Epson', 'productos/2560px-Epson_logo.png'),
(6, 2, 'Canon', 'productos/canon-logo-6.png'),
(7, 2, 'Brother', 'productos/Brother_logo.png'),
(8, 3, 'Asus', 'productos/Asus-Logo-Transparent-Image.png'),
(9, 3, 'Intel', 'productos/intel.png'),
(10, 4, 'Kingston', 'productos/Kingston2.png'),
(11, 4, 'Crucial', 'productos/Crucial.png'),
(12, 4, 'Team Group', 'productos/Team_Group.png'),
(13, 5, 'Wester digital', 'productos/Wester_digital.png'),
(14, 5, 'Seagate', 'productos/Seagate.png'),
(15, 5, 'Toshiba', 'productos/Toshiba.png'),
(16, 6, 'Intel', 'productos/intel_GP6SyGv.png'),
(17, 7, 'Logitech', 'productos/Logitech.png'),
(18, 7, 'Microsoft', 'productos/Microsoft-removebg-preview.png'),
(19, 7, 'Genius', 'productos/Genius.png'),
(20, 8, 'Nexxt', 'productos/Nexxt-removebg-preview231_zRkLy1p.png'),
(21, 8, 'Satra', 'productos/Satra.png'),
(22, 8, 'Panbduit', 'productos/Panbduit.png'),
(23, 8, 'Amp', 'productos/Amp.png'),
(24, 9, 'Forza', 'productos/forza.jpg'),
(25, 10, 'Klip Extreme', 'productos/imagen_2023-08-17_060418103-removebg-preview.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `esupport_proveedoresproducto`
--

CREATE TABLE `esupport_proveedoresproducto` (
  `id` bigint(20) NOT NULL,
  `producto` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `esupport_proveedoresproducto`
--

INSERT INTO `esupport_proveedoresproducto` (`id`, `producto`) VALUES
(1, 'Notebooks'),
(2, 'Impresoras'),
(3, 'Mainboard (placa madre)'),
(4, 'Memoria'),
(5, 'Discos duros'),
(6, 'Microprocesador'),
(7, 'Teclados y Mause'),
(8, 'Para Cableado'),
(9, 'Estabilizadores y supresor de picos'),
(10, 'Bolosos , Mochilas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `esupport_ticketsoporte`
--

CREATE TABLE `esupport_ticketsoporte` (
  `id` bigint(20) NOT NULL,
  `asunto` varchar(200) NOT NULL,
  `descripcion` longtext NOT NULL,
  `fecha_creacion` datetime(6) NOT NULL,
  `resuelto` tinyint(1) NOT NULL,
  `cliente_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `esupport_valoracionresena`
--

CREATE TABLE `esupport_valoracionresena` (
  `id` bigint(20) NOT NULL,
  `valoracion` int(10) UNSIGNED NOT NULL CHECK (`valoracion` >= 0),
  `resena` longtext NOT NULL,
  `fecha_creacion` datetime(6) NOT NULL,
  `cliente_id` bigint(20) NOT NULL,
  `producto_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indices de la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indices de la tabla `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indices de la tabla `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Indices de la tabla `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Indices de la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Indices de la tabla `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indices de la tabla `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indices de la tabla `esupport_carrito`
--
ALTER TABLE `esupport_carrito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `esupport_carrito_cliente_id_4ab843ea_fk_esupport_cliente_id` (`cliente_id`);

--
-- Indices de la tabla `esupport_categoriaproducto`
--
ALTER TABLE `esupport_categoriaproducto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `esupport_cliente`
--
ALTER TABLE `esupport_cliente`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `esupport_comentarioproducto`
--
ALTER TABLE `esupport_comentarioproducto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `esupport_comentariop_cliente_id_1813fded_fk_esupport_` (`cliente_id`),
  ADD KEY `esupport_comentariop_producto_id_1ec7dd61_fk_esupport_` (`producto_id`);

--
-- Indices de la tabla `esupport_compra`
--
ALTER TABLE `esupport_compra`
  ADD PRIMARY KEY (`id`),
  ADD KEY `esupport_compra_cliente_id_04130d33_fk_esupport_cliente_id` (`cliente_id`),
  ADD KEY `esupport_compra_producto_id_9f85e5a1_fk_esupport_producto_id` (`producto_id`);

--
-- Indices de la tabla `esupport_factura`
--
ALTER TABLE `esupport_factura`
  ADD PRIMARY KEY (`id`),
  ADD KEY `esupport_factura_cliente_id_9ffb2b19_fk_esupport_cliente_id` (`cliente_id`),
  ADD KEY `esupport_factura_metodo_pago_id_4d75fad8_fk_esupport_` (`metodo_pago_id`),
  ADD KEY `esupport_factura_pedido_id_aaeab3ae_fk_esupport_pedido_id` (`pedido_id`);

--
-- Indices de la tabla `esupport_itemcarrito`
--
ALTER TABLE `esupport_itemcarrito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `esupport_itemcarrito_carrito_id_fd46b260_fk_esupport_carrito_id` (`carrito_id`),
  ADD KEY `esupport_itemcarrito_producto_id_fc8a3872_fk_esupport_` (`producto_id`);

--
-- Indices de la tabla `esupport_itempedido`
--
ALTER TABLE `esupport_itempedido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `esupport_itempedido_pedido_id_7498305a_fk_esupport_pedido_id` (`pedido_id`),
  ADD KEY `esupport_itempedido_producto_id_64f7adf5_fk_esupport_producto_id` (`producto_id`);

--
-- Indices de la tabla `esupport_marcaproducto`
--
ALTER TABLE `esupport_marcaproducto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `esupport_mensajechat`
--
ALTER TABLE `esupport_mensajechat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `esupport_mensajechat_emisor_id_4fd3d954_fk_auth_user_id` (`emisor_id`),
  ADD KEY `esupport_mensajechat_receptor_id_083bb4f9_fk_auth_user_id` (`receptor_id`);

--
-- Indices de la tabla `esupport_metodopago`
--
ALTER TABLE `esupport_metodopago`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `esupport_oferta`
--
ALTER TABLE `esupport_oferta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `esupport_oferta_producto_id_a68ed32a_fk_esupport_producto_id` (`producto_id`);

--
-- Indices de la tabla `esupport_pedido`
--
ALTER TABLE `esupport_pedido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `esupport_pedido_cliente_id_4128baa1_fk_esupport_cliente_id` (`cliente_id`);

--
-- Indices de la tabla `esupport_perifericos`
--
ALTER TABLE `esupport_perifericos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `esupport_producto`
--
ALTER TABLE `esupport_producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `esupport_producto_marca_id_d1145d7d_fk_esupport_marcaproducto_id` (`marca_id`),
  ADD KEY `esupport_producto_categoria_id_f78a296b_fk_esupport_` (`categoria_id`),
  ADD KEY `esupport_producto_perifericos_id_66a68aea_fk_esupport_` (`perifericos_id`);

--
-- Indices de la tabla `esupport_proveedores`
--
ALTER TABLE `esupport_proveedores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `esupport_proveedores_producto_id_30eadaa3` (`productoproveedor_id`);

--
-- Indices de la tabla `esupport_proveedoresproducto`
--
ALTER TABLE `esupport_proveedoresproducto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `esupport_ticketsoporte`
--
ALTER TABLE `esupport_ticketsoporte`
  ADD PRIMARY KEY (`id`),
  ADD KEY `esupport_ticketsopor_cliente_id_9e6ee3ca_fk_esupport_` (`cliente_id`);

--
-- Indices de la tabla `esupport_valoracionresena`
--
ALTER TABLE `esupport_valoracionresena`
  ADD PRIMARY KEY (`id`),
  ADD KEY `esupport_valoracionr_cliente_id_a24a1b8e_fk_esupport_` (`cliente_id`),
  ADD KEY `esupport_valoracionr_producto_id_d767e706_fk_esupport_` (`producto_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT de la tabla `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT de la tabla `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `esupport_carrito`
--
ALTER TABLE `esupport_carrito`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `esupport_categoriaproducto`
--
ALTER TABLE `esupport_categoriaproducto`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `esupport_cliente`
--
ALTER TABLE `esupport_cliente`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `esupport_comentarioproducto`
--
ALTER TABLE `esupport_comentarioproducto`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `esupport_compra`
--
ALTER TABLE `esupport_compra`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `esupport_factura`
--
ALTER TABLE `esupport_factura`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `esupport_itemcarrito`
--
ALTER TABLE `esupport_itemcarrito`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `esupport_itempedido`
--
ALTER TABLE `esupport_itempedido`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `esupport_marcaproducto`
--
ALTER TABLE `esupport_marcaproducto`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `esupport_mensajechat`
--
ALTER TABLE `esupport_mensajechat`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `esupport_metodopago`
--
ALTER TABLE `esupport_metodopago`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `esupport_oferta`
--
ALTER TABLE `esupport_oferta`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `esupport_pedido`
--
ALTER TABLE `esupport_pedido`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `esupport_perifericos`
--
ALTER TABLE `esupport_perifericos`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `esupport_producto`
--
ALTER TABLE `esupport_producto`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `esupport_proveedores`
--
ALTER TABLE `esupport_proveedores`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `esupport_proveedoresproducto`
--
ALTER TABLE `esupport_proveedoresproducto`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `esupport_ticketsoporte`
--
ALTER TABLE `esupport_ticketsoporte`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `esupport_valoracionresena`
--
ALTER TABLE `esupport_valoracionresena`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Filtros para la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Filtros para la tabla `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Filtros para la tabla `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Filtros para la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Filtros para la tabla `esupport_carrito`
--
ALTER TABLE `esupport_carrito`
  ADD CONSTRAINT `esupport_carrito_cliente_id_4ab843ea_fk_esupport_cliente_id` FOREIGN KEY (`cliente_id`) REFERENCES `esupport_cliente` (`id`);

--
-- Filtros para la tabla `esupport_comentarioproducto`
--
ALTER TABLE `esupport_comentarioproducto`
  ADD CONSTRAINT `esupport_comentariop_cliente_id_1813fded_fk_esupport_` FOREIGN KEY (`cliente_id`) REFERENCES `esupport_cliente` (`id`),
  ADD CONSTRAINT `esupport_comentariop_producto_id_1ec7dd61_fk_esupport_` FOREIGN KEY (`producto_id`) REFERENCES `esupport_producto` (`id`);

--
-- Filtros para la tabla `esupport_compra`
--
ALTER TABLE `esupport_compra`
  ADD CONSTRAINT `esupport_compra_cliente_id_04130d33_fk_esupport_cliente_id` FOREIGN KEY (`cliente_id`) REFERENCES `esupport_cliente` (`id`),
  ADD CONSTRAINT `esupport_compra_producto_id_9f85e5a1_fk_esupport_producto_id` FOREIGN KEY (`producto_id`) REFERENCES `esupport_producto` (`id`);

--
-- Filtros para la tabla `esupport_factura`
--
ALTER TABLE `esupport_factura`
  ADD CONSTRAINT `esupport_factura_cliente_id_9ffb2b19_fk_esupport_cliente_id` FOREIGN KEY (`cliente_id`) REFERENCES `esupport_cliente` (`id`),
  ADD CONSTRAINT `esupport_factura_metodo_pago_id_4d75fad8_fk_esupport_` FOREIGN KEY (`metodo_pago_id`) REFERENCES `esupport_metodopago` (`id`),
  ADD CONSTRAINT `esupport_factura_pedido_id_aaeab3ae_fk_esupport_pedido_id` FOREIGN KEY (`pedido_id`) REFERENCES `esupport_pedido` (`id`);

--
-- Filtros para la tabla `esupport_itemcarrito`
--
ALTER TABLE `esupport_itemcarrito`
  ADD CONSTRAINT `esupport_itemcarrito_carrito_id_fd46b260_fk_esupport_carrito_id` FOREIGN KEY (`carrito_id`) REFERENCES `esupport_carrito` (`id`),
  ADD CONSTRAINT `esupport_itemcarrito_producto_id_fc8a3872_fk_esupport_` FOREIGN KEY (`producto_id`) REFERENCES `esupport_producto` (`id`);

--
-- Filtros para la tabla `esupport_itempedido`
--
ALTER TABLE `esupport_itempedido`
  ADD CONSTRAINT `esupport_itempedido_pedido_id_7498305a_fk_esupport_pedido_id` FOREIGN KEY (`pedido_id`) REFERENCES `esupport_pedido` (`id`),
  ADD CONSTRAINT `esupport_itempedido_producto_id_64f7adf5_fk_esupport_producto_id` FOREIGN KEY (`producto_id`) REFERENCES `esupport_producto` (`id`);

--
-- Filtros para la tabla `esupport_mensajechat`
--
ALTER TABLE `esupport_mensajechat`
  ADD CONSTRAINT `esupport_mensajechat_emisor_id_4fd3d954_fk_auth_user_id` FOREIGN KEY (`emisor_id`) REFERENCES `auth_user` (`id`),
  ADD CONSTRAINT `esupport_mensajechat_receptor_id_083bb4f9_fk_auth_user_id` FOREIGN KEY (`receptor_id`) REFERENCES `auth_user` (`id`);

--
-- Filtros para la tabla `esupport_oferta`
--
ALTER TABLE `esupport_oferta`
  ADD CONSTRAINT `esupport_oferta_producto_id_a68ed32a_fk_esupport_producto_id` FOREIGN KEY (`producto_id`) REFERENCES `esupport_producto` (`id`);

--
-- Filtros para la tabla `esupport_pedido`
--
ALTER TABLE `esupport_pedido`
  ADD CONSTRAINT `esupport_pedido_cliente_id_4128baa1_fk_esupport_cliente_id` FOREIGN KEY (`cliente_id`) REFERENCES `esupport_cliente` (`id`);

--
-- Filtros para la tabla `esupport_producto`
--
ALTER TABLE `esupport_producto`
  ADD CONSTRAINT `esupport_producto_categoria_id_f78a296b_fk_esupport_` FOREIGN KEY (`categoria_id`) REFERENCES `esupport_categoriaproducto` (`id`),
  ADD CONSTRAINT `esupport_producto_marca_id_d1145d7d_fk_esupport_marcaproducto_id` FOREIGN KEY (`marca_id`) REFERENCES `esupport_marcaproducto` (`id`),
  ADD CONSTRAINT `esupport_producto_perifericos_id_66a68aea_fk_esupport_` FOREIGN KEY (`perifericos_id`) REFERENCES `esupport_perifericos` (`id`);

--
-- Filtros para la tabla `esupport_proveedores`
--
ALTER TABLE `esupport_proveedores`
  ADD CONSTRAINT `esupport_proveedores_productoproveedor_id_e95485b5_fk_esupport_` FOREIGN KEY (`productoproveedor_id`) REFERENCES `esupport_proveedoresproducto` (`id`);

--
-- Filtros para la tabla `esupport_ticketsoporte`
--
ALTER TABLE `esupport_ticketsoporte`
  ADD CONSTRAINT `esupport_ticketsopor_cliente_id_9e6ee3ca_fk_esupport_` FOREIGN KEY (`cliente_id`) REFERENCES `esupport_cliente` (`id`);

--
-- Filtros para la tabla `esupport_valoracionresena`
--
ALTER TABLE `esupport_valoracionresena`
  ADD CONSTRAINT `esupport_valoracionr_cliente_id_a24a1b8e_fk_esupport_` FOREIGN KEY (`cliente_id`) REFERENCES `esupport_cliente` (`id`),
  ADD CONSTRAINT `esupport_valoracionr_producto_id_d767e706_fk_esupport_` FOREIGN KEY (`producto_id`) REFERENCES `esupport_producto` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
