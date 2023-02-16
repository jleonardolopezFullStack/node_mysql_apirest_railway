CREATE DATABASE IF NOT EXISTS companydb

USE companydb;

CREATE TABLE employee (id INT(11) NOT NULL AUTO_INCREMENT, name VARCHAR(45), salary INT(5) DEFAULT NULL, primary key (id))



INSERT INTO employee VALUES
(1, 'joe', 1000),
(2, 'Herny', 2000),
(3, 'Sam', 2500),
(4, 'Max', 1500)