INSERT INTO
    characters (name)
VALUES ('Gundren Rockseeker'),
    ('Sildar Hallwinter');

INSERT INTO
    abilities (name)
VALUES ('STR'),
    ('DEX'),
    ('CON'),
    ('INT'),
    ('WIS'),
    ('CHA');

INSERT INTO
    weapons (name, damage_dice)
VALUES ('Scimitar', '1d6'),
    ('Longsword', '1d8'),
    ('Greatsword', '2d8');

INSERT INTO
    monsters (name)
VALUES ('Goblin'),
    ('Hobgoblin'),
    ('Bugbear');

INSERT INTO monster_weapons (monster_id, weapon_id) VALUES (1, 1);

INSERT INTO
    ability_scores (ability_id, score)
VALUES (1, 8),
    (2, 14),
    (3, 10),
    (4, 10),
    (5, 8),
    (6, 8);

INSERT INTO
    monster_ability_scores (monster_id, ability_score)
VALUES (1, 1),
    (1, 2),
    (1, 3),
    (1, 4),
    (1, 5),
    (1, 6);