-- Avery Moore & Jonathon Stoddart
-- Vet Clinic Database Definitions

-- Reset current tables

DROP TABLE IF EXISTS `Clients_Doctors`;
DROP TABLE IF EXISTS `Prescriptions`;
DROP TABLE IF EXISTS `Pets`;
DROP TABLE IF EXISTS `Clients`;
DROP TABLE IF EXISTS `Doctors`;

-- Initialize Clients table

CREATE TABLE `Clients` (
    `clientID` int UNIQUE NOT NULL AUTO_INCREMENT,
    `fname` varchar(255) NOT NULL,
    `lname` varchar(255) NOT NULL,
    `address` varchar(255),
    `phone` varchar(255) NOT NULL,
    `email` varchar(255),
    PRIMARY KEY (`clientID`)
);

-- Insert data into Clients

INSERT INTO `Clients` (`fname`, `lname`, `address`, `phone`, `email`)
VALUES ('Jonathon', 'Arbuckle', NULL, '111-111-1111', 'cooljon148@email.com'),
('Steve', 'Davidson', 'New York', '555-413-3821', 'SteveDave@email.com'),
('Lara', 'Croft', 'Croft Manor', '292-381-4929', 'lCroft@email.com');

-- Initialize Pets Table

CREATE TABLE `Pets` (
    `petID` int UNIQUE NOT NULL AUTO_INCREMENT,
    `name` varchar(255),
    `species` varchar(255) NOT NULL,
    `breed` varchar(255),
    `birthYear` int NOT NULL,
    `birthMonth` int,
    `birthDay` int,
    `weight` int,
    `sex` varchar(8) not NULL,
    `clientID` int NOT NULL,
    PRIMARY KEY (`petID`),
    FOREIGN KEY (`clientID`) REFERENCES `Clients`(`clientID`) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Insert data into Pets

INSERT INTO `Pets` (`name`, `species`, `breed`, `birthYear`, `birthMonth`, `birthDay`, `weight`, `sex`, `clientID`) 
VALUES ('Garfield', 'Cat', 'Tabby', 1978, 06, 12, 196, 'Male', 1), 
('Odie', 'Dog', 'Dachshund', 1978, 08, 08, 78, 'Male', 1),
('Daisy Mae', 'Dog', 'King Charles Spaniel', 2014, NULL, NULL, 80, 'Female', 3);

-- Initialize Doctors Table

CREATE TABLE `Doctors` (
    `doctorID` int UNIQUE NOT NULL AUTO_INCREMENT,
    `fname` varchar(255) NOT NULL,
    `lname` varchar(255) NOT NULL,
    `phone` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    PRIMARY KEY (`doctorID`)
);

-- Insert data into Doctors

INSERT INTO `Doctors` (`fname`, `lname`, `phone`, `email`)
VALUES ('Elizabeth', 'Wilson', '123-456-7789', 'lWilson@doctors.com'),
('Eli', 'Vance', '444-444-4444','eVance@doctors.com'),
('Samuel', 'Dodger', '391-282-4556', 'sDodger@doctors.com');

-- Initialize Prescriptions Table

CREATE TABLE `Prescriptions` (
	`prescriptionID` int UNIQUE NOT NULL AUTO_INCREMENT,
    `date` varchar(10) NOT NULL,
    `drug` varchar(255) NOT NULL,
    `dosage` varchar(255) NOT NULL,
    `petID` int not NULL,
    `doctorID` int not NULL,
    PRIMARY KEY (`prescriptionID`),
    FOREIGN KEY (`petID`) REFERENCES `Pets`(`petID`) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (`doctorID`) REFERENCES `Doctors`(`doctorID`) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Insert data into Prescriptions
INSERT INTO `Prescriptions` (`date`, `drug`, `dosage`, `petID`, `doctorID`)
VALUES ('02/22/2022', 'Diet Kibble', '2 Cups', 1, 1),
('03/04/1984', 'Flea Meds', '2 mgs', 2, 2),
('08/17/2019', 'Albuterol', '4 mgs', 3, 3);

-- Initialize Clients_Doctors Table

CREATE TABLE `Clients_Doctors` (
	`clientID` int NOT NULL,
    `doctorID` int NOT NULL,
    FOREIGN KEY (`clientID`) REFERENCES `Clients`(`clientID`) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (`doctorID`) REFERENCES `Doctors`(`doctorID`) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Inser data into Clients_Doctors
INSERT INTO `Clients_Doctors` VALUES (1, 1),
(2, 2),
(3, 3);
