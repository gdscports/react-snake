CREATE DATABASE snakeLeaderboard;
CREATE TABLE leaderboard(playerID SERIAL PRIMARY KEY, username VARCHAR(50), score INT, dateOFAchievment DATE NOT NULL);


