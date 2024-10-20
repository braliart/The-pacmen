-- Creación de la tabla Paciente
CREATE TABLE IF NOT EXISTS Paciente (
    id_paciente SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido_paterno VARCHAR(50) NOT NULL,
    apellido_materno VARCHAR(50),
    fecha_nacimiento DATE NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    direccion TEXT,
    telefono VARCHAR(15),
    alergias TEXT,
    fumador BOOLEAN NOT NULL,
    se_droga TEXT,
    alcohol BOOLEAN NOT NULL
);

-- Creación de la tabla Receta
CREATE TABLE IF NOT EXISTS Receta (
    id_receta SERIAL PRIMARY KEY,
    id_paciente INT REFERENCES Paciente(id_paciente),
    fecha DATE NOT NULL,
    diagnostico TEXT NOT NULL,
    doctor VARCHAR(100) NOT NULL,
    cedula_profesional VARCHAR(20) NOT NULL,
    direccion TEXT
);

-- Creación de la tabla Medicamento
CREATE TABLE IF NOT EXISTS Medicamento (
    id_medicamento SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    sustancia VARCHAR(100) NOT NULL
);

-- Creación de la tabla Prescripcion
CREATE TABLE IF NOT EXISTS Prescripcion (
    id_prescripcion SERIAL PRIMARY KEY,
    id_receta INT REFERENCES Receta(id_receta),
    id_medicamento INT REFERENCES Medicamento(id_medicamento),
    dosis VARCHAR(100) NOT NULL,
    frecuencia VARCHAR(100) NOT NULL,
    fecha_finalizacion DATE NOT NULL,
    via_administracion VARCHAR(50) NOT NULL
);

--Creación de la tabla Output
CREATE TABLE IF NOT EXISTS Output (
    id_output SERIAL PRIMARY KEY,
    id_receta1 INT REFERENCES Receta(id_receta),
    id_receta2 INT REFERENCES Receta(id_receta),
    resultado TEXT
);
