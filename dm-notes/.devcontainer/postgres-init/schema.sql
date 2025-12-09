DROP TABLE IF EXISTS characters,
abilities,
ability_scores,
weapons,
monsters,
monster_weapons,
monster_ability_scores;

CREATE TABLE IF NOT EXISTS characters (
    id SMALLSERIAL PRIMARY KEY UNIQUE,
    name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS abilities (
    id SMALLSERIAL PRIMARY KEY UNIQUE,
    name VARCHAR(20) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS ability_scores (
    id SMALLSERIAL PRIMARY KEY UNIQUE,
    ability_id SMALLINT REFERENCES abilities (id),
    score SMALLINT NOT NULL
);

CREATE TABLE IF NOT EXISTS weapons (
    id SMALLSERIAL PRIMARY KEY UNIQUE,
    name VARCHAR(50) UNIQUE NOT NULL,
    damage_dice VARCHAR(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS monsters (
    id SMALLSERIAL PRIMARY KEY UNIQUE,
    name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS monster_weapons (
    id SMALLSERIAL PRIMARY KEY UNIQUE,
    monster_id SMALLINT REFERENCES monsters (id),
    weapon_id SMALLINT REFERENCES weapons (id)
);

CREATE TABLE IF NOT EXISTS monster_ability_scores (
    id SMALLSERIAL PRIMARY KEY UNIQUE,
    monster_id SMALLINT REFERENCES monsters (id),
    ability_score SMALLINT REFERENCES ability_scores (id)
);