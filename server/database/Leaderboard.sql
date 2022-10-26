CREATE DATABASE SnakeLeaderboard;
CREATE TABLE Leaderboard(Id SERIAL PRIMARY KEY, Username VARCHAR(50), Score INT, DateOfAchievment DATE NOT NULL);


