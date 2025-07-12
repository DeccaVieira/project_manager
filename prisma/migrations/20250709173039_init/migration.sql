-- CreateTable
CREATE TABLE "employee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date_of_birth" TIMESTAMP(3) NOT NULL,
    "rg" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "drivers_license" BOOLEAN NOT NULL,
    "occupation_id" INTEGER NOT NULL,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phone" (
    "id" SERIAL NOT NULL,
    "ddd" INTEGER NOT NULL,
    "phoneNumber" BIGINT NOT NULL,
    "employee_id" INTEGER NOT NULL,

    CONSTRAINT "phone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cnh" (
    "id" SERIAL NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "number_license" TEXT NOT NULL,
    "validity" TIMESTAMP(3) NOT NULL,
    "first_drivers_license" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cnh_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee_vacation" (
    "id" SERIAL NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "admission_date" TIMESTAMP(3) NOT NULL,
    "vacation_days" INTEGER NOT NULL,

    CONSTRAINT "employee_vacation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contracts" (
    "id" SERIAL NOT NULL,
    "name_project" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_forecast" INTEGER NOT NULL,

    CONSTRAINT "contracts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_team" (
    "id" SERIAL NOT NULL,
    "contracts_id" INTEGER NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "project_team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Occupation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description_of_occupation" TEXT,
    "salary" DOUBLE PRECISION,
    "dangerousness" BOOLEAN,

    CONSTRAINT "Occupation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" SERIAL NOT NULL,
    "zip_code" TEXT,
    "street_name" TEXT,
    "number_of_house" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "employee_id" INTEGER NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employee_cpf_key" ON "employee"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Occupation_name_key" ON "Occupation"("name");

-- CreateIndex
CREATE UNIQUE INDEX "address_employee_id_key" ON "address"("employee_id");

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_occupation_id_fkey" FOREIGN KEY ("occupation_id") REFERENCES "Occupation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "phone" ADD CONSTRAINT "phone_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cnh" ADD CONSTRAINT "cnh_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_vacation" ADD CONSTRAINT "employee_vacation_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_team" ADD CONSTRAINT "project_team_contracts_id_fkey" FOREIGN KEY ("contracts_id") REFERENCES "contracts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_team" ADD CONSTRAINT "project_team_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
