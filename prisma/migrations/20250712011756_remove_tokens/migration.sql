/*
  Warnings:

  - You are about to drop the column `registration_token` on the `employee` table. All the data in the column will be lost.
  - You are about to drop the column `token_used` on the `employee` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "employee_registration_token_key";

-- AlterTable
ALTER TABLE "employee" DROP COLUMN "registration_token",
DROP COLUMN "token_used";
