# Tarkvaratehnika
Projekt aines tarkvaratehnika

Link Google Drive'le: https://drive.google.com/drive/folders/0Bx0aY4YWbWRtc2RNRFFnOVdBZTQ?usp=sharing
CREATE TABLE Klient(
ID INTEGER(3) NOT NULL PRIMARY KEY,
email TEXT(255) NULL,
passwod TEXT(255) NULL,
nimi TEXT(255) NULL,
per_nimi TEXT(255) NULL,
adress TEXT(255) NULL,
telefon INTEGER(10) NULL,
InfoID TEXT (255) NULL
);


CREATE TABLE Info(
ID INTEGER(3) NOT NULL PRIMARY KEY,
InfoID TEXT(255) NULL,
InfoCategory ENUM('tulud','kulud')NULL
InfoNimi TEXT(255) NULL,
EeldatavSumm INTEGER NULL,
TegelikSumm INTEGER NULL);




ALTER TABLE Klient ADD CONSTRAINT inf_id FOREIGN KEY (InfoID) REFERENCES Info (InfoID);


