/*
  Warnings:

  - You are about to drop the column `admission_date` on the `employee_vacation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[registration_token]` on the table `employee` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `admission_date` to the `employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `registration_token` to the `employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "employee" ADD COLUMN     "admission_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "registration_token" TEXT NOT NULL,
ADD COLUMN     "token_used" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "employee_vacation" DROP COLUMN "admission_date";

-- CreateIndex
CREATE UNIQUE INDEX "employee_registration_token_key" ON "employee"("registration_token");
