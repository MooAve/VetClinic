-- Avery Moore & Jonathon Stoddart
-- Vet Clinic Database Manipulation queries
-- colon : character used to denote the variables that will have data from the backend programming language


-- Pets --
-- get all Pets to populate the 'View All' Pets table
SELECT 
    name, 
    species, 
    breed, 
    sex, 
    birthYear, 
    birthMonth, 
    birthDay, 
    weight, 
    CONCAT(Clients.fname, " ", Clients.lname) 
FROM Pets 
INNER JOIN Clients 
    ON clientID = Clients.clientID

-- get Pets that match a search query to populate the 'Search' Pets table
SELECT
    SELECT 
    name, 
    species, 
    breed, 
    sex, 
    birthYear, 
    birthMonth, 
    birthDay, 
    weight, 
    CONCAT(Clients.fname, " ", Clients.lname) 
FROM Pets 
INNER JOIN Clients 
    ON clientID = Clients.clientID
WHERE
    :nameInput IS NULL OR name = :nameInput
    AND :speciesInput IS NULL OR species = :speciesInput
    AND :breedInput IS NULL OR breed = :breedInput
    AND :sexInput IS NULL OR sex = :sexInput
    AND :birthYearInput IS NULL OR birthYear = :birthYearInput
    AND :birthMonthInput IS NULL OR birthMonth = :birthMonthInput
    AND :birthDayInput IS NULL OR birthDay = :birthDayInput
    AND :weightInput IS NULL OR weight = :weightInput
    AND :clientFNameInput IS NULL OR Clients.fname = :clientFNameInput
    AND :clientLNameInput IS NULL OR Clients.lname = :clientLNameInput

-- get a single pet's data for the Update Pet form
SELECT
    name, 
    species, 
    breed, 
    sex, 
    birthYear, 
    birthMonth, 
    birthDay, 
    weight, 
    clientID
FROM Pets 
WHERE petID = :petID_selected_from_browse_pets_page

-- add a new pet
INSERT INTO Pets (name, species, breed, sex, birthYear, birthMonth, birthDay, weight, clientID)
VALUES (:nameInput, :speciesInput, :breedInput, :sexInput, :birthYearInput, :birthMonthInput, :birthDayInput, :weightInput, :clientIDInput)

-- update a pet's data based on submission of the Update Pet form
UPDATE Pets SET
    name = :nameInput,
    species = :speciesInput,
    breed = :breedInput,
    sex = :sexInput,
    birthYear = :birthYearInput,
    birthMonth = :birthMonthInput,
    birthDay = :birthDayInput,
    weight = :weightInput,
    clientID = :clientIDInput
WHERE petID = :petID_selected_from_browse_pets_page

-- delete a pet
DELETE FROM Pets WHERE petID = :petID_selected_from_browse_pets_page


-- Clients --
-- get all Clients to populate the 'View All' Clients table
SELECT 
    fname, 
    lname, 
    address, 
    phone, 
    email 
FROM Clients

-- get Clients that match a search query to populate the 'Search' Clients table
SELECT 
    fname, 
    lname, 
    address, 
    phone, 
    email 
FROM Clients
WHERE
    :fnameInput IS NULL OR fname = :fnameInput
    AND :lnameInput IS NULL OR lname = :lnameInput
    AND :addressInput IS NULL OR address = :addressInput
    AND :phoneInput IS NULL OR phone = :phoneInput
    AND :emailInput IS NULL OR email = :emailInput

-- get a single client's data for the Update Client form
SELECT 
    fname, 
    lname, 
    address, 
    phone, 
    email 
FROM Clients 
WHERE clientID = :clientID_selected_from_browse_clients_page

-- add a new client
INSERT INTO Clients (fname, lname, address, phone, email)
VALUES (:fnameInput, :lnameInput, :addressInput, :phoneInput, :emailInput)

-- update a client's data based on submission of the Update Client form
UPDATE Clients SET
    fname = :fnameInput,
    lname = :lnameInput,
    address = :addressInput,
    phone = :phoneInput,
    email = :emailInput
WHERE clientID = :clientID_selected_from_browse_clients_page

-- delete a client
DELETE FROM Clients WHERE clientID = :clientID_selected_from_browse_clients_page
DELETE FROM Clients_Doctors WHERE clientID = :clientID_selected_from_browse_clients_page


-- Prescriptions --
-- get all Prescriptions to populate the 'View All' Prescriptions Table
SELECT 
    date, 
    drug, 
    dosage, 
    CONCAT(Doctors.fname, " ", Doctors.lname), 
    Pets.name 
FROM Prescriptions
INNER JOIN Doctors
    ON doctorID = Doctors.doctorID
INNER JOIN Pets
    ON petID = Pets.planet_id

-- get Prescriptions that match a search query to populate the 'Search' Prescriptions table
SELECT 
    date, 
    drug, 
    dosage, 
    CONCAT(Doctors.fname, " ", Doctors.lname), 
    Pets.name 
FROM Prescriptions
INNER JOIN Doctors
    ON doctorID = Doctors.doctorID
INNER JOIN Pets
    ON petID = Pets.planet_id
WHERE
    :dateInput IS NULL OR date = :dateInput
    AND :drugInput IS NULL OR drug = :drugInput
    AND :dosageInput IS NULL OR dosage = :dosageInput
    AND :doctorFNameInput IS NULL OR Doctors.fname = :doctorFNameInput
    AND :doctorLNameInput IS NULL OR Doctors.lname = :doctorLNameInput
    AND :petNameInput IS NULL OR Pets.name = :petNameInput

-- get a single prescription's data for the Update Prescription form
SELECT 
    date, 
    drug, 
    dosage, 
    doctorID,
    petID
FROM Prescriptions 
WHERE prescriptionID = :prescriptionID_selected_from_browse_prescriptions_page

-- add a new prescription
INSERT INTO Prescriptions (date, drug, dosage, doctorID, petID)
VALUES (:dateInput, :drugInput, :dosageInput, :doctorIDInput, :petIDInput)

-- update a prescription's data based on submission of the Update Prescription form
UPDATE Prescriptions SET
    date = :dateInput,
    drug = :drugInput,
    dosage = :dosageInput,
    doctorID = :doctorIDInput,
    petID = :petIDInput
WHERE prescriptionID = :prescriptionID_selected_from_browse_prescriptions_page

-- delete a prescription
DELETE FROM Prescriptions WHERE prescriptionID = :prescriptionID_selected_from_browse_prescriptions_page


-- Doctors --
-- get all Doctors to populate the 'View All' Doctors Table
SELECT
    fname,
    lname,
    phone,
    email
FROM Doctors

-- get Doctors that match a search query to populate the 'Search' Doctors table
SELECT
    fname,
    lname,
    phone,
    email
FROM Doctors
WHERE
    :fnameInput IS NULL OR fname = :fnameInput
    AND :lnameInput IS NULL OR lname = :lnameInput
    AND :phoneInput IS NULL OR phone = :phoneInput
    AND :emailInput IS NULL OR email = :emailInput

-- get a single doctor's data for the Update Doctor form
SELECT
    fname,
    lname,
    phone,
    email
FROM Doctors 
WHERE doctorID = :doctorID_selected_from_browse_doctors_page

-- add a new doctor
INSERT INTO Doctors (fname, lname, phone, email)
VALUES (:fnameInput, :lnameInput, :phoneInput, :emailInput)

-- update a doctor's data based on submission of the Update Doctor form
UPDATE Doctors SET
    fname = :fnameInput,
    lname = :lnameInput,
    phone = :phoneInput,
    email = :emailInput
WHERE doctorID = :doctorID_selected_from_browse_doctors_page

-- delete a doctor
DELETE FROM Doctors where doctorID = :doctorID_selected_from_browse_doctors_page
DELETE FROM Clients_Doctors where doctorID = :doctorID_selected_from_browse_doctors_page


-- Clients_Doctors --
-- get all Clients_Doctors to populate the 'View All' Clients_Doctors Table
SELECT
    CONCAT(Clients.fname, " ", Clients.lname),
    CONCAT(Doctors.fname, " ", Clients.lname)
FROM Clients_Doctors
INNER JOIN Clients
    ON clientID = Clients.clientID
INNER JOIN Doctors
    ON doctorID = Doctors.doctorID

-- get Clients_Doctors that match a search query to populate the 'Search' Clients_Doctors table
SELECT
    CONCAT(Clients.fname, " ", Clients.lname),
    CONCAT(Doctors.fname, " ", Clients.lname)
FROM Clients_Doctors
INNER JOIN Clients
    ON clientID = Clients.clientID
INNER JOIN Doctors
    ON doctorID = Doctors.doctorID
WHERE
    :clientFNameInput IS NULL OR Clients.fname = :clientFNameInput
    AND :clientLNameInput IS NULL OR Clients.lname = :clientLNameInput
    AND :doctorFNameInput IS NULL OR Doctors.fname = :doctorFNameInput
    AND :doctorLNameInput IS NULL OR Doctors.lname = :doctorLNameInput

-- get a single Clients_Doctors' data for the Update Clients_Doctors relationship page
SELECT
    clientID,
    doctorID
FROM Clients_Doctors 
WHERE clientID = :clientID_selected_from_browse_Clients_Doctors_page
AND doctorID = :doctorID_selected_from_browse_Clients_Doctors_page

-- add a Clients_Doctors relationship
INSERT INTO Clients_Doctors (clientID, doctorID)
VALUES (:clientIDInput, :doctorIDInput)

-- update a Clients_Doctors relationship's data based on submission of the Update Clients_Doctors form
UPDATE Clients_Doctors SET
    clientID = :clientID_selected_from_browse_Clients_Doctors_page
    doctorID = :doctorID_selected_from_browse_Clients_Doctors_page

-- delete a Clients_Doctors relationship
DELETE FROM Clients_Doctors 
WHERE clientID = :clientID_selected_from_browse_Clients_Doctors_page
AND doctorID = :doctorID_selected_from_browse_Clients_Doctors_page
