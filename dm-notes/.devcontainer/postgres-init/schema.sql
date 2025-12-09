DROP TABLE IF EXISTS characters, abilities;

CREATE TABLE IF NOT EXISTS characters (
    id SERIAL,
    name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS abilities (
    id SERIAL,
    name VARCHAR(20) UNIQUE NOT NULL
);