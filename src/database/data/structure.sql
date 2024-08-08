DROP DATABASE IF EXISTS mtgsinglesdfe;

CREATE DATABASE mtgsinglesdfe;
USE mtgsinglesdfe;

CREATE TABLE cards  (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    effect TEXT,
    price DECIMAL(10, 2) NOT NULL,
    cost VARCHAR(255) NOT NULL,
    stock VARCHAR(255) NOT NULL,
    on_sale TINYINT(1),
    new TINYINT(1),
    featured TINYINT(1),
    front_img VARCHAR(255),
    flip_img VARCHAR (255),
    colors VARCHAR (255)
);

CREATE TABLE sealed  (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock VARCHAR(255) NOT NULL,
    on_sale TINYINT(1),
    new TINYINT(1),
    featured TINYINT(1),
    commander TINYINT(1),
    modern TINYINT(1),
    img VARCHAR (255),
    color VARCHAR (255)
);