DROP DATABASE IF EXISTS song_DB;

CREATE DATABASE song_DB;


USE song_DB;

CREATE TABLE top5000 (
 position INTEGER NOT NULL,
 songArtist VARCHAR(100),
 songName VARCHAR(100),
 songYear INTEGER (100),
 raw_total DECIMAL(10,4),
 raw_usa DECIMAL(10,4),
 raw_uk DECIMAL(10,4),
 raw_eur DECIMAL(10,4),
 raw_world DECIMAL(10,4),
 PRIMARY KEY (position)
);

SELECT*FROM top5000;