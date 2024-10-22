/*
  Warnings:

  - Made the column `anime_image` on table `collection` required. This step will fail if there are existing NULL values in that column.
  - Made the column `anime_title` on table `collection` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `anime_title` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `collection` MODIFY `anime_image` VARCHAR(191) NOT NULL,
    MODIFY `anime_title` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `comment` ADD COLUMN `anime_title` VARCHAR(191) NOT NULL;
