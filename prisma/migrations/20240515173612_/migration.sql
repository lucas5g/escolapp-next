/*
  Warnings:

  - You are about to drop the `Game` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Genre` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Group` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Modality` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Place` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Setup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Team` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Unity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Game` DROP FOREIGN KEY `Game_modalityId_fkey`;

-- DropForeignKey
ALTER TABLE `Game` DROP FOREIGN KEY `Game_placeId_fkey`;

-- DropForeignKey
ALTER TABLE `Game` DROP FOREIGN KEY `Game_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Group` DROP FOREIGN KEY `Group_unityId_fkey`;

-- DropForeignKey
ALTER TABLE `Modality` DROP FOREIGN KEY `Modality_unityId_fkey`;

-- DropForeignKey
ALTER TABLE `Place` DROP FOREIGN KEY `Place_unityId_fkey`;

-- DropForeignKey
ALTER TABLE `Setup` DROP FOREIGN KEY `Setup_unityId_fkey`;

-- DropForeignKey
ALTER TABLE `Team` DROP FOREIGN KEY `Team_genreId_fkey`;

-- DropForeignKey
ALTER TABLE `Team` DROP FOREIGN KEY `Team_groupId_fkey`;

-- DropForeignKey
ALTER TABLE `Team` DROP FOREIGN KEY `Team_modalityId_fkey`;

-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_unityId_fkey`;

-- DropTable
DROP TABLE `Game`;

-- DropTable
DROP TABLE `Genre`;

-- DropTable
DROP TABLE `Group`;

-- DropTable
DROP TABLE `Modality`;

-- DropTable
DROP TABLE `Place`;

-- DropTable
DROP TABLE `Setup`;

-- DropTable
DROP TABLE `Team`;

-- DropTable
DROP TABLE `Unity`;

-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `unities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `spreedsheetId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `places` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `unityId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `modalities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `type` ENUM('collective', 'individual', 'participative', 'ranking') NOT NULL,
    `membersQuantity` INTEGER NOT NULL,
    `teamsQuantity` INTEGER NOT NULL,
    `unityId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `profile` ENUM('admin', 'coordinator', 'judge', 'manager', 'representative', 'teacher') NOT NULL,
    `unityId` INTEGER NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `teams` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `group` VARCHAR(191) NOT NULL,
    `genre` ENUM('misto', 'mas', 'fem') NOT NULL,
    `modalityId` INTEGER NULL,
    `unityId` INTEGER NULL,
    `students` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `games` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `startHours` VARCHAR(191) NOT NULL,
    `endHours` VARCHAR(191) NOT NULL,
    `comments` VARCHAR(191) NULL,
    `teams` JSON NOT NULL,
    `placeId` INTEGER NULL,
    `modalityId` INTEGER NULL,
    `userId` INTEGER NULL,
    `unityId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `setups` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `documentLink` VARCHAR(191) NOT NULL,
    `unityId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `places` ADD CONSTRAINT `places_unityId_fkey` FOREIGN KEY (`unityId`) REFERENCES `unities`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `modalities` ADD CONSTRAINT `modalities_unityId_fkey` FOREIGN KEY (`unityId`) REFERENCES `unities`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_unityId_fkey` FOREIGN KEY (`unityId`) REFERENCES `unities`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `teams` ADD CONSTRAINT `teams_modalityId_fkey` FOREIGN KEY (`modalityId`) REFERENCES `modalities`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `teams` ADD CONSTRAINT `teams_unityId_fkey` FOREIGN KEY (`unityId`) REFERENCES `unities`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `games` ADD CONSTRAINT `games_placeId_fkey` FOREIGN KEY (`placeId`) REFERENCES `places`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `games` ADD CONSTRAINT `games_modalityId_fkey` FOREIGN KEY (`modalityId`) REFERENCES `modalities`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `games` ADD CONSTRAINT `games_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `games` ADD CONSTRAINT `games_unityId_fkey` FOREIGN KEY (`unityId`) REFERENCES `unities`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `setups` ADD CONSTRAINT `setups_unityId_fkey` FOREIGN KEY (`unityId`) REFERENCES `unities`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
