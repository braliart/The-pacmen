-- Inserts tabla Paciente
INSERT INTO Paciente (nombre, apellido_paterno, apellido_materno, fecha_nacimiento, correo, direccion, telefono, alergias, fumador, se_droga, alcohol)
VALUES 
('Juan', 'Pérez', 'Gómez', '1985-04-12', 'juan.perez@gmail.com', 'Calle Falsa 123', '5551234567', 'Penicilina', FALSE, 'No', TRUE),
('María', 'Lopez', 'Hernández', '1990-08-25', 'maria.lopez@example.com', 'Avenida Central 456', '5552345678', 'Ninguna', TRUE, 'No', FALSE),
('Carlos', 'Ramírez', 'García', '1982-03-15', 'carlos.ramirez@gmail.com', 'Calle Sur 789', '5553456789', 'Polen', FALSE, 'Sí', TRUE),
('Ana', 'Martínez', 'Sánchez', '1993-06-07', 'ana.martinez@example.com', 'Calle Norte 321', '5554567890', 'Gluten', FALSE, 'No', FALSE),
('Luis', 'Hernández', 'Pérez', '1978-09-18', 'luis.hernandez@gmail.com', 'Avenida Este 654', '5555678901', 'Lácteos', TRUE, 'Sí', TRUE),
('Laura', 'González', 'Rodríguez', '1987-11-22', 'laura.gonzalez@example.com', 'Calle Oeste 987', '5556789012', 'Mariscos', FALSE, 'No', TRUE),
('Pedro', 'Mendoza', 'Flores', '1995-01-10', 'pedro.mendoza@gmail.com', 'Boulevard Sur 654', '5557890123', 'Polvo', TRUE, 'No', TRUE),
('Sofía', 'Díaz', 'Moreno', '1992-05-30', 'sofia.diaz@example.com', 'Calle Real 789', '5558901234', 'Ninguna', FALSE, 'No', FALSE),
('Diego', 'Cruz', 'Vargas', '1988-12-15', 'diego.cruz@gmail.com', 'Avenida Principal 321', '5559012345', 'Medicamentos', TRUE, 'Sí', TRUE),
('Valeria', 'Ortiz', 'Romero', '1989-07-02', 'valeria.ortiz@example.com', 'Calle Secundaria 654', '5550123456', 'Frutas', FALSE, 'No', TRUE),
('Miguel', 'Chávez', 'Alvarez', '1981-11-09', 'miguel.chavez@gmail.com', 'Plaza Mayor 456', '5551230987', 'Ninguna', TRUE, 'No', TRUE),
('Claudia', 'Castro', 'Pineda', '1994-03-23', 'claudia.castro@example.com', 'Calle Lateral 789', '5552341098', 'Polen', FALSE, 'No', FALSE),
('Roberto', 'Morales', 'Salinas', '1979-10-17', 'roberto.morales@gmail.com', 'Avenida Norte 123', '5553452109', 'Mariscos', TRUE, 'Sí', TRUE),
('Patricia', 'Reyes', 'Campos', '1991-04-08', 'patricia.reyes@example.com', 'Calle Principal 456', '5554563210', 'Medicamentos', FALSE, 'No', FALSE),
('Ricardo', 'Vega', 'Maldonado', '1983-02-12', 'ricardo.vega@gmail.com', 'Calle Sur 987', '5555674321', 'Gluten', TRUE, 'Sí', TRUE),
('Gabriela', 'Serrano', 'Rojas', '1996-09-24', 'gabriela.serrano@example.com', 'Avenida Este 789', '5556785432', 'Lácteos', FALSE, 'No', TRUE),
('David', 'Ramos', 'Peña', '1990-11-30', 'david.ramos@gmail.com', 'Calle Norte 654', '5557896543', 'Ninguna', TRUE, 'No', FALSE),
('Andrea', 'Torres', 'Navarro', '1985-06-05', 'andrea.torres@example.com', 'Calle Real 321', '5558907654', 'Penicilina', FALSE, 'No', TRUE),
('Jorge', 'Vázquez', 'Aguilar', '1977-08-20', 'jorge.vazquez@gmail.com', 'Avenida Oeste 456', '5559018765', 'Polvo', TRUE, 'Sí', TRUE),
('Elena', 'Luna', 'Mejía', '1993-12-12', 'elena.luna@example.com', 'Calle Central 123', '5550129876', 'Frutas', FALSE, 'No', TRUE);


-- Inserts a tabla Receta
INSERT INTO Receta (id_paciente, fecha, diagnostico, doctor, cedula_profesional, direccion)
VALUES 
(1, '2024-01-15', 'Gripe común', 'Dr. Juan Pérez', '123456789', 'Hospital General 123'),
(2, '2024-02-05', 'Alergia estacional', 'Dra. María González', '987654321', 'Clínica Central 456'),
(3, '2024-03-10', 'Dolor de cabeza crónico', 'Dr. Carlos Ramírez', '135792468', 'Consultorio Privado 789'),
(4, '2024-04-22', 'Hipertensión arterial', 'Dra. Ana Martínez', '246813579', 'Hospital del Norte 321'),
(5, '2024-05-30', 'Infección de garganta', 'Dr. Luis Hernández', '369258147', 'Clínica Médica 654'),
(6, '2024-06-18', 'Dolor de espalda', 'Dra. Laura González', '987123654', 'Centro de Salud 987'),
(7, '2024-07-12', 'Bronquitis aguda', 'Dr. Pedro Mendoza', '741852963', 'Hospital del Sur 654'),
(8, '2024-08-01', 'Infección urinaria', 'Dra. Sofía Díaz', '852963741', 'Consultorio Urbano 321'),
(9, '2024-09-08', 'Gastritis', 'Dr. Diego Cruz', '951753852', 'Clínica Familiar 654'),
(10, '2024-10-22', 'Artritis reumatoide', 'Dra. Valeria Ortiz', '753159852', 'Hospital Especializado 987'),
(11, '2024-11-05', 'Fractura de tobillo', 'Dr. Miguel Chávez', '321654987', 'Urgencias Médicas 456'),
(12, '2024-12-19', 'Resfriado común', 'Dra. Claudia Castro', '159753486', 'Clínica Los Pinos 789'),
(13, '2024-01-03', 'Sinusitis', 'Dr. Roberto Morales', '456987123', 'Clínica Médica del Este 321'),
(14, '2024-02-28', 'Otitis', 'Dra. Patricia Reyes', '123789456', 'Centro Médico Integral 456'),
(15, '2024-03-18', 'Lumbalgia', 'Dr. Ricardo Vega', '654321987', 'Clínica Norte 789'),
(16, '2024-04-09', 'Dermatitis atópica', 'Dra. Gabriela Serrano', '789654123', 'Centro Médico del Sur 654'),
(17, '2024-05-25', 'Hipotiroidismo', 'Dr. David Ramos', '951357852', 'Hospital General 123'),
(18, '2024-06-30', 'Esclerosis múltiple', 'Dra. Andrea Torres', '147258369', 'Consultorio Especializado 987'),
(19, '2024-07-22', 'Apendicitis', 'Dr. Jorge Vázquez', '357159852', 'Centro de Cirugía 654'),
(20, '2024-08-10', 'Asma', 'Dra. Elena Luna', '159753246', 'Clínica del Aire 321');
(5, '2024-01-22', 'Cáncer de pulmón', 'Dr. Juan Pérez', '123456789', 'Hospital Oncológico 123'),
(12, '2024-02-10', 'Insuficiencia renal crónica', 'Dra. María González', '987654321', 'Clínica de Nefrología 456'),
(18, '2024-03-05', 'Leucemia', 'Dr. Carlos Ramírez', '135792468', 'Hospital General de Hematología 789'),
(7, '2024-04-17', 'Esclerosis lateral amiotrófica (ELA)', 'Dra. Ana Martínez', '246813579', 'Centro Neurológico 321'),
(1, '2024-05-23', 'Enfermedad de Parkinson', 'Dr. Luis Hernández', '369258147', 'Hospital Neurológico 654'),
(19, '2024-06-12', 'Fibrosis quística', 'Dra. Laura González', '987123654', 'Hospital de Especialidades 987'),
(3, '2024-07-19', 'Cirrosis hepática', 'Dr. Pedro Mendoza', '741852963', 'Hospital de Gastroenterología 654'),
(8, '2024-08-02', 'Accidente cerebrovascular (ACV)', 'Dra. Sofía Díaz', '852963741', 'Clínica Neurológica 321'),
(15, '2024-09-10', 'Insuficiencia cardíaca congestiva', 'Dr. Diego Cruz', '951753852', 'Hospital Cardiológico 654'),
(4, '2024-10-29', 'Enfermedad pulmonar obstructiva crónica (EPOC)', 'Dra. Valeria Ortiz', '753159852', 'Centro Respiratorio 987'),
(9, '2024-11-12', 'Cáncer de páncreas', 'Dr. Miguel Chávez', '321654987', 'Hospital Oncológico del Sur 456'),
(2, '2024-12-01', 'Lupus eritematoso sistémico', 'Dra. Claudia Castro', '159753486', 'Clínica Inmunológica 789'),
(14, '2024-01-18', 'Esquizofrenia', 'Dr. Roberto Morales', '456987123', 'Centro Psiquiátrico 321'),
(11, '2024-02-28', 'Enfermedad de Crohn', 'Dra. Patricia Reyes', '123789456', 'Clínica de Gastroenterología 456'),
(20, '2024-03-22', 'Cáncer de mama', 'Dr. Ricardo Vega', '654321987', 'Hospital Oncológico del Norte 789'),
(16, '2024-04-15', 'Enfermedad de Alzheimer', 'Dra. Gabriela Serrano', '789654123', 'Centro Neurológico del Sur 654'),
(6, '2024-05-09', 'Esclerodermia', 'Dr. David Ramos', '951357852', 'Hospital de Reumatología 123'),
(10, '2024-06-30', 'Miastenia gravis', 'Dra. Andrea Torres', '147258369', 'Clínica Neuromuscular 987'),
(13, '2024-07-20', 'Mieloma múltiple', 'Dr. Jorge Vázquez', '357159852', 'Hospital Oncológico Integral 654'),
(17, '2024-08-14', 'Hepatitis C crónica', 'Dra. Elena Luna', '159753246', 'Clínica Hepatológica 321');

--Inserts a tabla medicamento
INSERT INTO Medicamento (nombre, sustancia)
VALUES
-- Medicamentos para el Cáncer de pulmón
('Keytruda', 'Pembrolizumab'),
('Alimta', 'Pemetrexed'),
('Tarceva', 'Erlotinib'),
('Opdivo', 'Nivolumab'),
('Avastin', 'Bevacizumab'),
-- Medicamentos para Insuficiencia renal crónica
('Epogen', 'Epoetina alfa'),
('PhosLo', 'Calcio acetato'),
('Renvela', 'Sevelamer'),
('Sensipar', 'Cinacalcet'),
('Venofer', 'Hierro sacarosa'),
-- Medicamentos para Leucemia
('Gleevec', 'Imatinib'),
('Sprycel', 'Dasatinib'),
('Tasigna', 'Nilotinib'),
('Blincyto', 'Blinatumomab'),
('Venclexta', 'Venetoclax'),
-- Medicamentos para Esclerosis lateral amiotrófica (ELA)
('Rilutek', 'Riluzol'),
('Radicava', 'Edaravone'),
('Baclofen', 'Baclofeno'),
('Tizanidine', 'Tizanidina'),
('Neudexta', 'Dextrometorfano'),
-- Medicamentos para Enfermedad de Parkinson
('Sinemet', 'Carbidopa/Levodopa'),
('Requip', 'Ropinirol'),
('Mirapex', 'Pramipexol'),
('Azilect', 'Rasagilina'),
('Neupro', 'Rotigotina'),
-- Medicamentos para Fibrosis quística
('Kalydeco', 'Ivacaftor'),
('Orkambi', 'Lumacaftor/Ivacaftor'),
('Pulmozyme', 'Dornasa alfa'),
('Tobi', 'Tobramicina'),
('Trikafta', 'Elexacaftor/Tezacaftor/Ivacaftor'),
-- Medicamentos para Cirrosis hepática
('Lasix', 'Furosemida'),
('Spiriva', 'Espironolactona'),
('Xifaxan', 'Rifaximina'),
('Lactulosa', 'Lactulosa'),
('Propranolol', 'Propranolol'),
-- Medicamentos para Accidente cerebrovascular (ACV)
('Aspirina', 'Ácido acetilsalicílico'),
('Plavix', 'Clopidogrel'),
('Aggrenox', 'Ácido acetilsalicílico/Dipiridamol'),
('Coumadin', 'Warfarina'),
('Eliquis', 'Apixaban'),
-- Medicamentos para Insuficiencia cardíaca congestiva
('Coreg', 'Carvedilol'),
('Entresto', 'Sacubitril/Valsartán'),
('Lasix', 'Furosemida'),
('Aldactone', 'Espironolactona'),
('Corlanor', 'Ivabradina'),
-- Medicamentos para Enfermedad pulmonar obstructiva crónica (EPOC)
('Spiriva', 'Tiotropio'),
('Symbicort', 'Budesonida/Formoterol'),
('Advair', 'Fluticasona/Salmeterol'),
('Breo Ellipta', 'Fluticasona/Vilanterol'),
('Daliresp', 'Roflumilast'),
-- Medicamentos para Cáncer de páncreas
('Gemzar', 'Gemcitabina'),
('Abraxane', 'Paclitaxel'),
('Tarceva', 'Erlotinib'),
('Folfirinox', 'Fluorouracilo/Irinotecan/Oxaliplatino'),
('Onivyde', 'Irinotecan liposomal'),
-- Medicamentos para Lupus eritematoso sistémico
('Plaquenil', 'Hidroxicloroquina'),
('Benlysta', 'Belimumab'),
('Cellcept', 'Micofenolato mofetil'),
('Imuran', 'Azatioprina'),
('Prednisona', 'Prednisona'),
-- Medicamentos para Esquizofrenia
('Zyprexa', 'Olanzapina'),
('Seroquel', 'Quetiapina'),
('Risperdal', 'Risperidona'),
('Abilify', 'Aripiprazol'),
('Clozaril', 'Clozapina'),
-- Medicamentos para Enfermedad de Crohn
('Humira', 'Adalimumab'),
('Remicade', 'Infliximab'),
('Entyvio', 'Vedolizumab'),
('Imuran', 'Azatioprina'),
('Asacol', 'Mesalamina'),
-- Medicamentos para Cáncer de mama
('Tamoxifen', 'Tamoxifeno'),
('Herceptin', 'Trastuzumab'),
('Arimidex', 'Anastrozol'),
('Faslodex', 'Fulvestrant'),
('Xeloda', 'Capecitabina'),
-- Medicamentos para Enfermedad de Alzheimer
('Aricept', 'Donepezil'),
('Namenda', 'Memantina'),
('Exelon', 'Rivastigmina'),
('Razadyne', 'Galantamina'),
('Cerebrolysin', 'Cerebrolysin'),
-- Medicamentos para Esclerodermia
('Tracleer', 'Bosentán'),
('Ofev', 'Nintedanib'),
('Cellcept', 'Micofenolato mofetil'),
('Methotrexate', 'Metotrexato'),
('Prednisona', 'Prednisona'),
-- Medicamentos para Miastenia gravis
('Mestinon', 'Pyridostigmina'),
('Imuran', 'Azatioprina'),
('Cellcept', 'Micofenolato mofetil'),
('Prednisona', 'Prednisona'),
('Soliris', 'Eculizumab'),
-- Medicamentos para Mieloma múltiple
('Revlimid', 'Lenalidomida'),
('Velcade', 'Bortezomib'),
('Kyprolis', 'Carfilzomib'),
('Darzalex', 'Daratumumab'),
('Thalomid', 'Talidomida'),
-- Medicamentos para Hepatitis C crónica
('Harvoni', 'Ledipasvir/Sofosbuvir'),
('Epclusa', 'Sofosbuvir/Velpatasvir'),
('Vosevi', 'Sofosbuvir/Velpatasvir/Voxilaprevir'),
('Zepatier', 'Elbasvir/Grazoprevir'),
('Mavyret', 'Glecaprevir/Pibrentasvir'),
-- Continuación de más medicamentos generales para enfermedades graves y complicadas
('Lyrica', 'Pregabalina'),
('Neurontin', 'Gabapentina'),
('Topamax', 'Topiramato'),
('Depakote', 'Ácido valproico'),
('Lamictal', 'Lamotrigina'),
('Keppra', 'Levetiracetam'),
('Tegretol', 'Carbamazepina'),
('Dilantin', 'Fenitoína'),
('Zarontin', 'Etosuximida'),
('Cymbalta', 'Duloxetina'),
('Effexor', 'Venlafaxina'),
('Pristiq', 'Desvenlafaxina'),
('Prozac', 'Fluoxetina'),
('Zoloft', 'Sertralina'),
('Paxil', 'Paroxetina'),
('Lexapro', 'Escitalopram'),
('Remeron', 'Mirtazapina'),
('Elavil', 'Amitriptilina'),
('Nortriptyline', 'Nortriptilina'),
('Imitrex', 'Sumatriptán'),
('Maxalt', 'Rizatriptán'),
('Zomig', 'Zolmitriptán'),
('Relpax', 'Eletriptán'),
('Treximet', 'Sumatriptán/Naproxeno'),
('Lamictal', 'Lamotrigina'),
('Trileptal', 'Oxcarbazepina'),
('Gabitril', 'Tiagabina'),
('Zonegran', 'Zonisamida'),
('Topamax', 'Topiramato'),
('Depakote', 'Ácido valproico'),
('Keppra', 'Levetiracetam'),
('Fycompa', 'Perampanel'),
('Sabril', 'Vigabatrina');

-- Insets  tabla prescripción
INSERT INTO Prescripcion (id_receta, id_medicamento, dosis, frecuencia, fecha_finalizacion, via_administracion)
VALUES
-- Prescripciones para Cáncer de pulmón (Receta 1)
(1, 1, '200 mg', 'Una vez al día', '2024-03-15', 'Oral'),
(1, 2, '500 mg/m2', 'Cada 3 semanas', '2024-06-15', 'Intravenosa'),
(1, 3, '150 mg', 'Diario', '2024-04-10', 'Oral'),
(1, 4, '240 mg', 'Cada 2 semanas', '2024-08-01', 'Intravenosa'),
(1, 5, '7.5 mg/kg', 'Cada 3 semanas', '2024-07-15', 'Intravenosa'),

-- Prescripciones para Insuficiencia renal crónica (Receta 2)
(2, 6, '50-100 U/kg', '3 veces por semana', '2024-05-20', 'Subcutánea'),
(2, 7, '667 mg', '3 veces al día', '2024-06-10', 'Oral'),
(2, 8, '800 mg', '3 veces al día', '2024-04-15', 'Oral'),
(2, 9, '30 mg', 'Diario', '2024-05-30', 'Oral'),
(2, 10, '100 mg', 'Cada 2 semanas', '2024-07-01', 'Intravenosa'),

-- Prescripciones para Leucemia (Receta 3)
(3, 11, '400 mg', 'Diario', '2024-08-05', 'Oral'),
(3, 12, '100 mg', 'Diario', '2024-05-25', 'Oral'),
(3, 13, '400 mg', 'Diario', '2024-06-30', 'Oral'),
(3, 14, '28 mcg', 'Diario', '2024-07-15', 'Intravenosa'),
(3, 15, '600 mg', 'Diario', '2024-08-30', 'Oral'),

-- Prescripciones para ELA (Receta 4)
(4, 16, '50 mg', '2 veces al día', '2024-06-10', 'Oral'),
(4, 17, '60 mg', 'Cada 2 semanas', '2024-08-20', 'Intravenosa'),
(4, 18, '5 mg', '3 veces al día', '2024-06-15', 'Oral'),
(4, 19, '2 mg', '3 veces al día', '2024-07-30', 'Oral'),
(4, 20, '30 mg', 'Cada 12 horas', '2024-07-10', 'Oral'),

-- Prescripciones para Parkinson (Receta 5)
(5, 21, '25/100 mg', '3 veces al día', '2024-06-30', 'Oral'),
(5, 22, '2 mg', '3 veces al día', '2024-05-30', 'Oral'),
(5, 23, '1.5 mg', 'Diario', '2024-07-05', 'Oral'),
(5, 24, '1 mg', 'Una vez al día', '2024-06-25', 'Oral'),
(5, 25, '4 mg', 'Una vez al día', '2024-08-10', 'Transdérmica'),

-- Prescripciones para Fibrosis quística (Receta 6)
(6, 26, '150 mg', 'Cada 12 horas', '2024-09-05', 'Oral'),
(6, 27, '200 mg', 'Cada 12 horas', '2024-08-25', 'Oral'),
(6, 28, '2.5 mg', 'Diario', '2024-07-10', 'Inhalada'),
(6, 29, '300 mg', 'Cada 12 horas', '2024-06-30', 'Inhalada'),
(6, 30, '2 pastillas', 'Cada 12 horas', '2024-09-15', 'Oral'),

-- Prescripciones para Cirrosis hepática (Receta 7)
(7, 31, '40 mg', 'Una vez al día', '2024-08-05', 'Oral'),
(7, 32, '25 mg', 'Una vez al día', '2024-06-30', 'Oral'),
(7, 33, '550 mg', '2 veces al día', '2024-09-01', 'Oral'),
(7, 34, '15 mL', 'Cada 12 horas', '2024-08-15', 'Oral'),
(7, 35, '10 mg', 'Diario', '2024-07-30', 'Oral'),

-- Prescripciones para ACV (Receta 8)
(8, 36, '325 mg', 'Una vez al día', '2024-06-10', 'Oral'),
(8, 37, '75 mg', 'Diario', '2024-07-20', 'Oral'),
(8, 38, '200 mg', '2 veces al día', '2024-08-30', 'Oral'),
(8, 39, '5 mg', 'Diario', '2024-06-30', 'Oral'),
(8, 40, '2.5 mg', 'Cada 12 horas', '2024-07-25', 'Oral'),

-- Prescripciones para Insuficiencia cardíaca congestiva (Receta 9)
(9, 41, '3.125 mg', '2 veces al día', '2024-09-10', 'Oral'),
(9, 42, '97/103 mg', '2 veces al día', '2024-07-30', 'Oral'),
(9, 43, '20 mg', 'Cada 8 horas', '2024-06-30', 'Oral'),
(9, 44, '25 mg', 'Una vez al día', '2024-08-25', 'Oral'),
(9, 45, '5 mg', '2 veces al día', '2024-07-10', 'Oral'),

-- Prescripciones para EPOC (Receta 10)
(10, 46, '18 mcg', 'Diario', '2024-09-05', 'Inhalada'),
(10, 47, '160/4.5 mcg', '2 veces al día', '2024-07-15', 'Inhalada'),
(10, 48, '250/50 mcg', '2 veces al día', '2024-08-30', 'Inhalada'),
(10, 49, '100/25 mcg', 'Diario', '2024-07-30', 'Inhalada'),
(10, 50, '500 mcg', 'Diario', '2024-09-20', 'Oral'),

-- Continuación con otras prescripciones relacionadas con los otros diagnósticos y medicamentos
-- Prescripciones para Cáncer de páncreas (Receta 11)
(11, 51, '1000 mg/m2', 'Cada semana', '2024-08-30', 'Intravenosa'),
(11, 52, '125 mg/m2', 'Cada semana', '2024-07-15', 'Intravenosa'),
(11, 53, '150 mg', 'Diario', '2024-09-10', 'Oral'),
(11, 54, '85 mg/m2', 'Cada 2 semanas', '2024-10-05', 'Intravenosa'),
(11, 55, '70 mg/m2', 'Cada 3 semanas', '2024-08-30', 'Intravenosa'),

-- Prescripciones para Lupus eritematoso sistémico (Receta 12)
(12, 56, '200 mg', 'Diario', '2024-09-05', 'Oral'),
(12, 57, '10 mg/kg', 'Cada 4 semanas', '2024-08-20', 'Intravenosa'),
(12, 58, '1 g', '2 veces al día', '2024-07-30', 'Oral'),
(12, 59, '50 mg', 'Una vez al día', '2024-09-15', 'Oral'),
(12, 60, '10 mg', 'Diario', '2024-06-30', 'Oral'),

-- Prescripciones para Esquizofrenia (Receta 13)
(13, 61, '10 mg', 'Una vez al día', '2024-06-30', 'Oral'),
(13, 62, '150 mg', 'Diario', '2024-08-15', 'Oral'),
(13, 63, '2 mg', '2 veces al día', '2024-07-30', 'Oral'),
(13, 64, '15 mg', 'Diario', '2024-06-10', 'Oral'),
(13, 65, '300 mg', 'Cada semana', '2024-09-20', 'Intramuscular'),

-- Prescripciones para Enfermedad de Crohn (Receta 14)
(14, 66, '40 mg', 'Cada 2 semanas', '2024-07-05', 'Subcutánea'),
(14, 67, '5 mg/kg', 'Cada 8 semanas', '2024-10-10', 'Intravenosa'),
(14, 68, '300 mg', 'Cada 8 semanas', '2024-09-25', 'Intravenosa'),
(14, 69, '2 mg/kg', 'Diario', '2024-06-30', 'Oral'),
(14, 70, '800 mg', '3 veces al día', '2024-08-30', 'Oral'),

-- Prescripciones para Cáncer de mama (Receta 15)
(15, 71, '20 mg', 'Diario', '2024-12-15', 'Oral'),
(15, 72, '8 mg/kg', 'Cada 3 semanas', '2024-09-05', 'Intravenosa'),
(15, 73, '1 mg', 'Diario', '2024-10-20', 'Oral'),
(15, 74, '500 mg', 'Cada 4 semanas', '2024-08-30', 'Intramuscular'),
(15, 75, '1250 mg/m2', 'Cada 2 semanas', '2024-07-30', 'Oral'),

-- Prescripciones para Enfermedad de Alzheimer (Receta 16)
(16, 76, '10 mg', 'Diario', '2024-09-05', 'Oral'),
(16, 77, '20 mg', 'Diario', '2024-08-15', 'Oral'),
(16, 78, '9.5 mg', 'Diario', '2024-07-20', 'Transdérmica'),
(16, 79, '8 mg', 'Cada 12 horas', '2024-06-30', 'Oral'),
(16, 80, '1 ampolla', 'Cada semana', '2024-08-30', 'Intramuscular'),

-- Prescripciones para Esclerodermia (Receta 17)
(17, 81, '62.5 mg', '2 veces al día', '2024-10-01', 'Oral'),
(17, 82, '150 mg', '2 veces al día', '2024-09-25', 'Oral'),
(17, 83, '1 g', '2 veces al día', '2024-08-10', 'Oral'),
(17, 84, '10 mg', '1 vez por semana', '2024-09-30', 'Subcutánea'),
(17, 85, '10 mg', 'Una vez al día', '2024-08-20', 'Oral'),

-- Prescripciones para Miastenia gravis (Receta 18)
(18, 86, '60 mg', 'Cada 4 horas', '2024-07-30', 'Oral'),
(18, 87, '50 mg', 'Diario', '2024-08-25', 'Oral'),
(18, 88, '1 g', '2 veces al día', '2024-09-15', 'Oral'),
(18, 89, '10 mg', 'Cada 2 días', '2024-06-30', 'Oral'),
(18, 90, '900 mg', 'Cada 2 semanas', '2024-08-30', 'Intravenosa'),

-- Prescripciones para Mieloma múltiple (Receta 19)
(19, 91, '25 mg', 'Diario', '2024-08-15', 'Oral'),
(19, 92, '1.3 mg/m2', 'Cada semana', '2024-07-05', 'Subcutánea'),
(19, 93, '20 mg/m2', '2 veces por semana', '2024-09-10', 'Intravenosa'),
(19, 94, '16 mg/kg', 'Cada 4 semanas', '2024-10-20', 'Intravenosa'),
(19, 95, '200 mg', 'Cada 4 semanas', '2024-08-30', 'Oral'),

-- Prescripciones para Hepatitis C crónica (Receta 20)
(20, 96, '90/400 mg', 'Diario', '2024-11-15', 'Oral'),
(20, 97, '400/100 mg', 'Diario', '2024-09-05', 'Oral'),
(20, 98, '400/100/100 mg', 'Diario', '2024-10-10', 'Oral'),
(20, 99, '50 mg', 'Diario', '2024-08-15', 'Oral'),
(20, 100, '300 mg', 'Diario', '2024-12-20', 'Oral'),

-- Últimas prescripciones para completar 200 registros
(1, 101, '50 mg', '2 veces al día', '2024-09-30', 'Oral'),
(2, 102, '10 mg', 'Cada 12 horas', '2024-11-15', 'Oral'),
(3, 103, '200 mg', 'Una vez al día', '2024-08-10', 'Oral'),
(4, 104, '150 mg', 'Diario', '2024-10-20', 'Oral'),
(5, 105, '75 mg', '2 veces al día', '2024-09-30', 'Oral');


