-- Creación de la tabla Paciente
CREATE TABLE Paciente (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido_paterno VARCHAR(50) NOT NULL,
    apellido_materno VARCHAR(50),
    correo VARCHAR(100) UNIQUE NOT NULL,
    direccion TEXT,
    telefono VARCHAR(15),
    alergias TEXT
);

-- Creación de la tabla Receta
CREATE TABLE Receta (
    id SERIAL PRIMARY KEY,
    id_paciente INT REFERENCES Paciente(id),
    fecha DATE NOT NULL,
    diagnostico TEXT NOT NULL,
    doctor VARCHAR(100) NOT NULL,
    cedula_profesional VARCHAR(20) NOT NULL,
    direccion TEXT
);

-- Creación de la tabla Medicamento
CREATE TABLE Medicamento (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    sustancia VARCHAR(100) NOT NULL
);

-- Creación de la tabla Prescripcion
CREATE TABLE Prescripcion (
    id SERIAL PRIMARY KEY,
    id_receta INT REFERENCES Receta(id),
    id_medicamento INT REFERENCES Medicamento(id),
    dosis VARCHAR(100) NOT NULL,
    frecuencia VARCHAR(100) NOT NULL,
    via_administracion VARCHAR(50) NOT NULL
);

--Creación de la tabla Output
CREATE TABLE Output (
    id SERIAL PRIMARY KEY,
    id_receta1 INT REFERENCES Receta(id),
    id_receta2 INT REFERENCES Receta(id),
    resultado TEXT
);
